<template>
  <div class="page">
    <div class="width100 justifyCenter paddingY20">
      <div class="letter">动</div>
      <div class="letter">画</div>
      <div class="letter">测</div>
      <div class="letter">试</div>
    </div>
    <div class="column paddingY20">
      <div class="fontSize30">旋转效果</div>
      <img src="../assets/logo.png" class="logo">
    </div>
  </div>
</template>

<script>
export default {
  name: "Animation"
}
</script>

<style scoped>
@keyframes bounce {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, -10px, 0);
  }
}
@keyframes rotate {
  from {
    transform: rotateZ(0);
  }
  to {
    transform: rotateZ(-360deg);
  }
}
.letter {
  animation: bounce 0.75s cubic-bezier(0.05, 0, 0.2, 1) infinite alternate;
  font-size: 32px;
}
.letter:nth-child(1) {
  animation-delay: 0s;
}
.letter:nth-child(2) {
  animation-delay: 0.25s;
}
.letter:nth-child(3) {
  animation-delay: 0.5s;
}
.letter:nth-child(4) {
  animation-delay: 0.75s;
}
.logo {
  width: 150px;
  height: 150px;
  animation: rotate 4s linear infinite;
}
</style>