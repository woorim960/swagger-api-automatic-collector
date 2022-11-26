<template>
  <footer
    class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
  >
    <p class="col-md-4 mb-0 text-muted">© 2022 Gmarket, Inc</p>

    <a
      href="/"
      class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
    >
      <img src="../assets/gmarket_logo.webp" />
    </a>

    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-muted">Home</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-muted">Features</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-muted">Pricing</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-muted">FAQs</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-muted">About</a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style scoped>
@import "../main.css";

footer {
  margin: 0;
  padding: 0 var(--main-bg-padding);
}

a > img {
  width: var(--logo-size);
}
</style>
