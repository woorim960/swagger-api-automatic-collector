<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    <BaseCard
      domainName="sd"
      description="hello"
      leftButtonLink="/left"
      rightButtonLink="/right"
    />
    <BaseCard />
    <BaseCard />
    <BaseCard />
    <BaseCard />
    <BaseCard />
  </div>
</template>

<script>
import BaseCard from "./BaseCard.vue";

export default {
  name: "HitCardList",
  components: {
    BaseCard,
  },
};
</script>

<style scoped></style>
