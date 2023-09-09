<template>
  <div class="base-section">
    <el-divider border-style="dashed">
      <div class="text">
        <i class="text__icon">{{ step }}</i>
        <span>{{ title }}</span>
      </div>
    </el-divider>
    <div v-if="$slots.info">
      <slot name="info"></slot>
    </div>

    <div :class="['content', {'content-border': contentBorder}]" :style="contentStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { StyleValue } from 'vue';

export interface Props {
  step: number,
  title: string,
  contentBorder?: boolean,
  contentStyle?: StyleValue,
}

defineProps<Props>()
</script>

<style lang="scss">
.base-section {
  color: var(--el-text-color-secondary);
  font-size: 0.9em;
  .el-divider__text {
    background-color: var(--main-bg-color);
  }

  // 分割线文本
  .text {
    display: flex;
  }


  // 内容
  .content {
    border-radius: .3em;
    padding: 0.3em 1em;
    background: #fff;

    .extra-info {
      margin-left: 10px;
    }

    .input--has-bg .el-input__wrapper,
    .input--has-bg .el-textarea__inner {
        background-color: var(--main-bg-color) !important; 
      }

    &.content-border {
      border: 1px solid var(--el-border-color) ;
      
    }
  }

  .important {
    color: initial;
  }
}

.text__icon {
  width: 1.1em;
  height: 1.1em;
  font-style: normal;
  color: #fff;
  margin-right: .5em;
  text-align: center;
  border-radius: 50%;
  background-color: var(--main-color-primary);
}


// 表头颜色
.channel-header-row {
  background-color: #f8f8f8 !important;

  .el-table__cell.el-table__cell {
    background-color: inherit;
    color: rgba($color: #000000, $alpha: .6);
  }
}
</style>
