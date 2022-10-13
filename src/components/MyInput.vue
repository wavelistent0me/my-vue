<template>
  <div class="alignCenter inputBox">
    <img src="../assets/logo.png" class="inputImg">
    <input :placeholder="placeholder" v-model="val">
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
  padding: 10px 15px;
  border-radius: 5px;
}
.inputBox input {
  border: none;
  background-color: transparent;
  outline: none;/*点击不带有边框*/
  color: #ffffff;
  font-size: 14px;
  width: 120px;
}
input::-webkit-input-placeholder {
  color: #ffffff;
}
.inputImg {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>