<template>
  <div id="app">
    <section v-if="this.router !== ''">
      <headercomponent />
      <router-view />
      <footercomponent />
    </section>

    <section v-else>
      <headercomponent />
      <breadcomponent />
      <homecomponent />
      <choosecomponent />
      <countercomponent />
      <questioncomponent />
      <pricecomponent />
      <gallerycomponent />
      <blogcomponent />
      <formcomponent />
      <footercomponent />
    </section>
  </div>
</template>

<style lang="scss" src="@/style.scss"></style>

<script>
import headercomponent from "@/components/header/index.vue";
import breadcomponent from "@/components/bread.vue";
import homecomponent from "@/components/home/index.vue";
import choosecomponent from "@/components/choose.vue";
import countercomponent from "@/components/counter.vue";
import questioncomponent from "@/components/question/index.vue";
import pricecomponent from "@/components/price.vue";
import gallerycomponent from "@/components/gallery/index.vue";
import blogcomponent from "@/components/blog/index.vue";
import formcomponent from "@/components/form.vue";
import footercomponent from "@/components/footer/index.vue";

export default {
  data() {
    return {
      cssanimate: {
        majorClass: [
          ".navbar",
          ".banner",
          ".home",
          ".choose",
          ".counter",
          ".question",
          ".price",
          ".gallery",
          ".blog",
          ".form",
          ".footer",
        ],
        filterClass: [],
      },
      counterEl: [],
      counter: [],
      router: "",
    };
  },
  components: {
    headercomponent,
    breadcomponent,
    homecomponent,
    choosecomponent,
    countercomponent,
    questioncomponent,
    pricecomponent,
    gallerycomponent,
    blogcomponent,
    formcomponent,
    footercomponent,
  },
  mounted() {
    this.$store.dispatch("INIT_shop");

    this.cssanimate.filterClass = this.cssanimate.majorClass.filter(
      (item) => document.querySelector(item) !== null
    );
    this.counterEl = document.getElementsByClassName("number");
    this.counter = [...this.counterEl].map(() => 0);
    window.onload = this.jump;
    window.addEventListener("scroll", this.jump);
  },
  updated() {
    this.cssanimate.filterClass = this.cssanimate.majorClass.filter(
      (item) => document.querySelector(item) !== null
    );
    //更新
    this.counterEl = null;
    this.counterEl = document.getElementsByClassName("number");
    this.counter = [...this.counterEl].map(() => 0);
  },
  computed: {
    getElData() {
      let data = this.cssanimate.filterClass.map((item) => {
        let el = document.querySelector(item);
        return {
          filterClass: item,
          el: el,
          position: el.offsetTop,
        };
      });
      return data;
    },
    getCounterElData() {
      let element = [...this.counterEl];
      let speed = 0;
      let data = element.map((item) => {
        let final = item.dataset.number;
        if (final > 1000) speed = 100;
        if (final <= 1000) speed = 1000;
        return {
          el: item,
          zero: 0,
          final,
          speed,
        };
      });
      return data;
    },
  },
  methods: {
    jump() {
      for (let i = 0; i < this.getElData.length; i++) {
        let { el, filterClass, position } = this.getElData[i];
        if (window.scrollY + screen.height * 0.6 > position) {
          el.classList.add("show");
          if (filterClass === ".counter") this.counterStart();
        }
      }
    },
    counterStart() {
      // console.log("counter");
      this.getCounterElData.forEach((x, index) => {
        let { el, final, speed } = x;
        let set = setTimeout(() => {
          el.innerHTML = this.counter[index];
          if (el.innerHTML === final) return clearTimeout(set);
          this.counter[index]++;
          this.counterStart();
        }, speed);
      });
    },
  },
  watch: {
    $route({ name }) {
      this.router = name;
      this.jump;
      console.log(name);
    },
    counter(val) {
      console.log(val);
    },
  },
};
</script>
