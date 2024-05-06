<template>
  <div>
    <Button
      v-for="(button, index) in buttons"
      :key="index"
      type="primary"
      :style="{
        backgroundColor: button.styles.bgplay,
        borderRadius: '8px',
        color: '#fff',
        fontSize: '20px',
        height: '50px'
      }"
      >结束话题
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from 'ant-design-vue'
import { h } from 'vue'
import { RedditOutlined } from '@ant-design/icons-vue'
import { defineProps } from 'vue'
const props = defineProps({
  content: String // 声明一个名为 content 的 prop，类型为字符串
})
// 定义按钮数据
const buttons = ref([
  {
    id: 1,
    styles: {
      bgplay: '#ffc364'
    },
    icons: {
      finish: h(RedditOutlined)
    },
    active: false // 初始状态为非激活状态
  }
])
</script>
<style scoped></style>
