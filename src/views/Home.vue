<template>
  <div id="home">
    <breadcomponent />
    <homecomponent />
    <choosecomponent />
    <countercomponent />
    <questioncomponent />
    <pricecomponent />
    <gallerycomponent />
    <blogcomponent />
    <formcomponent />
  </div>
</template>

<script>
import breadcomponent from "@/components/bread.vue";
import homecomponent from "@/components/home/index.vue";
import choosecomponent from "@/components/choose.vue";
import countercomponent from "@/components/counter.vue";
import questioncomponent from "@/components/question/index.vue";
import pricecomponent from "@/components/price.vue";
import gallerycomponent from "@/components/gallery/index.vue";
import blogcomponent from "@/components/blog/index.vue";
import formcomponent from "@/components/form.vue";

export default {
  name: "home",
  components: {
    breadcomponent,
    homecomponent,
    choosecomponent,
    countercomponent,
    questioncomponent,
    pricecomponent,
    gallerycomponent,
    blogcomponent,
    formcomponent,
  },
};
</script>
