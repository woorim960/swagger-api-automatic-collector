<template>
  <article class="root-container">
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <AccordionItem
        itemId="0"
        itemName="코드 저장소"
        :innerItems="repositoryInnerItems"
        :domainName="domainName"
      />
      <AccordionItem itemId="1" itemName="PD" />
      <AccordionItem itemId="2" itemName="PM" />
      <AccordionItem itemId="3" itemName="AM" />
    </div>
  </article>
</template>

<script>
import AccordionItem from "./Accordions/AccordionItem.vue";

export default {
  name: "BaseSideBar",
  components: {
    AccordionItem,
  },
  data() {
    return {
      repositoryInnerItems: [
        {
          title: "hexsdapi",
          page: "swagger",
        },
      ],
    };
  },
};
</script>

<style scoped>
.root-container {
  height: 1000px;
  width: 100%;
  padding: 0;
}
</style>
