<template>
  <div class="question">
    <div class="text">
      <h3>Frequently Asks Questions</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
        veniam.
      </p>
      <div
        class="btns"
        id="change-1"
        type="button"
        aria-expanded="true"
        @click="togglebtn(1)"
      >
        How to train your pet dog?
        <font-awesome-icon icon="minus" show="true" />
        <font-awesome-icon icon="plus" show="false" />
      </div>
      <ul id="btn-1">
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul>
      <div
        class="btns"
        id="change-2"
        type="button"
        aria-expanded="false"
        @click="togglebtn(2)"
      >
        How to manage your pets?
        <font-awesome-icon icon="minus" show="true" />
        <font-awesome-icon icon="plus" show="false" />
      </div>
      <ul id="btn-2">
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul>
      <div
        class="btns"
        id="change-3"
        type="button"
        aria-expanded="false"
        @click="togglebtn(3)"
      >
        What is the best grooming for your pets?
        <font-awesome-icon icon="minus" show="true" />
        <font-awesome-icon icon="plus" show="false" />
      </div>
      <ul id="btn-3">
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul>
      <div
        class="btns"
        id="change-4"
        type="button"
        aria-expanded="false"
        @click="togglebtn(4)"
      >
        What are those requirements for sitting pets?
        <font-awesome-icon icon="minus" show="true" />
        <font-awesome-icon icon="plus" show="false" />
      </div>
      <ul id="btn-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          laudantium culpa sunt repellat, suscipit dignissimos eaque cum
          doloremque praesentium pariatur.
        </p>
      </ul>
    </div>
    <div class="jpg-box">
      <div class="jpg">
        <img src="@/assets/jpg/see.jpg" alt />
        <div class="media">
          <a class="play" @click="mediaShow = !mediaShow">
            <img src="@/assets/jpg/play.jpeg" alt />
          </a>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div id="mediaShow" v-if="mediaShow === true">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/7wIMQwtUBls"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div class="close" @click="mediaShow = !mediaShow">❌</div>
      </div>
    </transition>
  </div>
</template>
 

<style lang="scss" src="./style.scss">
</style>

<script>
export default {
  data() {
    return {
      mediaShow: false,
    };
  },
  methods: {
    togglebtn(number) {
      let change = document.getElementById("change-" + number);
      // let btn = document.getElementById("btn-" + number);
      if (change.getAttribute("aria-expanded") === "true") {
        change.setAttribute("aria-expanded", "false");
        // btn.style.maxHeight=btn.scrollHeight+'px'
      } else {
        change.setAttribute("aria-expanded", "true");
        // btn.style.maxHeight=0
        // if(btn.style.maxHeight){
        //     btn.style.maxHeight=null
        //   }else{
        //     btn.style.maxHeight=btn.scrollHeight+'px'
        //   }
      }
      // console.log(change.getAttribute("show"));
    },
  },
};
</script>
