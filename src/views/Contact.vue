<template>
  <div id="contact">
    <breadcomponent />
    <formcomponent />
  </div>
</template>

<script>
import breadcomponent from "@/components/bread.vue";
import formcomponent from "@/components/form.vue";

export default {
  name: "contact",
  components: {
    breadcomponent,
    formcomponent,
  },
};
</script>