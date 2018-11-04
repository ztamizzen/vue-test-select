<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">
.home {
  background-blend-mode: exclusion;
  background-image: url("../assets/logo.png"), url("../assets/logo.png");
  background-position: 45% 40%, 55% 60%;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
