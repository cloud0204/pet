<template>
  <footer>
    <div class="footer">
      <div class="box">
        <h4>Petsitting</h4>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        <font-awesome-icon :icon="['fab', 'twitter']"  class="iconL"/>
        <font-awesome-icon :icon="['fab', 'facebook']" class="iconL"/>
        <font-awesome-icon :icon="['fab', 'instagram']" class="iconL"/>

      </div>
      <div class="box">
        <h4>Latest News</h4>
        <div class="news">
          <section v-for="item in getNewBlog" :key="item.src">
            <div class="jpg">
              <img :src="require(`@/assets/jpg/${item.src}`)" alt="">
            </div>
            <div class="text">
              <a href=""><p>{{item.title}}</p></a>
              <span>{{item.time}}</span>
            </div>
          </section>
        </div>

      </div>
      <div class="box">
        <h4>Quick Links</h4>
        <ul>
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
      </div>
      <div class="box">
        <h4>Have a Questions?</h4>
        <ul>
          <li>
            <font-awesome-icon icon="map" class="iconR"/>
            <span class="text">taiwan Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Tempora rem recusandae praesentium debitis et molestiae laborum delectus tempore harum
              officiis.
            </span>
          </li>
          <li>
            <font-awesome-icon icon="phone" class="iconR"/>
            <span class="text">0919546545</span>
          </li>
          <li>
            <font-awesome-icon icon="paper-plane" class="iconR"/>
            <span class="text">giuygig@ui.com</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      <p>edit by cloud in 2020</p>
    </div>
  </footer>  
</template>

<style lang="scss" src="./style.scss">
</style>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      blog: [],
    };
  },
  beforeCreate() {
    axios
      .get("./blog.json")
      .then((res) => {
        this.blog = res.data.blog;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed:{
    getNewBlog(){
      return this.blog.slice(0,2)
    }
  },
  methods:{
    goTop() {
      // console.log("top")
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
  }
}
</script>

