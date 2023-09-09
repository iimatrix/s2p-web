<template>
  <div class="header-item">
    <div class="header-item__inner">
      <div :class="['icon', { 'has-bg': bg }]">
        <div :class="icon"></div>
      </div>
      <div class="header-item__title">
        <span>
          <slot></slot>
        </span>
        <span class="subtitle">
          <slot name="subtitle"></slot>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  // path?: string,
  icon?: string,
  bg?: boolean,
}
withDefaults(defineProps<Props>(), {
  bg: true
})
</script>

<style lang="scss">
.header-item {
  display: flex;
  align-items: flex-start;
  font-size: 1.25rem;
  white-space: nowrap;

  &+.header-item {
    margin-left: 2em;
  }

  .header-item__inner {
    display: flex;
    align-items: center;
    cursor: pointer;

    >div+div {
      margin-left: 10px;
    }
  }

  .icon {
    padding: 10px;
    border-radius: 8px;

    &.has-bg {
      background-color: rgba($color: #fff, $alpha: 0.15);
    }
  }


  .header-item__title {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    line-height: 1;

    .subtitle {
      font-size: .5em;
    }
  }
}

.el-popper {

  .icon.has-bg {
    padding: 2px;
    background-color: inherit;
  }

}


.is-active .header-item .icon {
  color: #fff;
  background-color: #6cbf6f;
}
</style>
