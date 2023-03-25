<template>
  <div class="alignCenter inputBox">
    <img src="../assets/logo.png" class="inputImg">
    <input class="input" :placeholder="placeholder" v-model="val">
  </div>
</template>

<script>
export default {
  name: "MyInput",
  data: function () {
    return {
      val: '',
    };
  },
  props: ["placeholder"],
}
</script>

<style scoped>
.inputBox {
  border: 1px solid #ffffff;
  padding: 20px 20px;
  border-radius: 5px;
  background-color:  rgb(250, 255, 189);
}
.inputBox input {
  border: none;
  background-color: transparent;
  outline: none;/*点击不带有边框*/
  font-size: 18px;
  width: 100%;
}
input::-webkit-input-placeholder {
}
.inputImg {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>