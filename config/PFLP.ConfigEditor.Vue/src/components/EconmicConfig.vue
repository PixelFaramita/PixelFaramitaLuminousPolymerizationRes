<template>
    <div>
        <n-space>
            货币名称<n-input v-model:value="money.DisplayName" size="large" />
        </n-space>
        <n-space>
            使用记分板作为经济前置<n-switch v-model:value="money.UseScoreboard" size="large" />
            <li v-if="!money.UseScoreboard">
                当前为LLMoney
            </li>
        </n-space>
        <n-space v-if="money.UseScoreboard">
            记分板名称<n-input v-model:value="money.ScoreboardName" size="large" />
        </n-space>
        <n-divider />
        <n-space>
            启用商店模块<n-switch v-model:value="shop.ModuleEnabled" size="large" />
        </n-space>
        <div v-if="shop.ModuleEnabled">
            <n-space>
                自动格式化配置JSON
                <n-switch v-model:value="shop.SaveFormattedJson" size="large" />
            </n-space>
            <n-space>
                OP获取物品ID快捷命令/shop dumpitem
                <n-switch v-model:value="shop.OPCmdDumpItems" size="large" />
            </n-space>
        </div>
    </div>
</template>
<script lang="ts">
import { useGlobalStore } from "../stores/global";
const store = useGlobalStore();
export default {
    data() {
        return {
            shop: store.config.Shop,
            money: store.config.MoneyAPI_Settings
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