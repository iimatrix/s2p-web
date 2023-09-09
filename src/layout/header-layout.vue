<template>
  <HeaderItem class="menu-bar" icon="i-ant-design-align-left-outlined" :bg="false" @click="handleShowSideBar"></HeaderItem>
  <nav style="height: 100%;width: 100%;">
    <el-menu mode="horizontal" style="border: none;align-items: center;"  router :default-active="routeName">
      <el-menu-item v-for="menu in headerMenus" :index="menu.path">
        <HeaderItem class="menu" :icon="menu.meta!.icon">
          {{ menu.meta!.title }}
            <template #subtitle v-if="menu.meta!.subtitle">
            {{ menu.meta!.subtitle }}
          </template>
        </HeaderItem>
      </el-menu-item>
    </el-menu>
  </nav>
</template>

<script setup lang="ts">
import HeaderItem from './components/HeaderItem.vue';
import { useLayoutStore } from '@/stores/layout';
import { headerMenus } from '@/router/menu';
import { useRoute } from 'vue-router';
import { getCurrentRouteName } from '@/lib/route';
import { computed } from 'vue';

const route = useRoute();
const layoutStore = useLayoutStore();
const routeName = computed(() => {
  const name = getCurrentRouteName(route);
  return name === 'home' ? '/' : `/${name}`;
});


function handleShowSideBar() {
  layoutStore.showAside = true;
}

</script>

<style lang="scss">
@use '@/assets/styles/media.scss' as media;
@use '@/assets/styles/mixins.scss' as mixins;




.header {
  display: flex;
  height: var(--header-height);
  background-color: var(--color-primary);
  color: var(--layout-font-color);

  padding-top: 1em;
  @include mixins.layout-padding(4em);
  transition: padding .3s;

  .menu-bar {
    display: none;
    margin-left: -3em;

    @include media.xs {
      display: initial;
    }

  }

  .menu.invisible {
    display: none;
  }

  .menu--vertical {
    display: none;

    
    &.show {
      display: initial;
    }
  }
}





</style>
