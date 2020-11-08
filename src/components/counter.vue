<template>
<div class="counter-bg">
      <div class="counter">
        <div class="counter-box">
          <div class="number" data-number="50">0</div>
          <div class="text">Customer</div>
        </div>
        <div class="counter-box">
          <div class="number" data-number="6150">0</div>
          <div class="text">Professionals</div>
        </div>
        <div class="counter-box">
          <div class="number" data-number="50">0</div>
          <div class="text">Products</div>
        </div>
        <div class="counter-box">
          <div class="number" data-number="150">0</div>
          <div class="text">Pets Hosted</div>
        </div>
      </div>
    </div>  
</template>
 

<style lang="scss">
@import "@/style.scss";
.counter-bg {
  background-color: $color3;
  .counter {
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 30px;
    opacity: 0;
    position: relative;
    bottom: -50px;
    .counter-box {
      width: 40%;
      .number {
        font-size: 60px;
      }
    }
  }
  .counter.show {
    opacity: 1;
    bottom: 0;
    transition: opacity 5s, bottom 1.5s;
  }
}
@media screen and (max-width: 768px) {
  .counter-bg {
    .counter {
      flex-wrap: wrap;
    }
  }
}
</style>

