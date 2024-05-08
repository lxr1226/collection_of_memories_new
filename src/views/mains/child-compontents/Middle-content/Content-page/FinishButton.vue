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
import { aidefine, aihint } from '@/stores/index'
//调用pinia里面的新的问题
const issue_id = '2'
let issue: string = '3'
function handleOver() {
  //console.log('结束话题')
  // askquestionStore.askquestion(issue_id).then(() => {
  //   const welcomeMessage = askquestionStore.aianswer
  //   //console.log(welcomeMessage)
  // })
  //console.log('结束话题')
  issue = String(Number(issue) + 1)
  getWelcomeMessageStore.getWelcomeMessage(issue).then(() => {})
}
const askquestionStore = aidefine()
const getWelcomeMessageStore = aihint()

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
