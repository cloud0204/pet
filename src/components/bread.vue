<template>
  <div class="banner">
    <section name="fade" v-if="bread === 'Home'">
      <div class="text">
        <transition name="fade1">
          <h1 v-if="show1">Hello, pet!</h1>
        </transition>
        <transition name="fade2">
          <section v-if="show2">
            <p>最優質的寵物護理</p>
            <hr />
            <p>您的寵物舒服了</p>
          </section>
        </transition>
        <transition name="fade3">
          <router-link class="btn" to="/services" v-if="show3"
            >了解更多</router-link
          >
        </transition>
      </div>
    </section>

    <section v-else>
      <div class="bread-bg"></div>
      <div class="bread">
        <p>
          <a href="#">Home</a>
          <span>{{ bread }}</span>
        </p>
        <h1>{{ bread }}</h1>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@import "@/style.scss";

.banner {
  width: 100%;
  height: 420px;
  background: url("../#{$jpg1}.jpg") no-repeat center 30% / cover;
  margin-top: 60px;
  background-attachment: fixed;
  position: relative;
  .text {
    color: $color4;
    position: relative;
    top: 50px;
    opacity: 1;
    h1 {
      font-size: 60px;
    }
    height: 100%;
    @extend %flex-colume;
    align-items: center;
    font-size: 32px;
    .btn {
      @extend %btn;
    }
    .btn:hover {
      background-color: transparent;
    }
  }
  .bread-bg {
    position: absolute;
    width: 100%;
    height: 420px;
    background: linear-gradient(
      115deg,
      rgba(27, 99, 233, 0.6),
      rgba(6, 116, 116, 0.6)
    );
  }
  .bread {
    position: absolute;
    bottom: 0;
    left: 10%;
    opacity: 1;
    p {
      color: $color4;
      span {
        margin-left: 10px;
      }
    }
  }
  .fade1-enter {
    transform: translateX(-100%);
    opacity: 0;
  }
  .fade2-enter {
    transform: translateX(100%);
    opacity: 0;
  }
  .fade3-enter {
    transform: translateY(50px);
    opacity: 0;
  }
  .fade1-enter-active,
  .fade2-enter-active,
  .fade3-enter-active {
    opacity: 1;
    transition: all 1s;
  }
}
.banner.show {
  .bread {
    bottom: 10%;
    transition: bottom 1s;
  }
}
</style>



<script>
export default {
  data() {
    return {
      bread: this.$route["name"],
      show1: false,
      show2: false,
      show3: false,
    };
  },
  mounted() {
    this.delayedShow();
  },
  methods: {
    delayedShow() {
      window.setTimeout(()=>this.show1 = true, 0);
      window.setTimeout(()=>this.show2 = true, 1000);
      window.setTimeout(()=>this.show3 = true, 2000);
    },
  },
};
</script>
