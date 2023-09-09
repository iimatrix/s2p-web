<template>
  <el-container class="container">
    <asideLayout></asideLayout>
    <el-container>
      <el-header class="header">
        <headerLayout></headerLayout>
      </el-header>
      <mainLayout></mainLayout>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import asideLayout from './aside-layout.vue';
import mainLayout from './main-layout.vue';
import headerLayout from './header-layout.vue';

</script>

<style lang="scss">
.container {
  width: 100vw;
  height: 100vh;
}
</style>
