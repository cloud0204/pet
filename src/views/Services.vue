<template>
  <div id="services">
    <breadcomponent />
    <choosecomponent />
    <homecomponent />
  </div>
</template>

<script>
import breadcomponent from "@/components/bread.vue";
import choosecomponent from "@/components/choose.vue";
import homecomponent from "@/components/home/index.vue";

export default {
  name: "services",
  components: {
    breadcomponent,
    choosecomponent,
    homecomponent,
  },
};
</script>