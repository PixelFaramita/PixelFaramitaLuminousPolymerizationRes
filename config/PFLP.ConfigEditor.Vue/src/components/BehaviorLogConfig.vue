<template>
    <div>
        <n-space>
            开启行为日志<n-switch v-model:value="beh.ModuleEnabled" size="large" />
        </n-space>
        <div v-if="beh.ModuleEnabled">
                日志文件名称<n-input v-model:value="beh.FileName" size="large"/>
            <n-space>
                日志刷新间隔<n-input-number v-model:value="beh.RefreshIntervalInMinutes" size="large" />分钟
            </n-space>
            <div>
                <n-space v-for="(item, key) in beh.Toggles">
                    {{ getLogName(key) }} ：
                    到数据库<n-switch v-model:value="item.Database" size="large" />
                    到控制台<n-switch v-model:value="item.Console" size="large" />
                </n-space>
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
            beh: store.config.BehaviorLog
        }
    }, methods:
    {
        getLogName(key: "PlayerJoin" | "PlayerLeft" | "ServerCmd" | "PlayerCmd" | "PlayerRespawn" | "MobDie" | "PlayerOpenContainer" | "PlayerChat" | "PlayerChangeDimension" | "PlayerAttack" | "PlayerPickUpItem"
            | "PlayerDropItem" | "PlayerDestroyBlock" | "PlayerPlaceBlock" | "BlockExplode" | "ContainerChanged" | "PlayerInteractEntity" | "PlayerInteractBlock" | "EntityExplode"
            | string) {
            switch (key) {
                case "PlayerJoin":
                    return "玩家加入";
                case "PlayerLeft":
                    return "玩家离开";
                case "ServerCmd":
                    return "服务器命令";
                case "PlayerCmd":
                    return "玩家命令";
                case "PlayerRespawn":
                    return "玩家重生";
                case "MobDie":
                    return "怪物死亡";
                case "PlayerOpenContainer":
                    return "玩家打开容器";
                case "PlayerChat":
                    return "玩家聊天";
                case "PlayerChangeDimension":
                    return "玩家改变维度";
                case "PlayerAttack":
                    return "玩家攻击";
                case "PlayerPickUpItem":
                    return "玩家捡起物品";
                case "PlayerDropItem":
                    return "玩家丢弃物品";
                case "PlayerDestroyBlock":
                    return "玩家破坏方块";
                case "PlayerPlaceBlock":
                    return "玩家放置方块";
                case "BlockExplode":
                    return "方块爆炸";
                case "ContainerChanged":
                    return "容器改变";
                case "PlayerInteractEntity":
                    return "玩家交互实体";
                case "PlayerInteractBlock":
                    return "玩家交互方块";
                case "EntityExplode":
                    return "实体爆炸";
                default:
                    return key;
            }
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