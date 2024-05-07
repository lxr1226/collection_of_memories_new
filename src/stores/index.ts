import { createPinia } from 'pinia'
const pinia = createPinia()

export default pinia
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {
  JWHContent,
  JWHaskquestion
} from '@/service/pages/mains/child-components/Middle-content/Content'
export const useOpenStore = defineStore('isOpen', () => {
  const isOpen = ref(false)
  // const open = computed(() => !isOpen.value)
  // const close = computed(() => isOpen.value)
  function controlOpen() {
    isOpen.value = !isOpen.value
  }
  return { isOpen, controlOpen }
})
export const AiIssue = defineStore('issue', () => {
  const issue = ref('')
  return { issue }
})
//调用欢迎词和问题接口
export const aihint = defineStore('welcome_id', () => {
  const welcom = ref('')
  async function getWelcomeMessage(welcome_id: string) {
    const welcomResult = await JWHContent(welcome_id)
    if (welcomResult.code == 200) {
      welcom.value = welcomResult.data
    }
  }

  return { welcom, getWelcomeMessage }
})

//调用询问问题接口
export const aidefine = defineStore('id', () => {
  const aianswer = ref('')
  const answerid = ref('')
  const answerstate = ref('')
  async function askquestion(id: string) {
    // console.log(useraccount.value)
    // console.log(password.value)
    const aianswerResult = await JWHaskquestion(id)
    //console.log(welcomResult)
    if (aianswerResult.code == 200) {
      aianswer.value = aianswerResult.data.issue
      answerid.value = aianswerResult.data.id
      answerstate.value = aianswerResult.data.state
    } else {
      /* empty */
    }
  }
  return { aianswer, answerid, answerstate, askquestion }
})
