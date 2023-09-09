<template>
  <BaseSection :step="1" title="协议主体">
    <el-form :model="form" :rules="rules" label-suffix="：" label-width="auto">
      <el-row :gutter="16">
        <el-col :span="24" :lg="12">
          <el-form-item label="协议客户" prop="customer">
            <el-button class="left-widget">选择客户</el-button>
            <span class="extra-info">上海正也医药有限公司</span>
          </el-form-item>
        </el-col>
        <el-col :span="24" :lg="12">
          <el-form-item label="协议状态">
            <el-select class="left-widget" v-model="form.status">
              <el-option v-for="option in status" :key="option.value" :label="option.label"
                :value="option.value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="24" :lg="12">
          <el-form-item label="购进指标">
            <div style="display: flex;">
              <el-select v-model="form.buyIndicator" class="left-widget">
                <el-option v-for="option in types" :key="option.value" :label="option.label" :value="option.value"></el-option>
              </el-select>
            <el-input placeholder="输入金额/数量" class="extra-info input--has-bg"></el-input>
            </div>
          </el-form-item>
        </el-col>

        <el-col :span="24" :lg="12">
          <el-form-item label="纯销指标">
            <div style="display: flex;">
              <el-select v-model="form.sellIndicator" class="left-widget">
                <el-option v-for="option in types" :key="option.value" :label="option.label" :value="option.value"></el-option>
              </el-select>
              <el-input placeholder="输入金额/数量" class="extra-info input--has-bg"></el-input>
            </div>
          </el-form-item>
        </el-col>

        <el-col :span="24" :lg="12">
          <el-form-item label="销售区域">
            <div style="display: flex;">
              <el-select v-model="form.areas" placeholder="选择区域" multiple collapse-tags :max-collapse-tags="0" class="left-widget">
                <el-option v-for="option in areas" :key="option.value" :label="option.label" :value="option.value"></el-option>
              </el-select>

              <div class="extra-info tags">
                <el-tag v-for="(val, idx) in form.areas" closable @close="handleUnChooseArea(idx)">
                  {{ areas.find(ar => ar.value === val)?.label }}
                </el-tag>
              </div>
            </div>
          </el-form-item>
        </el-col>

        <el-col :span="24" :lg="12">
          <el-form-item label="签订时间">
            <div>
              <el-date-picker v-model="form.date" type="datetime" format="YYYY-MM-DD HH:mm" class="max-width-widget"></el-date-picker>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="购进渠道">
            <div style="display: flex;">
              <el-select placeholder="指定渠道" class="left-widget"></el-select>
              <el-button class="extra-info">请选择渠道</el-button>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="24">
            <el-table class="channel-table" :data="tableData" header-row-class-name="channel-header-row">
              <el-table-column label="指定渠道编码" prop="code"></el-table-column>
              <el-table-column label="指定渠道名称" prop="name"></el-table-column>
              <el-table-column label="所在省" prop="city"></el-table-column>
            </el-table>
        </el-col>
      </el-row>
    </el-form>
  </BaseSection>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import BaseSection from './BaseSection.vue';

const status = [
  { label: '正常', value: 0 }
]

const types = [
  { label: '金额', value: 0 },
  { label: '数量', value: 1 }
]

const areas = [
  { label: '全国', value: 0 },
  { label: '上海a', value: 1 },
  { label: '上海w', value: 2 },
  { label: '上海s', value: 3 },
  { label: '上海r', value: 4 },
  { label: '上海f', value: 5 },
  { label: '上海g', value: 6 },
  { label: '上海g', value: 7 },
  { label: '上海g', value: 64 },
  { label: '上海g', value: 62 },
  { label: '上海g', value: 61 },
  { label: '上海g', value: 69 },
]

const tableData = [
  {code: 'BJ000090', name: '宁波九州通药业有限公司', city: '浙江省'},
  {code: 'BJ000192', name: '国药控股精华有限公司', city: '浙江省'},
  {code: 'BJ000283', name: '老百姓药业有限公司', city: '浙江省'},
]

const form = reactive({
  status: 0,
  buyIndicator: 0,
  sellIndicator: 0,
  areas: [0],
  date: undefined,
})

const rules = {
  customer: [
    {required: true, message: '请选择协议客户'}
  ]
}

/**
 * 取消选择区域
 */
function handleUnChooseArea(idx: number) {
  form.areas.splice(idx, 1)
}
</script>

<style lang="scss">
.left-widget {
  flex: 0;
  min-width: 100px;
  max-width: 100px;
}

.tags {
  flex: 0 1  300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media screen and (max-width: 1260px) {
    flex-basis: 200px;
  }
  
  .el-tag + .el-tag {
    margin-left: 5px;
  }
}

.max-width-widget {
  width: calc(100% + 100px - 10px) !important;
}


.channel-table {
  margin-left: 5em;
  width: calc(100% - 100px);
}
</style>
