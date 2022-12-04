import { ref/*, computed */ } from 'vue'
import { defineStore } from 'pinia'
class ConfigData {
  public ConsoleLanguage: string = 'global'
}
export const useGlobalStore = defineStore('global', () => {
  const config = ref(new ConfigData())
  return { config }
})
