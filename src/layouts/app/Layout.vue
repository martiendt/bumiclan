<template>
  <div class="font-grape flex flex-col justify-between min-h-screen bg-outer1 p-5">
    <div class="flex-1 w-full shadow bg-outer2 container mx-auto rounded-3xl">
      <app-header />
      <div class="">
        <router-view />
      </div>
      <app-footer />
    </div>
  </div>
</template>

<script>
import AppHeader from "@/layouts/app/Header.vue";
import AppFooter from "@/layouts/app/Footer.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      path: this.$route.path,
    };
  },
  computed: {},
  methods: {},
};
</script>
