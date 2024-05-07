<template>
  <div>
    <a-button
      v-for="(button, index) in buttons"
      :key="index"
      type="primary"
      size="large"
      :style="{ backgroundColor: button.styles.bgplay }"
      @click="handleOver"
      >结束话题</a-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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

function handleOver() {
  console.log('结束话题')
}
</script>
<style scoped></style>
