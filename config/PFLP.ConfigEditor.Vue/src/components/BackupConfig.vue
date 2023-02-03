<template>
    <div>
        <n-space>
            开启存档备份<n-switch v-model:value="bak.ModuleEnabled" size="large" />
        </n-space>
        <div v-if="bak.ModuleEnabled">
            <n-space>
                目标文件夹<n-input v-model:value="bak.TargetFolder" size="large" />
            </n-space>
            <n-space>
                覆盖目标文件夹<n-switch v-model:value="bak.DeleteTargetFolderIfExists" size="large" />
            </n-space>
            <n-space>
                复制文件夹（不推荐）<n-switch v-model:value="bak.CopyFolder" size="large" />
            </n-space>
            <n-space>
                打包zip压缩包（推荐）<n-switch v-model:value="bak.CreateZipFile" size="large" />
            </n-space>
            <div>
                zip压缩包文件名<n-input v-model:value="bak.ZipFileName" size="large" />
            </div>
            <n-space>
                打包mcworld存档文件<n-switch v-model:value="bak.CreateMcWorldFile" size="large" />
            </n-space>
            <div>
                zip压缩包文件名<n-input v-model:value="bak.McWorldFileName" size="large" />
            </div>
            <n-space>
                包含插件数据文件<n-switch v-model:value="bak.IncludePluginData" size="large" />
            </n-space>
            <n-space>
                包含插件配置文件<n-switch v-model:value="bak.IncludePluginConfig" size="large" />
            </n-space>
            <!-- "Extra": [
        "plugins/LiteLoader/*.json"
      ] -->
            <div class="end">
                额外文件（支持通配符*）
                <n-dynamic-input v-model:value="bak.Extra">
                </n-dynamic-input>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { useGlobalStore } from "../stores/global";
const store = useGlobalStore();
export default {
    data() {
        return {
            bak: store.config.Backup
        }
    }
}
</script>
<style scoped>
.n-space {
    align-items: center;
    margin-bottom: 10px;
}
div.end{
    margin-bottom: 30px;
}
</style>