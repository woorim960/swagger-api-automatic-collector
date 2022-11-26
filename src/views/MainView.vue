<template>
  <div>
    <BaseBanner />
    <div class="hit-card-list-container">
      <HitCardList />
    </div>
  </div>
</template>

<script>
import BaseBanner from "../components/Banner/BaseBanner.vue";
import HitCardList from "../components/Card/HitCardList.vue";

export default {
  name: "MainView",
  components: {
    BaseBanner,
    HitCardList,
  },
};
</script>

<style scoped>
@import "../main.css";

.hit-card-list-container {
  margin: 20px 0;
  padding: 0 var(--main-bg-padding);
}
</style>
