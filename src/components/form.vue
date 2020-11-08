<template>
  <div class="form">
    <div class="jpg"></div>
    <div class="form-data">
      <h2>Free Consultation</h2>
      <form action="#">
        <select class="form-control" required>
          <option value>Select services</option>
          <option value>Cat Sitting</option>
          <option value>Dog Walk</option>
          <option value>Pet Spa</option>
          <option value>Pet Grooming</option>
        </select>
        <div class="form-group">
          <input type="text" placeholder="Your Name" required/>
          <input type="text" placeholder="Vehicle number" required/>
        </div>
        <div class="form-group">
          <div class="date">
            <input type="date" placeholder="Date" required/>
            <span class="fa fa-calendar"></span>
          </div>
          <div class="time">
            <input type="time" placeholder="Time" required/>
            <span class="fa fa-clock-o"></span>
          </div>
        </div>
        <textarea name id cols="30" rows="7" placeholder="Message"></textarea>
        <input type="submit" value="Send message" id="btn" />
      </form>
    </div>
  </div>
</template>
 

<style lang="scss">
@import "@/style.scss";
.form {
  width: 100%;
  display: flex;
  justify-content: center;
  .jpg {
    width: 45%;
    background: url("../assets/jpg/see.jpg") no-repeat center center / cover;
    // border: 2px solid red;
  }
  .form-data {
    width: 45%;
    // padding: 50px;
    // margin: 10px;
    background: linear-gradient(
      115deg,
      rgba(72, 72, 202, 0.6),
      rgba(97, 201, 97, 0.6)
    );

    h2 {
      text-align: center;
    }
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      // border: 2px solid red;
      .form-control {
        // width: 100%;
        height: 50px;
        margin: 10px;
        border-radius: 5px;
        // box-sizing: inherit;
      }
      .form-group {
        width: 100%;
        display: flex;
        // margin: 10px 0;
        justify-content: space-between;
        // position: relative;
        // border: 2px solid red;
        input {
          width: 45%;
          height: 50px;
          margin: 10px;
          border-radius: 5px;
          padding: 20px;
          // border: 2px solid red;
        }
        .date,
        .time {
          width: 50%;
          display: flex;
          justify-content: space-between;

          position: relative;
          input {
            width: 100%;
            height: 50px;
            margin: 10px;
            border-radius: 5px;
            padding: 20px;
          }
          span {
            position: absolute;
            // font-size: 20px;
            left: 7px;
            top: 50%;
            margin-top: -10px;
            color: $color1;
          }
        }
      }
      textarea {
        // width: 100%;
        margin: 10px;
        border-radius: 5px;
        // padding: 20px;
        // border: 2px solid red;
      }
      #btn {
        @extend %btn;

      }
    }
  }
}
.footer.show {
  .box {
    a.fa {
      position: relative;
      top: 0;
      opacity: 1;
      transition: all 2s;
    }
  }
}
@media screen and (max-width: 768px) {
  .form {
    display: block;
    position: relative;
    .jpg {
      width: 100%;
      height: 630px;
      position: absolute;
      // border: 2px solid red;
      z-index: -1;
    }
    .form-data {
      width: 100%;
      form {
        .form-group {
          width: 100%;
          flex-wrap: wrap;
          // display: block;
          input {
            width: 100%;
            margin-bottom: 5px;
          }
          .date,
          .time {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>

