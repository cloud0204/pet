<template>
  <div class="gallery">
    <div class="title">
      <h3>Pets Gallery</h3>
    </div>
    <div class="gallery-box">
      <div
        :class="`jpg-${index + 1}`"
        v-for="(item, index) in gallery"
        :key="index"
      >
        <div class="bg-opacity"></div>
        <a @click="openJpg(item, index)" @keyup.esc="closeJpg" @blur="closeJpg">
          <font-awesome-icon icon="search-plus" />
        </a>
        <div class="text">
          <h4>cat{{ index + 1 }}</h4>
          <h2>dog{{ index + 1 }}</h2>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div id="jpgShow" v-if="index !== null || src !== ''">
        <div class="jpg">
          <img :src="require(`../../assets/jpg/${src}`)" alt="" />
          <p>{{ index + 1 }}/{{ gallery.length }}</p>
        </div>
        <div class="close" @click="closeJpg">❌</div>
        <div class="arrow right" @click="nextJpg(index, 1)">❱</div>
        <div class="arrow left" @click="nextJpg(index, -1)">❰</div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" src="./style.scss">
</style>

<script>
export default {
  data() {
    return {
      gallery: [
        { src: "banner.jpg" },
        { src: "care.jpg" },
        { src: "happy.jpg" },
        { src: "relax.jpg" },
        { src: "see.jpg" },
        { src: "about.jpg" },
      ],
      src: "",
      index: null,
    };
  },
  methods: {
    openJpg({ src }, index) {
      // let el = document.getElementById("jpgShow");
      this.src = src;
      this.index = index;
      // el.style.display = "block";
      console.log(src);
    },
    closeJpg() {
      // let el = document.getElementById("jpgShow");
      // el.style.display = "none";
      this.src = "";
      this.index = null;
    },
    nextJpg(index, n) {
      let target = (this.gallery.length + index + n) % this.gallery.length;
      this.index = target;
      this.src = this.gallery[target].src;
    },
  },
};
</script>
 