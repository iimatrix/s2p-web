<template>
  <div :class="['aside', {'show-interval': layoutStore.showAside}]" v-click-outside="handleHideSideBar">
    <div class="logo">
      <img class="logo__img" src="@/assets/images/logo.png"
        srcset="@/assets/images/logo@2x.png 2x, @/assets/images/logo.png" alt="logo" @click="$router.push('/')">
    </div>
    <nav>
      <el-menu class="aside__menu" router :default-active="$route.path">
        <template v-for="menu in routeStore.dynamicRoutes">
          <!-- <template v-if="menu.children?.length">
            <el-sub-menu :index="menu.children[0].path">
              <template #title>
                <div class="menu-item">
                  <div class="i-ep-setting"></div>
                  <span>{{ menu.meta!.title }}</span>
                </div>
              </template>
              <el-menu-item v-for="child in menu.children" :index="child.path">
                <div class="menu-item">
                  <div class="i-ep-setting"></div>
                  <span>{{ child.meta!.title }}</span>
                </div>
              </el-menu-item>
            </el-sub-menu>
          </template> -->
          <!-- <el-menu-item v-else :index="menu.path"> -->
            
          <el-menu-item :index="menu.path">
            <div class="menu-item">
              <div :class="menu.meta?.icon" style="font-size: 1.4em;"></div>
              <span>{{ menu.meta!.title }}</span>
            </div>
            <div class="i-ep-arrow-right" ></div>
          </el-menu-item>
        </template>
      </el-menu>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useLayoutStore } from '@/stores/layout';
import { useRouteStore } from '@/stores/route';
import { ClickOutside as vClickOutside } from 'element-plus';

const layoutStore = useLayoutStore();
const routeStore = useRouteStore();

// 点击边条外部时隐藏（小窗）
function handleHideSideBar() {
  layoutStore.showAside = false
}
</script>

<style lang="scss">
@use '@/assets/styles/media.scss' as media;

.aside {
  position: fixed;
  height: 100%;
  width: var(--aside-width);
  background-color: var(--color-primary);
  z-index: 9;
  transition: opacity .5s, transform .3s;
  overflow-x: hidden;
  overflow-y: auto;
  // opacity: 1;
  // transform: 0;

  &:not(.show-interval) {
    @include media.xs {
      // visibility: hidden;
      opacity: 0;
      transform: translate(-100%);
    }
  }
 

  .logo {
    width: 100%;
    text-align: center;
    height: var(--header-height);

    .logo__img {
      height: 100%;
      cursor: pointer;
    }
  }

}

.aside__menu {
  // --el-menu-text-color: var(--layout-font-color); // 覆盖图标颜色
  --el-menu-bg-color: rgba(255, 255, 255, 0.1);
  --el-menu-hover-bg-color: rgba(255, 255, 255, 0.1);
  --el-menu-active-color: var(--layout-font-color);

  background-color: var(--color-primary);

  .menu-item {
    display: flex;
    align-items: center;
    gap: 1em;
    width: 100%;
    padding-left: 20px;
    color: var(--layout-font-color);
  }


  .el-menu-item.is-active {
    background-color: var(--el-menu-bg-color);
  }
}
</style>
