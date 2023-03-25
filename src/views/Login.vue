<template>
  <div class="page background">
    <div class="spacebetween width100">
      <div class="loginBox column backgroundWhite">
        <img src="../assets/stisla-fill.svg" class="logo">
        <div class="alignCenter marginTop50">
          <div class="title1">欢迎使用</div>
          <div class="title2 marginLeft10">赛旋智慧农贸</div>
        </div>
        <div class="tip1 marginTop10">欢迎光临赛旋智慧农贸</div>
        <div class="column marginTop30">
          <div class="title3">账号</div>
          <MyInput class="marginTop10" placeholder="Username" ref="username"></MyInput>
        </div>
        <div class="column marginTop30">
          <div class="spacebetween alignCenter">
            <div class="title3">密码</div>
            <a href="" class="forget">忘记密码?</a>
          </div>
          <MyInput class="marginTop10" placeholder="Password" ref="password"></MyInput>
        </div>
        <div class="alignCenter marginTop20">
          <el-checkbox class="checkBox" v-model="checked" size="medium">记住我</el-checkbox>
        </div>
        <div class="justifyEnd">
          <div class="MyButton" style="margin-top: 30px" v-on:click="Login">登 录</div>
        </div>
        <div class="colorWhite">您当前的身份:{{getRole}}</div>
      </div>
      <div class="bgImgBox overlay-gradient-bottom">
        <div class="bgTextBox">
          <div class="bgText1">Good Morning</div>
          <div class="bgText2 marginTop20">Welcome to Saixuan Technology</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyInput from "@/components/MyInput";
import {mapState, mapGetters, mapMutations, mapActions} from "vuex";
export default {
  name: "Login",
  data:function () {
    return {
      username: "",
      password: "",
      checked: '',
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
    Login() {
      var that = this;
      this.$axios({
        url: "http://localhost:8001/admin/login",
        params: {
          username: this.$refs.username.val,
          password: this.$refs.password.val,
        }
      }).then(res => {
        console.log(res);
        if (res.data.code == 0) {
          that.$router.push('/index')
        }
      });
      if (this.$refs.username.val == "admin" || this.$refs.username.val == "editor") {
        this.setRole(this.$refs.username.val);
      }
    },
    //用于生成与mutations对话的方法,即:包含$store.comit(xx)的函数
    ...mapMutations(["setRole"]),
    //用于生成与actions对话的方法,即:包含$store.dispatch(xx)的函数
    ...mapActions(["acSetRole"]),
  },
  components:{MyInput},
  computed: {
    //映射state中的数据为计算属性
    ...mapState(["role"]),
    //映射getters中的数据为计算属性
    ...mapGetters(["getRole"])
  },
}
</script>

<style scoped>
@keyframes backgroundWalkY {
  0% {
    background-position: 0 0%;
  }
  100% {
    background-position: 0 100%;
  }
}
.background {
  background-color: #2d3a4b;
}
.MyButton {
  width: 200px;
  height: 60px;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: #42b983;
  border-radius: 5px;
  cursor: pointer;
}
.loginBox {
  min-height: 100vh;
  width: 400px;
  padding: 0 50px;
}
.logo {
  width: 100px;
  height: 100px;
  box-shadow: 0 2px 6px #e6ecf1;
  border-radius: 50%;
  margin-top: 60px;
}
.title1 {
  font-weight: 500;
  font-size: 26px;
}
.title2 {
  font-size: 38px;
  font-weight: bold;
}
.tip1 {
  font-size: 14px;
  color: #98a6ad;
}
.title3 {
  font-size: 18px;
  font-weight: bold;
}
.forget {
  color: #6777ef;
  font-size: 18px;
}
.checkBox {
  width: 18px;
  height: 18px;
}
.bgImgBox {
  flex: 1;
  background-image: url("../assets/login-bg.jpg");
  background-size: cover;
  background-position: 0 100%;
  position: relative;
  animation-name: backgroundWalkY;
  animation-duration: 100s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
.bgImg {
  width: 100%;
  object-fit: cover;
}
.overlay-gradient-bottom:after {
  content: ' ';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: false;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 65%, rgba(37, 34, 34, 0.65) 100%);
  z-index: 1;
}
.bgTextBox {
  position: absolute;
  left: 100px;
  bottom: 150px;
  z-index: 9999;
}
.bgText1 {
  font-weight: bold;
  font-size: 62px;
  color: #ffffff;
  font-family: "Nunito", "Segoe UI", arial;
}
.bgText2 {
  font-size: 36px;
  color: rgba(255, 255, 255, 0.8);
}
</style>