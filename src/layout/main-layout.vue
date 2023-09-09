<template>
  <el-main class="main">
    <!-- <router-view>
      <template #default="{Component}">
        <Transition >
          <component :is="Component"></component>
        </Transition>
      </template>
    </router-view> -->
    <header class="main__header">
      <Breadcrumb></Breadcrumb>
    </header>
    <main class="main__content">
      <router-view>
        <template #default="{Component}">
          <Transition name="route">
            <component :is="Component"></component>
          </Transition>
        </template>
      </router-view>
    </main>

  </el-main>
</template>

<script setup lang="ts">
import Breadcrumb from '@/components/Breadcrumb.vue';
</script>

<style  lang="scss">
@use '@/assets/styles/mixins.scss' as mixins;

.main {
  overflow: hidden;
  padding: 0;
  @include mixins.layout-padding(0em);
  background-color: var(--main-bg-color);

}

.main__header {
  padding: .8em 0em 0 1em;
  height: 80px;
  background-color: #fff;
  box-sizing: border-box;
}

.main__content {
  overflow: hidden;
  padding: .5em 1em 0 1em;
  height: calc(100% - 80px);
  box-sizing: border-box;
}


.route-enter-active {
  transition: transform .3s ease, opacity 0.3s;;
  transform: translate(100px);
  opacity: 0;
}
.route-enter-to {
  transform: translate(0);
  opacity: 1;
}
</style>
