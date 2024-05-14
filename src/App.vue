<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "@/components/layouts/AppHeader/AppHeader.vue";
import AppContent from "@/components/layouts/AppContent/AppContent.vue";
</script>

<template>
  <AppHeader />
  <AppContent>
    <RouterView />
  </AppContent>
</template>
