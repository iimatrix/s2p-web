<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="title in bread" >{{ title }}</el-breadcrumb-item>
    </el-breadcrumb>
    
    <h3 class="title">
      {{ $route.meta.title }}
    </h3>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useRouteStore } from '@/stores/route';
import { headerMenus } from '@/router/menu';

const route = useRoute();
const routeStore = useRouteStore();
// 生成动态breads
const bread = computed(() => {
  const { dynamicRoutes, routeName } = routeStore;
  const titles = [
    headerMenus.find(item => item.name === routeName)?.meta?.title,
    dynamicRoutes.find(dr => dr.name === route.name)?.meta?.title
  ].filter(Boolean);
  return titles;
})
</script>

<style lang="scss">
.breadcrumb {
  display: flex;
  flex-flow: column;
  
 

  .title {
    margin: .8em 0;
    font-weight: 400;
  }
}
</style>
