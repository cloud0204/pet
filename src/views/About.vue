<template>
  <div id="about">
    <breadcomponent />
    <choosecomponent />
    <countercomponent />
    <questioncomponent />
    <formcomponent />
  </div>
</template>

<script>
import breadcomponent from "@/components/bread.vue";
import choosecomponent from "@/components/choose.vue";
import countercomponent from "@/components/counter.vue";
import questioncomponent from "@/components/question/index.vue";
import formcomponent from "@/components/form.vue";
export default {
  name: "about",
  components: {
    breadcomponent,
    choosecomponent,
    countercomponent,
    questioncomponent,
    formcomponent,
  },
};
</script>
