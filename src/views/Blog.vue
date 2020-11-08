<template>
  <div id="blog">
    <breadcomponent />
    <blogcomponent />
  </div>
</template>

<script>
import breadcomponent from "@/components/bread.vue";
import blogcomponent from "@/components/blog/index.vue";

export default {
  name: "blog",
  components: {
    breadcomponent,
    blogcomponent,
  },
};
</script>
