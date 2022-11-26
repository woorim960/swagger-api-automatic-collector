<template>
  <div class="root-container">
    <iframe
      src="http://saturn-sdapi-structured-data.d3.ebaykorea.com/swagger-ui.html"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "PageView",
};
</script>

<style scoped>
.root-container {
  width: 100%;
}

iframe {
  height: 100%;
  width: 100%;
}
</style>
