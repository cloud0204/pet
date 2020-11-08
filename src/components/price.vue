<template>
  <div class="price">
    <h3>Affordable Packages</h3>
    <div class="flex-box">
      <div class="box">
        <div class="hot hide">hot</div>
        <div class="jpg">
          <img src="@/assets/jpg/care.jpg" alt />
        </div>
        <div class="text">
          <h2>{{content[0].name}}</h2>
          <sup>$</sup>
          <h1>49</h1>
          <sub>/mos</sub>
          <ul>
            <li><font-awesome-icon icon="check" />Lorem, ipsum dolor.</li>
            <li><font-awesome-icon icon="check" />Lorem, ipsum dolor.</li>
            <li><font-awesome-icon icon="check" />Lorem, ipsum</li>
            <li><font-awesome-icon icon="check" />Lorem, ipsum dolor.</li>
          </ul>
        </div>
        <div class="btn-box">
          <div class="btn" @click="buy(0)">加入購物車</div>
        </div>
      </div>
      <div class="box">
        <div class="hot">hot</div>
        <div class="jpg">
          <img src="@/assets/jpg/happy.jpg" alt />
        </div>
        <div class="text">
          <h2>{{content[1].name}}</h2>
          <sup>$</sup>
          <h1>99</h1>
          <sub>/mos</sub>
          <ul>
            <li><font-awesome-icon icon="check" />Lorem, ipsum dolor.</li>
            <li><font-awesome-icon icon="check" />Lorem, ipsum dolor.</li>
            <li><font-awesome-icon icon="check" />Lorem, ipsum dolor.</li>
            <li><font-awesome-icon icon="check" />Lorem, i</li>
            <li><font-awesome-icon icon="check" />Lorem, ipsum</li>
          </ul>
        </div>
        <div class="btn-box">
          <div class="btn" @click="buy(1)">加入購物車</div>
        </div>
      </div>
      <div class="box">
        <div class="hot hide">hot</div>
        <div class="jpg">
          <img src="@/assets/jpg/relax.jpg" alt />
        </div>
        <div class="text">
          <h2>{{content[2].name}}</h2>
          <sup>$</sup>
          <h1>149</h1>
          <sub>/mos</sub>
          <ul>
            <li><font-awesome-icon icon="check" />Lorem, ipsum dolor.</li>
            <li><font-awesome-icon icon="check" />Lorem, ipsum dolor.</li>
            <li><font-awesome-icon icon="check" />Lorem, ipsum dolor.</li>
            <li><font-awesome-icon icon="check" />Lorem, ipsum d.</li>
            <li><font-awesome-icon icon="check" />Lorem, ipsum d.</li>
            <li><font-awesome-icon icon="check" />ipsum dolor.</li>
          </ul>
        </div>
        <div class="btn-box">
          <div class="btn" @click="buy(2)">加入購物車</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: [
        {
          name: "醫療",
          price: "49",
          src: "1.jpg",
          number: 1,
        },
        {
          name: "玩樂",
          price: "99",
          src: "2.jpg",
          number: 1,
        },
        {
          name: "照顧",
          price: "149",
          src: "3.jpg",
          number: 1,
        },
      ],
    };
  },
  methods: {
    buy(index) {
      let { name, price, src } = this.content[index];
      let target = this.$store.state.content;
      // console.log(target);
      if (target.length === 0) {
        // console.log("if");
        this.$store.commit("add_shop", {
          data: {
            name: name,
            price: price,
            src: src,
            number: 1,
          },
        });
      } else {
        // console.log("else");
        for (let i = 0; i < target.length; i++) {
          if (target[i].name.indexOf(name) === 0) {
            // target[i].number = +target[i].number + 1;
            // console.log(target);
            this.$store.commit("update_shop", {
              index: i,
              data: {
                number: target[i].number + 1,
              },
            });
            return;
          }
        }
        this.$store.commit("add_shop", {
          data: {
            name: name,
            price: price,
            src: src,
            number: 1,
          },
        });
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/style.scss";
.price {
  text-align: center;
  background-color: $color5;
  padding: 20px 0;
  .flex-box {
    @extend %flex-row;

    .box {
      width: 25%;
      background-color: $color1;
      margin: 10px;
      padding: 10px;
      border-radius: 10px;
      position: relative;
      display: flex;
      flex-direction: column;
      .hot {
        position: absolute;
        padding: 0 1px;
        background-color: red;
        top: -13px;
        right: 0;
        z-index: 9;
      }
      .hide {
        display: none;
      }
      .jpg {
        width: 100%;
        height: 250px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .text {
        margin-top: 20px;
        h2 {
          color: $color3;
        }

        > sup,
        h1,
        sub {
          color: $color5;
          display: inline;
        }
        h1 {
          color: $color2;
        }
        ul {
          padding: 30px 0 60px;
          li {
            padding: 10px;
            svg {
              color: rgb(7, 87, 63);
            }
          }
          span {
            color: rgba(48, 48, 214, 0.678);
          }
        }
      }
      .btn-box {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        height: 50%;
        .btn {
          @extend %btn;
          margin-bottom: 5px;
          cursor: pointer;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .price {
    .flex-box {
      flex-wrap: wrap;

      .box {
        width: 80%;

        .jpg {
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
