<template>
  <div class="page">
    <!--天气插件-->
    <div class="width100 alignCenter justifyCenter">
      <div>天气插件：</div>
      <iframe width="300" scrolling="no" height="30" frameborder="0" allowtransparency="true" src="https://i.tianqi.com?c=code&id=34&icon=1&py=nanchang&site=12"></iframe>
    </div>
    <!--身份-->
    <div>您当前的身份:{{role}}</div>
  </div>
</template>

<script>
import {mapState, mapGetters} from "vuex";
export default {
  name: "Index",
  computed: {
    ...mapState(["role"]),
    ...mapGetters(["getRole"]),
  },
}
</script>

<style scoped>

</style>