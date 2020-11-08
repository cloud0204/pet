<template>
  <div id="gallery">
    <breadcomponent />
    <gallerycomponent />
  </div>
</template>

<script>
import breadcomponent from "@/components/bread.vue";
import gallerycomponent from "@/components/gallery/index.vue";

export default {
  name: "gallery",
  components: {
    breadcomponent,
    gallerycomponent,
  },
};
</script>