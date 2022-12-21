<template>
    <n-tabs animated type="card" default-value="global">
        <n-tab-pane name="global" tab="全局配置">
            <global-config />
        </n-tab-pane>
        <n-tab-pane name="shop" tab="经济">
            <econmic-config />
        </n-tab-pane>
        <n-tab-pane name="land" tab="领地">
            <land-config />
        </n-tab-pane>
        <n-tab-pane name="teleport" tab="传送">
            <teleport-config />
        </n-tab-pane>
        <n-tab-pane name="worldlimit" tab="边界">
            <world-limit-config />
        </n-tab-pane>
        <n-tab-pane name="message" tab="信息">
            <message-config />
        </n-tab-pane>
        <n-tab-pane name="ext" tab="杂项">
            <next-config />
        </n-tab-pane>
        <n-tab-pane name="other" tab="其他">
            <other-config />
        </n-tab-pane>
    </n-tabs>
</template>
<script lang="ts">
import { useGlobalStore } from "../stores/global";
const store = useGlobalStore();
export default {
    data() {
        return {
            config: store.config,
        };
    }
}
</script>
<style scoped>

</style>