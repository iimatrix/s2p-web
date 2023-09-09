import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { getCurrentRouteName, addDynamicRoutes } from '@/lib/route';
import { useRouter, useRoute } from 'vue-router';

export const useRouteStore = defineStore('route', () => {
  const route = useRoute();
  const router = useRouter();
  const routeName = computed(() => getCurrentRouteName(route));
  const dynamicRoutes = computed(() => addDynamicRoutes(router, route.fullPath))

  return { routeName, dynamicRoutes };
})