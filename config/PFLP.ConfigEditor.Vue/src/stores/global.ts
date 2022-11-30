import { ref/*, computed */ } from 'vue'
import { defineStore } from 'pinia'
class ConfigData {
  public name: string = 'global'
}
export const useGlobalStore = defineStore('global', () => {
  const configData = ref(new ConfigData())
  //const doubleCount = computed(() => count.value * 2)
  //function increment() {
  //  count.value++
  //}
  //return { count, doubleCount, increment }
  return { configData }
})
