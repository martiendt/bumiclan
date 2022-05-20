<script setup>
import ChalkboardIcon from "@/components/icons/ChalkboardIcon.vue";
import CertificateIcon from "@/components/icons/CertificateIcon.vue";
</script>

<template>
  <nav
    id="sidebar"
    class="
      flex-col flex-shrink-0
      hidden
      w-full
      h-full
      overflow-x-hidden overflow-y-auto
      md:flex
      sm:w-64
      bg-white
      min-h-screen
    "
  >
    <div class="flex flex-col flex-1 w-screen h-full flex-between sm:w-64">
      <!-- Menu Content -->
      <div class="flex flex-col flex-1 h-full mx-4 overflow-y-auto overflow-x-hidden scrolling-touch">
        <div class="py-4 m-1 space-y-2 font-bold">
          <router-link
            to="/my-webinar"
            active-class="bg-indigo-50"
            class="flex items-center py-3 -mx-2 px-4 rounded-xl"
          >
            <component :is="ChalkboardIcon" css="w-6 h-6 mr-2" />
            <span class="">My Webinar</span>
          </router-link>
          <router-link
            to="/certificates"
            active-class="bg-indigo-50"
            class="flex items-center py-3 -mx-2 px-4 rounded-xl"
          >
            <component :is="CertificateIcon" css="w-6 h-6 mr-2" />
            <span class="">E-Certificates</span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
