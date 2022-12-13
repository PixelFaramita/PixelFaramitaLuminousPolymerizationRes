<template>
    <div>
        <n-space>
            启用请求传送模块<n-switch v-model:value="tpa.ModuleEnabled" size="large" />
        </n-space>
        <div v-if="tpa.ModuleEnabled">
            <n-space>
                传送超时时间
                <n-input-number v-model:value="tpa.Timeout" size="large" />
            </n-space>
            <n-space>
                传送冷却时间
                <n-input-number v-model:value="tpa.Cooldown" size="large" />
            </n-space>
            <n-space>
                允许传送到自己
                <n-switch v-model:value="tpa.AllowTpaToSelf" size="large" />
            </n-space>
            <n-space>
                开启玩家自定义设置 /tpa settings
                <n-switch v-model:value="tpa.PlayerSettingEnable" size="large" />
            </n-space>
            <n-space>
                传送免疫时间
                <n-input-number v-model:value="tpa.TeleportImmuneTime" size="large">
                    <template #suffix>
                        秒
                    </template>
                </n-input-number>
            </n-space>
            <n-space>
                默认接收方式
                <n-switch v-model:value="tpa.DefaultReceiveByToast" size="large" />
                <n-switch v-model:value="tpa.DefaultReceiveByForm" size="large" />
                <n-switch v-model:value="tpa.DefaultReceiveByMsg" size="large" />
            </n-space>
        </div>
        <n-divider />
        <n-space>
            启用公共传送点模块<n-switch v-model:value="warp.ModuleEnabled" size="large" />
        </n-space>
        <n-divider />
        <n-space>
            启用随机传送模块<n-switch v-model:value="tpr.ModuleEnabled" size="large" />
        </n-space>
    </div>
</template>
<script lang="ts">
import { useGlobalStore } from "../stores/global";
const store = useGlobalStore();
export default {
    data() {
        return {
            tpa: store.config.Tpa,
            tpr: store.config.Tpr,
            warp: store.config.Warp,
        };
    }
}
</script>
<style scoped>
.n-space {
    align-items: center;
    margin-bottom: 10px;
}

.n-divider {
    margin: 3px;
}
</style>