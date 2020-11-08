<template>
  <div class="text">
    <section v-if="edit===false" @click="showinput">
      <span>{{number}}</span>
    </section>
    <section v-else>
      <input
        type="number"
        v-model.trim="editNumber"
        @keyup.enter="closeinput"
        @keyup.esc="closeinput"
        @blur="closeinput"
        v-focus
      />
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      edit: false,
    };
  },
  props: {
    number: {
      type: Number,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    editNumber: {
      get() {
        return this.number;
      },
      set(val) {
        if (val < 1) return this.removeHandler();
        this.$store.commit("update_shop", {
          index: this.index,
          data: {
            number: +val,
          },
        });
      },
    },
  },
  methods: {
    showinput() {
      this.edit = true;
    },
    closeinput() {
      this.edit = false;
    },
    removeHandler() {
      if (
        confirm(`是否確認刪除"${this.$store.state.content[this.index].name}"?`)
      )
        this.$store.commit("remove_shop", this.index);
    },
  },
};
</script>
