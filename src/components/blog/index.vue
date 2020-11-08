<template>
  <div class="blog">
    <div class="title">
      <h3>Latest news from our blog</h3>
      <!-- <h2>{{blog[3]?blog[3].time:null}}</h2> -->
    </div>
    <!-- <div class="jpg">
      <img :src="getJpgPath.src" alt v-if="blog[3]" />
    </div>-->
    <!-- <div class="jpg">
      <img src="../../assets/jpg/4.jpg" alt v-if="blog[3]" />
    </div>
    <div class="jpg">
      <img src="@/assets/jpg/4.jpg" alt v-if="blog[3]" />
    </div>
    <div class="jpg">
      <img :src="require('@/assets/jpg/4.jpg')" alt v-if="blog[3]" />
    </div> -->
    <!-- <div class="jpg">
      <img :src="require(blog[3].src)" alt v-if="blog[3]" />
    </div>-->
    <div class="box" v-if="blog!==[]">
      <div class="blog-box" v-for="(item,index) in blog" :key="item.src">
        <!-- <div class="jpg" style="background: url(item.src)"></div> -->
        <div class="jpg">
          <img :src="getJpgPath(index).src" v-if="blog[index]"/>
        </div>
        <!-- <div class="jpg">
          <img :src="src" alt />
        </div> -->
        <div class="text">
          <span>{{item.time}}</span>
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss">
</style>

<script>
import axios from "axios";
// import img from "@/assets/jpg/4.jpg";
export default {
  data() {
    return {
      blog: [],
      // src:require('@/assets/jpg/4.jpg')
    };
  },
  beforeCreate() {
    axios
      .get("./blog.json")
      .then((res) => {
        // console.log(res.data)
        this.blog = res.data.blog;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    getJpgPath(index) {
      let {src}=this.blog[index]
      // console.log(src);
      // console.log(`${this.blog[index].src}`);
      return {src:require(`@/assets/jpg/${src}`)}
    },
  },
};
</script>