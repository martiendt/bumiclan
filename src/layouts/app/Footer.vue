<script setup></script>

<template>
  <footer class="bg-white p-8 rounded-b-xl">
    <div class="container mx-auto">
      <div class="flex flex-wrap text-left lg:text-left">
        <div class="w-full lg:w-6/12">
          <router-link to="/" class="flex items-center text-xl font-semibold text-gray-700">
            <img src="@/assets/logo.png" alt="" class="w-12" /> Bumiclan
          </router-link>
          <p class="w-96 font-light max-w-full m-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit to mitu.
          </p>
        </div>
        <div class="w-full px-2 lg:px-4 lg:w-6/12 mt-5"></div>
      </div>
      <hr class="my-6 border-gray-300" />
      <div class="flex flex-wrap items-center justify-center md:justify-between">
        <div class="w-full px-4 mx-auto text-center md:w-4/12">
          <div class="py-1 text-sm font-semibold text-gray-500">
            Copyright © <span id="get-current-year">{{ year }}</span>
            <router-link to="/" class="text-gray-500 hover:text-gray-800">. Bumiclan </router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
