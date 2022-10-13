<template>
  <div class="page background">
    <MyInput style="margin-top: 100px" placeholder="Username" ref="username"></MyInput>
    <MyInput style="margin-top: 30px" placeholder="Password" ref="password"></MyInput>

    <div class="MyButton" style="margin-top: 30px" v-on:click="Login">登录</div>
    <div class="colorWhite">您当前的身份:{{getRole}}</div>
  </div>
</template>

<script>
import MyInput from "@/components/MyInput";
import {mapState, mapGetters, mapMutations, mapActions} from "vuex";
export default {
  name: "Login",
  created() {
  },
  mounted() {

  },
  methods: {
    Login() {
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
.background {
  background-color: #2d3a4b;
}
.MyButton {
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: #42b983;
  border-radius: 5px;
  cursor: pointer;
}
</style>