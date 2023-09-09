<template>
  <BaseSection :step="2" title="产品政策">
    <template #info>
      <div class="info" :gutter="16" style="margin-bottom: 10px;">
          <el-button size="default" type="primary" style="margin-right: -2em;">添加产品</el-button>
          <span class="info__item">购进总指标（万元）: <strong class="important">¥152.65</strong></span>

          <span class="info__item">指标按季度分解（万元）<strong class="important" v-for="(val, key, idx) in season">【{{key}}】{{ val }}<span v-if="idx !== 3">,</span></strong></span>
          <span class="info__item">纯销总指标：<strong class="important">¥152.65</strong></span>
      </div>
    </template>
    <div>
      <el-form :model="form1" label-suffix="：" inline label-width="auto" class="section2-form">
        <el-form-item label="产品">
          <div class="flex">
            <el-select placeholder="选择产品"></el-select>
            <el-text type="primary" style="margin-left: 1em;white-space: nowrap;">美复胶丸：24粒/盒</el-text>
          </div>
        </el-form-item>
        <el-form-item label="协议日期" prop="date" class="form-date">
            <el-date-picker v-model="form1.date" type="daterange" format="YYYY-MM-DD"></el-date-picker>
        </el-form-item>
        <el-form-item style="flex: 1;margin-right: 0;">
          <el-button type="warning" plain style="margin-left: auto;">删除</el-button>
        </el-form-item>

      </el-form>
      <el-divider style="margin: 0 -1em .5em -1em;width: calc(100% + 2em);"></el-divider>

      <el-table :data="[{}]" class="section2-table"  header-row-class-name="channel-header-row">
        <el-table-column label="协议价（元）">
          <el-input placeholder="请输入" class="input--has-bg"></el-input>
        </el-table-column>
        <el-table-column label="票折（元）">
          <el-input placeholder="请输入" class="input--has-bg"></el-input>
        </el-table-column>
        <el-table-column label="购进指标量（大单位）">
          <el-input placeholder="请输入" class="input--has-bg"></el-input>
        </el-table-column>
        <el-table-column label="购进指标量（小单位）">
          <el-input placeholder="请输入" class="input--has-bg"></el-input>
        </el-table-column>
        <el-table-column label="购进金额（万元）">
          <el-input placeholder="请输入" class="input--has-bg"></el-input>
        </el-table-column>
        <el-table-column label="纯销指标量（小单位）">
          <el-input placeholder="请输入" class="input--has-bg"></el-input>
        </el-table-column>
        <el-table-column label="纯销指金额（万元）">
          <el-input placeholder="请输入" class="input--has-bg"></el-input>
        </el-table-column>
      </el-table>


      <el-table :data="[{}]" class="section2-table"  header-row-class-name="channel-header-row" style="margin-top: 1em;">
        <el-table-column label="分销金额">
          <el-input placeholder="请输入" class="input--has-bg"></el-input>
        </el-table-column>
        <el-table-column label="费用科目">
          <el-select placeholder="单选项"></el-select>
        </el-table-column>
        <el-table-column label="零售配送">
          <el-input placeholder="请输入" class="input--has-bg"></el-input>
        </el-table-column>
        <el-table-column label="费用科目">
          <el-select placeholder="多选项"></el-select>
        </el-table-column>
        <el-table-column label="医疗配送商">
          <el-input placeholder="请输入" class="input--has-bg"></el-input>
        </el-table-column>
        <el-table-column label="费用科目">
          <el-select placeholder="多选项"></el-select>
        </el-table-column>
        <el-table-column label="自定义7">
          <el-date-picker></el-date-picker>
        </el-table-column>
        <el-table-column label="自定义8">
          <el-date-picker></el-date-picker>
        </el-table-column>
      </el-table>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import BaseSection from './BaseSection.vue';

const season = {
  Q1: '¥12.5',
  Q2: '¥12.5',
  Q3: '¥12.5',
  Q4: '¥12.5',
}

const form1 = reactive({
  date: undefined,
})
</script>

<style scoped lang="scss">
.info {
  display: flex;
  align-items: center;
  

  .info__item {
    margin-left: 3em;
    font-size: .85em;
  }
  
}

.section2-form {
  display: flex;
  flex-wrap: wrap;

  .form-date {
    margin-left: 2em;
  }

  @media screen and (max-width: 1034px) {
    
    .form-date {
      margin-left: 0;
    }
  }
}

.section2-table {
  border: 1px solid var(--el-border-color);
}
</style>
