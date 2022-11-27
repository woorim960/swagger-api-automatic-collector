<template>
  <header class="header">
    <nav>
      <div class="img-box">
        <img src="../assets/gmarket_logo.webp" />
      </div>

      <div class="navigation">
        <RouterLink class="li" to="/">Home</RouterLink>
        <RouterLink class="li" to="/domains">Domain</RouterLink>
      </div>
    </nav>
    <form class="d-flex" role="search">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style scoped>
@import "../main.css";

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0 var(--main-bg-padding);
  width: 100%;
  height: 80px;
  background-color: var(--white-color);
}

nav {
  display: flex;
  flex-direction: row;
  align-items: center;
}

nav .img-box {
  margin-right: 20px;
}

nav .img-box img {
  width: var(--logo-size);
}
.navigation {
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.li {
  margin-left: 10px;
}

.li:hover {
  cursor: pointer;
  color: var(--main-point-color);
}

a {
  color: var(--black-color);
  text-decoration: none;
}

.logo-img {
  height: 100px;
}

.btn {
  color: var(--main-point-color);
  border: 1px solid var(--main-point-color);
}

.btn:hover {
  background-color: var(--main-point-color);
}
</style>
