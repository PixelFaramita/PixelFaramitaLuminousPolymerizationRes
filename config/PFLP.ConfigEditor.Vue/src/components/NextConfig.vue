<template>
  <div>
    <n-h3 prefix="bar">
      玩家个人PvP开关
      <n-switch v-model:value="config.PvPManager.ModuleEnabled" />
    </n-h3>
    <n-h3 prefix="bar">
      Menu自定义菜单
      <n-text>配置位于[插件目录]\menu.json</n-text>
      <n-switch v-model:value="config.Menu.ModuleEnabled" />
    </n-h3>
    <div v-if="config.Menu.ModuleEnabled">
      自动保存格式化的JSON
      <n-switch v-model:value="config.Menu.SaveFormattedJson" />
    </div>
    <n-h3 prefix="bar">
      Notice自定义公告
      <n-text>编辑命令/notice_edit</n-text>
      <n-switch v-model:value="config.Notice.ModuleEnabled" />
    </n-h3>
    <n-h3 prefix="bar">
      GiftCode礼包码
      <n-switch v-model:value="config.GiftCode.ModuleEnabled" />
    </n-h3>
    <n-h3 prefix="bar">
      KickToolbox/踢出(部分)Toolbox玩家
      <n-switch v-model:value="config.KickToolbox.ModuleEnabled" />
    </n-h3>
    <n-space v-if="config.KickToolbox.ModuleEnabled">
      踢出提示
      <n-input v-model:value="config.KickToolbox.KickMessage" />
    </n-space>
    <n-h3 prefix="bar">
      ChatTranslation/聊天实时翻译
      <n-switch v-model:value="config.ChatTranslation.ModuleEnabled" />
    </n-h3>
    <n-h3 prefix="bar">
      ChatEnhancement/聊天增强
      <n-switch v-model:value="config.ChatEnhancement.ModuleEnabled" />
    </n-h3>
    <div>
      /tell命令禁用选择器
      <n-switch v-model:value="config.ChatEnhancement.DisableSelectorOnTell" />
    </div>
    <div v-if="config.ChatEnhancement.ModuleEnabled" class="end">
      消息格式
      <n-input v-model:value="config.ChatEnhancement.Format" />
    </div>
  </div>
</template>
<script lang="ts">
import { useGlobalStore } from "../stores/global";
const store = useGlobalStore();
export default {
  data() {
    return {
      config: store.config,
    };
  },
};
</script>
<style scoped>
.n-space {
  align-items: center;
  margin-bottom: 10px;
}

.n-divider {
  margin: 3px;
}
div.end {
  margin-bottom: 20px;
}
</style>
