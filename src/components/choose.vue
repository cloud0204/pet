<template>
  <div class="choose">
      <div class="jpg">
        <img src="@/assets/jpg/about.jpg" alt="">
      </div>
      <div class="text">
        <h3>Why choose Us?</h3>
        <div class="text-sub">
          <div class="items">
            <div class="jpg-1">
              <img src="@/assets/jpg/happy.jpg" alt="">
            </div>
            <div class="text-1">
              <h3>title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, totam?</p>
            </div>
            <div class="jpg-1">
              <img src="@/assets/jpg/happy.jpg" alt="">
            </div>
            <div class="text-1">
              <h3>title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, totam?</p>
            </div>
          </div>
          <div class="items">
            <div class="jpg-1">
              <img src="@/assets/jpg/happy.jpg" alt="">
            </div>
            <div class="text-1">
              <h3>title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, totam?</p>
            </div>
            <div class="jpg-1">
              <img src="@/assets/jpg/happy.jpg" alt="">
            </div>
            <div class="text-1">
              <h3>title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, totam?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
 

<style lang="scss">
@import "@/style.scss";
.choose {
  width: 100%;
  display: flex;
  justify-content: center;
  // margin: 20px;
  background-color: $color1;
  .jpg {
    width: 30%;
    img {
      width: 100%;
    }
  }
  .text {
    width: 40%;
    padding: 10px;
    .text-sub {
      .items {
        display: flex;
        .jpg-1 {
          width: 30%;

          img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
            display: block;
            margin: auto;
          }
        }
        .text-1 {
          width: 70%;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .choose {
    width: 100%;
    display: block;
    margin: auto;
    .jpg {
      width: 80%;
      display: block;
      margin: auto;
      img {
        width: 100%;
      }
    }
    .text {
      width: 100%;

      .text-sub {
        .items {
          flex-wrap: wrap;
          .jpg-1 {
            width: 30%;

            img {
              width: 80px;
              height: 80px;
            }
          }
          .text-1 {
            width: 60%;
          }
        }
      }
    }
  }
}
</style>

