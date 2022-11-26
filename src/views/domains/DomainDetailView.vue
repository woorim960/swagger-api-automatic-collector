<template>
  <div class="root-container">
    <DomainTitleBanner />
    <div class="main-view">
      <BaseSideBar id="base-sidebar" />
      <PageView id="page-view" />
    </div>
  </div>
</template>

<script>
import DomainTitleBanner from "../../components/Banner/DomainTitleBanner.vue";
import BaseSideBar from "../../components/SideBar/BaseSideBar.vue";
import PageView from "../../components/Page/PageView.vue";

export default {
  name: "DomainDetailView",
  components: {
    DomainTitleBanner,
    BaseSideBar,
    PageView,
  },
};
</script>

<style scoped>
@import "../../main.css";

.root-container {
}
.main-view {
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  padding: 0 var(--main-bg-padding);
}

#base-sidebar {
  flex: 2;
  border-left: 1px solid var(--black-color);
  border-right: 1px solid var(--black-color);
}

#page-view {
  flex: 8;
  border-right: 1px solid var(--black-color);
}
</style>
