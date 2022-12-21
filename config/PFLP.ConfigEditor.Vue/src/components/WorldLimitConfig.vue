<template>
    <div>
        <n-h3 prefix="bar">
            启用世界边界模块<n-switch v-model:value="config.ModuleEnabled" size="large" />
        </n-h3>
        <div v-if="config.ModuleEnabled">
            <n-space>
                未能找到上一坐标时传送到出生点<n-switch v-model:value="config.TeleportToSpawnpointIfError" size="large" />
            </n-space>
            <n-space>
                开启边界可视化<n-switch v-model:value="config.EnableVisualize" size="large" />
            </n-space>
        <n-h3 prefix="bar" type="warning">
            JSON预览<n-switch v-model:value="preview" size="large" />
        </n-h3>
        <n-h3 prefix="bar">
            主世界：
            <world-limit-item :data="config.Overworld" :preview="preview"/>
        </n-h3>
        <n-h3 prefix="bar">
            地狱：
            <world-limit-item :data="config.Nether" :preview="preview"/>
        </n-h3>
        <n-h3 prefix="bar">
            末地：
            <world-limit-item :data="config['The End']" :preview="preview"/>
        </n-h3>
    </div>
    </div>
</template>
<script lang="ts" setup>
import WorldLimitItem from "../components/WorldLimitItem.vue";
</script>
<script lang="ts">
import { useGlobalStore } from "../stores/global";
const store = useGlobalStore();
export default {
    data() {
        return {
            config: store.config.WorldLimit,
            preview:false
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