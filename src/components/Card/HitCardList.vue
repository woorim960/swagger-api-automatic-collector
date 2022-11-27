<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    <BaseCard
      v-for="(item, idx) in items"
      :key="idx"
      :domainName="item.domainName"
      :repositoryName="item.repositoryName"
      :description="item.description"
      leftButtonLink="/left"
      rightButtonLink="/right"
    />
  </div>
</template>

<script>
import BaseCard from "./BaseCard.vue";

export default {
  name: "HitCardList",
  components: {
    BaseCard,
  },
  props: {
    items: {
      type: Array,
      default() {
        return [
          {
            domainName: "sd",
            repositoryName: "hexsdapi",
            description: "SD API",
          },
          {
            domainName: "seller",
            repositoryName: "dot-net",
            description: "Seller API",
          },
        ];
      },
      required: true,
    },
  },
};
</script>

<style scoped></style>
