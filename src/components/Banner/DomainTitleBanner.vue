<template>
  <div class="banner">
    <div class="domainName">
      {{ $route.params.domainName.toUpperCase() }}
    </div>
  </div>
</template>

<script>
export default {
  name: "DomainTitleBanner",
};
</script>

<style scoped>
@import "../../main.css";

.banner {
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--domain-title-banner-height);
  background-color: var(--main-point-color);
}

.domainName {
  padding: 0 var(--main-bg-padding);
  color: var(--domain-title-banner-fc);
  font-size: var(--domain-title-banner-fs);
}
</style>
