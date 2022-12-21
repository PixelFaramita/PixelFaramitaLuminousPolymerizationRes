<template>
    <div>
        <n-h3 prefix="bar">
            <n-space>
                启用请求传送模块<n-switch v-model:value="tpa.ModuleEnabled" size="large" />
            </n-space>
        </n-h3>
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
            <div>
                默认接收方式
                <n-space>
                    横幅<n-switch v-model:value="tpa.DefaultReceiveByToast" size="large" />
                    弹窗<n-switch v-model:value="tpa.DefaultReceiveByForm" size="large" />
                    消息<n-switch v-model:value="tpa.DefaultReceiveByMsg" size="large" />
                </n-space>
            </div>
        </div>
        <n-divider />
        <n-h3 prefix="bar">
            <n-space>
                启用公共传送点模块<n-switch v-model:value="warp.ModuleEnabled" size="large" />
            </n-space>
        </n-h3>
        <n-divider />
        <n-h3 prefix="bar">
            启用家园模块<n-switch v-model:value="home.ModuleEnabled" size="large" />
        </n-h3>
        <div v-if="home.ModuleEnabled">
            <n-space>
                玩家最大Home数量<n-input-number v-model:value="home.MaxHomeCount" :validator="x => x >= -1" />
            </n-space>
        </div> <n-divider />
        <n-h3 prefix="bar">
            启用死亡记录模块<n-switch v-model:value="death.ModuleEnabled" size="large" />
        </n-h3>
        <div v-if="death.ModuleEnabled">
            <n-space>
                记录数量<n-input-number v-model:value="death.DeathHistoryCount" :validator="x => x >= -1" />
            </n-space>
            <n-space>
                死亡显示消息<n-switch v-model:value="death.OnDeathEchoInfo" size="large" />
            </n-space>  
             <n-space>
                允许死亡返回/death back<n-switch v-model:value="death.DeathCmdTeleport" size="large" />
            </n-space>
            <n-space v-if="death.DeathCmdTeleport">
                死亡显示消息
                <n-input-number step="500" v-model:value="death.DeathCmdTeleportInvulnerable">
                    <template #suffix>
                        毫秒
                    </template>
                </n-input-number>
            </n-space>
        </div>
        <n-divider />
        <n-h3 prefix="bar">
            <n-space>
                启用随机传送模块<n-switch v-model:value="tpr.ModuleEnabled" size="large" />
            </n-space>
        </n-h3>
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
            home: store.config.Home,
            death: store.config.Death
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