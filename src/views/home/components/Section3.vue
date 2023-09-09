<template>
  <BaseSection :step="3" title="补充协议" content-border :content-style="style" style="margin-bottom: 3em;">
    <template #info>
        <div style="display: flex;align-items: center;justify-content: space-between;padding-right: 1em;">
          <el-tabs v-model="activeTab" type="card" style="background-color: initial;max-width: calc(100% - 100px);">
            <el-tab-pane v-for="tab in tabs" :key="tab"  :label="tab.label" :name="tab.name"></el-tab-pane>
          </el-tabs>
          <el-button type="primary" @click="functionAddTab">新增</el-button>
        </div>
    </template>
    <div style="padding-bottom: 2em;">
      <div style="display: flex;align-items: center;justify-content: space-between;"> 
        <p style="font-size: .95em;color: initial;">
          协议内容：
        </p>
        <el-button type="warning" plain @click="handleRemoveTab">删除</el-button>
      </div>
      <el-input type="textarea" :rows="4" resize="none" class="input--has-bg"></el-input>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaseSection from './BaseSection.vue';

const style = {
  'border-top-left-radius': 0,
}

const tabs = ref([
  { label: '补充协议1', name: 1},
  { label: '补充协议2', name: 2},
  { label: '补充协议3', name: 3},
])
const activeTab = ref(1)

/**
 * 添加tab
 */
function functionAddTab() {
  const idx = tabs.value[tabs.value.length - 1].name + 1;
  tabs.value.push({label: '补充协议' + idx, name: idx})
}

/**
 * 删除tab
 */
function handleRemoveTab() {
  const idx = tabs.value.findIndex(item => item.name === activeTab.value);
  if (idx !== -1 && tabs.value.length > 1) {
    tabs.value.splice(idx, 1)
    activeTab.value = tabs.value[0].name
  }
}
</script>

<style  lang="scss">

  .el-tabs__item {
  background-color: #fff !important;
  color: rgba($color: #000000, $alpha: 0.35);
}

.el-tabs__header {
  margin-bottom: 0px;
}
</style>
