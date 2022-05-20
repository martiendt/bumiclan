<script setup>
import router from "@/router";
import { useAppState } from "@/store/appStateStore.js";
import cookie from "@point-hub/vue-cookie";
import { ref, watch } from "vue";

const appState = useAppState();

const username = ref(cookie.get("username"));

watch(
  () => appState.isSignedIn,
  (newValue, oldValue) => {
    console.log(newValue);
    if (newValue === true) {
      username.value = cookie.get("username");
    } else {
      username.value = "";
    }
  }
);

const signout = () => {
  appState.isSignedIn = false;
  username.value = null;
  cookie.remove("userId");
  cookie.remove("username");
  cookie.remove("firstName");
  cookie.remove("lastName");
  cookie.remove("accessToken");
  cookie.remove("refreshToken");
  router.push("/");
};
</script>

<template>
  <div class="bg-indigo-700 text-white rounded-t-3xl">
    <header class="flex flex-col justify-center px-4 py-10 flex-shrink-0 w-full h-12 container mx-auto">
      <div class="flex items-center justify-between w-full">
        <!-- LEFT HEADER (LOGO) -->
        <div class="flex-shrink-0 w-64">
          <router-link to="/" class="flex items-center text-xl font-extrabold p-2 uppercase">
            <img src="@/assets/logo.png" alt="" class="w-12" /> Bumiclan
          </router-link>
        </div>
      </div>
    </header>
  </div>
</template>
