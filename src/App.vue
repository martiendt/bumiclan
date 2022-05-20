<script>
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import "v-calendar/dist/style.css";

export default {
  mounted() {
    AOS.init();
  },
};
</script>

<template>
  <router-view />
</template>
