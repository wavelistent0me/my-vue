<template>
  <div class="page">
    <!--天气插件-->
    <div class="width100 alignCenter justifyCenter">
      <div>天气插件：</div>
      <iframe width="300" scrolling="no" height="30" frameborder="0" allowtransparency="true" src="https://i.tianqi.com?c=code&id=34&icon=1&py=nanchang&site=12"></iframe>
    </div>
    <!--身份-->
    <div>您当前的身份:{{role}}</div>
    <!--fillter-->
    <div>fillter的使用:{{ testNum|nullToZero}}</div>
  </div>
</template>

<script>
import {mapState, mapGetters} from "vuex";
export default {
  name: "Index",
  data: function () {
    return {
      testNum: '',
    };
  },
  computed: {
    ...mapState(["role"]),
    ...mapGetters(["getRole"]),
  },
  filters: {
    nullToZero(value) {
      if (value == null || value == undefined || isNaN(value) || value == '') {
        return value = 0;
      } else {
        return value;
      }
    }
  },
}
</script>

<style scoped>

</style>