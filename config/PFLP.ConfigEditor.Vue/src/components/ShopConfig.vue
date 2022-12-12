<template>
    <div>
        <n-space>
            开启商店<n-switch v-model:value="config.ModuleEnabled" size="large" />
        </n-space>
        <n-space>
            自动格式化配置JSON
            <n-switch v-model:value="config.SaveFormattedJson" size="large" />
        </n-space>
        <n-space>
            OP获取物品ID快捷命令/shop dumpitem
            <n-switch v-model:value="config.OPCmdDumpItems" size="large" />
        </n-space>
    </div>
</template>
<script lang="ts">
import { useGlobalStore } from "../stores/global";
const store = useGlobalStore();
export default {
    data() {
        return {
            config: store.config.Shop,
        }
    }
}
</script>
<style scoped> 
.n-space {
    align-items: center;
    margin-bottom: 10px;
}
</style>