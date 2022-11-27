<template>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button
        :id="`accordion-${itemId}`"
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        aria-expanded="false"
      >
        {{ itemName }}
      </button>
    </h2>
    <div
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingOne"
      data-bs-parent="#accordionFlushExample"
    >
      <div
        class="accordion-body navigation"
        v-for="(item, idx) in innerItems"
        :key="idx"
      >
        <RouterLink
          class="li"
          :to="{
            params: { domainName, domainId, repositoryName },
            query: { page: item.page },
            name: 'DomainDetailView',
          }"
          >{{ item.title }}</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccordionItem",
  props: {
    itemId: {
      type: Number,
      default: 1,
      required: true,
    },
    itemName: {
      type: String,
      default: "Item",
      required: true,
    },
    innerItems: {
      type: Array,
      default() {
        return [
          { title: "one", link: "/" },
          { title: "two", link: "/" },
          { title: "three", link: "/" },
        ];
      },
      required: true,
    },
  },
  data() {
    return {
      domainName: this.$route.params.domainName,
      domainId: this.$route.params.domainId,
      repositoryName: this.$route.params.repositoryName,
    };
  },
  mounted() {
    const itemName = this.itemName.replace(" ", "");
    const $itemNameTag = document.querySelector(`#accordion-${this.itemId}`);
    $itemNameTag.setAttribute("data-bs-target", `#${itemName}`);
    $itemNameTag.setAttribute("aria-controls", itemName);
    $itemNameTag.parentNode.nextSibling.id = itemName;
  },
};
</script>

<style scoped>
.navigation {
  display: flex;
  flex-direction: column;
  margin: 10px 0 10px 20px;
  padding: 0;
  list-style-type: none;
}

.li {
  margin: 10px 0 10px 10px;
  color: var(--black-color);
  text-decoration: none;
}

.li:hover {
  cursor: pointer;
  color: var(--main-point-color);
}
</style>
