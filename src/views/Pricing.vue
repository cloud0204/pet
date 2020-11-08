<template>
  <div id="pricing">
    <breadcomponent />
    <pricecomponent />
    <formcomponent />
  </div>
</template>

<script>
import breadcomponent from "@/components/bread.vue";
import pricecomponent from "@/components/price.vue";
import formcomponent from "@/components/form.vue";

export default {
  name: "pricing",
  components: {
    breadcomponent,
    pricecomponent,
    formcomponent,
  },
};
</script>