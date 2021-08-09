<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <dip-counter />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import DipCounter from "@/components/DipCounter.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    DipCounter,
  },
};
</script>
