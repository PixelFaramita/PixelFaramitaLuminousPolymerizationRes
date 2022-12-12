import { ref/*, computed */ } from 'vue'
import { defineStore } from 'pinia'
class ConfigData {
  public ConsoleLanguage: string = 'global'
  public Global_AsyncTeleportWaitTime: number = 2500
  public FormAPI_CountPerPage: number = 5
  public Shop: { ModuleEnabled: boolean, SaveFormattedJson: boolean, OPCmdDumpItems: boolean } =
    { ModuleEnabled: true, SaveFormattedJson: true, OPCmdDumpItems: true }

}
export const useGlobalStore = defineStore('global', () => {
  const config = ref(new ConfigData())
  return { config }
})
