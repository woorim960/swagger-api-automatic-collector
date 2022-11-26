<template>
  <div>
    <TheHeader />
    <router-view></router-view>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./layouts/TheHeader.vue";
import TheFooter from "./layouts/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
