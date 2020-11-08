<template>
  <div id="shop">
    <section>
      <div class="btn">
        <input type="radio" name="state" id="buy" checked />
        <label for="buy" @click="state = 'buy'">購買商品</label>
      </div>
      <div class="btn">
        <input type="radio" name="state" id="bought" />
        <label for="bought" @click="state = 'bought'">已購買</label>
      </div>
    </section>
    <pricecomponent v-if="state === 'buy'" />
    <div class="shoplist" v-else>
      <ul>
        <li>
          <span>商品名</span>
          <span>價格</span>
          <span>數量</span>
          <span>合計</span>
        </li>
        <li v-for="(item, index) in content" :key="item.name">
          <span>
            <div class="btn" @click="removeHandler(index)">刪除</div>
            <img :src="require(`@/assets/jpg/${item.src}`)" />
            <div class="text">
              {{ item.name }}
            </div>
          </span>
          <span>{{ item.price }}</span>
          <span data-descr="點擊修改數量">
            <inputcomponent :number="item.number" :index="index" />
          </span>
          <span>{{ item.price * item.number }}</span>
        </li>
      </ul>
      <div class="check">
        <h3>總價:{{ totalprice }}</h3>
        <span class="btn" @click="submitHandler()">確認購買</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/style.scss";
section {
  display: flex;
  justify-content: center;
  .btn {
    margin-top: 20px;
    margin-bottom: 20px;
    input {
      display: none;
    }
    input:checked + {
      label {
        background-color: $color3;
        color: $color1;
      }
    }
    label {
      padding: 10px;
      font-size: 30px;
      color: $color4;
      cursor: pointer;
      border-radius: 20px;
    }
  }
}
.shoplist {
  width: 80%;
  height: 80%;
  margin: auto;
  transition: all 0.2s;
  // z-index: 11;
  background-color: $color1;
  color: $color2;
  // overflow-y: scroll;
  li {
    width: 100%;
    display: table;
    position: relative;
    span {
      display: table-cell;
      width: 25%;
      color: $color1;
      text-align: center;
      vertical-align: middle;
      // border: 5px solid red;
      padding: 5px;
      img {
        width: 40px;
        height: 40px;
        overflow: hidden;
        object-fit: cover;
        border-radius: 5px;
        vertical-align: middle;
        margin: 5px;
      }
      .btn {
        border-color: $color1;
        margin: auto;
        border-radius: 5px;
        vertical-align: middle;
        color: white;
        cursor: pointer;
        background-color: red;
        display: inline;
        // margin: 5px;
      }
      .text {
        display: inline;
      }
    }
    span[data-descr] {
      cursor: pointer;
    }
    span[data-descr]:hover::after {
      content: attr(data-descr);
      position: absolute;
      left: 65%;
      top: 0;
      min-width: 100px;
      border: 1px #aaaaaa solid;
      border-radius: 10px;
      background-color: #ffffcc;
      padding: 12px;
      color: #000000;
      font-size: 14px;
    }
  }
  .btn {
    @extend %btn;
    color: white;
    cursor: pointer;
    text-align: center;
  }
}

@media screen and (max-width: 768px) {
  .shoplist {
    li {
      span {
        .text {
          display: block;
        }
        .btn {
          display: block;
        }
      }
    }
  }
}
</style>


<script>
import inputcomponent from "@/components/input.vue";
import pricecomponent from "@/components/price.vue";
// import axios from "axios";

export default {
  name: "shop",
  // props: {
  //   index: {
  //     type: Number,
  //     require: true,
  //   },
  // },
  data() {
    // localStorage資料
    return {
      content: this.$store.state.content,
      state: "buy",
    };
  },
  components: {
    inputcomponent,
    pricecomponent,
  },
  computed: {
    totalprice() {
      // 計算總價
      let target = this.$store.state.content;
      let total = 0;
      for (let i = 0; i < target.length; i++) {
        let { price, number } = target[i];
        total = total + price * number;
        // console.log(total);
      }
      return total;
    },
  },
  methods: {
    removeHandler(index) {
      // 刪除購物
      // console.log(index);
      if (confirm(`是否確認刪除"${this.$store.state.content[index].name}"?`))
        this.$store.commit("remove_shop", index);
    },
    submitHandler() {
      let data=JSON.stringify({content:this.$store.state.content});
      console.log(`購買資料:${data}`)
      // axios
      //   .post(
      //     "http://localhost:3000/posts",
      //     { "aaa": "hukh" ,"id":1}

      //   )
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
  },
};
</script>

