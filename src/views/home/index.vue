<template>
  <div class="content-container" >
    <el-scrollbar class="container__main">
      <Section1 ></Section1>
      <Section2 ></Section2>
      <Section3></Section3>
    
    </el-scrollbar>
    <footer class="container__footer">
        <el-button type="primary" size="large" @click="handleSave" :loading="loading">保存</el-button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaseSection from './components/BaseSection.vue';
import Section1 from './components/Section1.vue';
import Section2 from './components/Section2.vue';
import Section3 from './components/Section3.vue';

const loading = ref<boolean>();

/**
 * 保存
 */
function handleSave() {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 400);
}
</script>

<style scoped lang="scss">


</style>
