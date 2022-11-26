<template>
  <div class="col">
    <RouterLink
      class="card shadow-sm link"
      :to="{
        params: { domainName, domainId },
        name: 'DomainDetailView',
      }"
    >
      <div class="card-thumbnail"></div>

      <div class="card-body">
        <p class="card-text">
          {{ description }}
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <RouterLink
              class="btn btn-sm btn-outline-secondary"
              :to="{
                // query 설정 어떻게 하는지 모르겠음.
                path: '/domains/{{ $route.params.domainName }}/{{ $route.params.domainId }}?page={{ $route.query.leftButtonPageName }}',
                params: { domainName, domainId },
                query: { leftButtonPageName },
                name: 'DomainDetailView',
              }"
              >{{ leftButtonText }}</RouterLink
            >

            <RouterLink
              class="btn btn-sm btn-outline-secondary"
              :to="{
                params: { domainName, domainId, rightButtonPageName },
                query: { rightButtonPageName },
                name: 'DomainView',
              }"
              >{{ rightButtonText }}</RouterLink
            >
          </div>
          <small class="text-muted">9 mins</small>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: "BaseCard",
  props: {
    domainName: {
      type: String,
      default: "domainName",
      required: true,
    },
    domainId: {
      type: Number,
      default: 1,
      required: true,
    },
    leftButtonPageName: {
      type: String,
      defulat: "swagger",
      required: false,
    },
    rightButtonPageName: {
      type: String,
      defulat: "github",
      required: false,
    },
    description: {
      type: String,
      default: "Empty",
      required: true,
    },
    leftButtonText: {
      type: String,
      default: "Swagger",
      required: false,
    },
    leftButtonLink: {
      type: String,
      default: "/",
      required: true,
    },
    rightButtonText: {
      type: String,
      default: "Github",
      required: false,
    },
    rightButtonLink: {
      type: String,
      default: "/",
      required: true,
    },
  },
};
</script>

<style scoped>
.link {
  text-decoration: none;
  color: var(--black-color);
}
.card-thumbnail {
  width: 100%;
  height: 200px;
  background-color: var(--main-point-color);
}

.btn:hover {
  /* background-color: var(--main-point-color); */
}
</style>
