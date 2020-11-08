<template>
  <div class="header">
    <header>
      <div class="navbar">
        <div class="bars">
          <h2>
            <label for="check" @click="movebody()">
              <font-awesome-icon icon="bars" />
            </label>
            <router-link to="/">
              <font-awesome-icon icon="dog" />Pet sitting
            </router-link>
          </h2>
        </div>
        <div class="shop">
          <div class="itemofshop" v-if="itemofshop() > 0">
            <sup>{{ itemofshop() }}</sup>
          </div>
          <h2>
            <router-link to="/shop">
              <font-awesome-icon icon="shopping-cart" />
            </router-link>
          </h2>
        </div>
      </div>
    </header>

    <section>
      <input type="checkbox" id="check" />
      <ul class="menu">
        <li @click="goTop()">
          <router-link to="/">Home</router-link>
        </li>
        <li @click="goTop()">
          <router-link to="/about">About</router-link>
        </li>
        <li @click="goTop()">
          <router-link to="/veterinarian">Veterinarian</router-link>
        </li>
        <li @click="goTop()">
          <router-link to="/services">Services</router-link>
        </li>
        <li @click="goTop()">
          <router-link to="/gallery">Gallery</router-link>
        </li>
        <li @click="goTop()">
          <router-link to="/pricing">Pricing</router-link>
        </li>
        <li @click="goTop()">
          <router-link to="/blog">Blog</router-link>
        </li>
        <li @click="goTop()">
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
      <label for="check" class="menu-bg" @click="movebody()"></label>
    </section>
  </div>
</template>

<style lang="scss" src="./style.scss">
</style>

<script>
export default {
  methods: {
    movebody() {
      var body = document.getElementsByTagName("body");
      if (body[0].style.width == "80%") {
        body[0].removeAttribute(
          "style",
          "width:100%;position:relative;left:0;"
        );
      } else {
        body[0].setAttribute("style", "width:80%;position:relative;left:20%;");
      }
    },
    itemofshop() {
      let target = this.$store.state.content;
      // console.log(target)
      return target.length;
    },
    goTop() {
      // console.log("top")
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
  },
};
</script>
