<template>
    <div>
        <n-space>
            启用领地模块<n-switch v-model:value="config.ModuleEnabled" size="large" />
        </n-space>
        <div v-if="config.ModuleEnabled">
            <n-space>
                启用领地传送
                <n-switch v-model:value="config.EnableTeleport" size="large" />
            </n-space> 
            <n-space>
                圈地飞行（短距离）（仅非OP有效）
                <n-switch v-model:value="config.EnableEnclosureFly" size="large" />
            </n-space>
            <n-space>
                开启二维领地圈地
                <n-switch v-model:value="config.Enabled2D" size="large" />
            </n-space>
            <div v-if="config.Enabled2D">
                <n-space>
                    二维领地圈地价格
                    <n-input-number v-model:value="config.Price2D" size="large" />
                </n-space>
                <n-space>
                    二维领地圈地回收价格
                    <n-input-number v-model:value="config.RecyclePrice2D" size="large" />
                </n-space>
                <n-space>
                    二维领地圈地最大尺寸
                    <n-input-number v-model:value="config.MaxSize2D" size="large" />
                </n-space>
                <n-space>
                    二维领地圈地最小尺寸
                    <n-input-number v-model:value="config.MinSize2D" size="large" />
                </n-space>
            </div>
            <n-space>
                开启三维领地圈地
                <n-switch v-model:value="config.Enabled3D" size="large" />
            </n-space>
            <div v-if="config.Enabled3D">
                <n-space>
                    三维领地圈地价格
                    <n-input-number v-model:value="config.Price3D" size="large" />
                </n-space>
                <n-space>
                    三维领地圈地回收价格
                    <n-input-number v-model:value="config.RecyclePrice3D" size="large" />
                </n-space>
                <n-space>
                    三维领地圈地最大尺寸
                    <n-input-number v-model:value="config.MaxSize3D" size="large" />
                </n-space>
                <n-space>
                    三维领地圈地最小尺寸
                    <n-input-number v-model:value="config.MinSize3D" size="large" />
                </n-space>
            </div>
            <n-space>
                最大领地数量
                <n-input-number v-model:value="config.MaximumOwnLands" size="large" />
            </n-space>
            <n-space>
                提示信息数量（Popup提示）
                <n-input-number v-model:value="config.LandTipCount" size="large" />
            </n-space>
            <n-space>
                提示信息停留时间（Popup提示）
                <n-input-number step="500" v-model:value="config.LandTipTime" size="large">
                    <template #suffix>
                        毫秒
                    </template>
                </n-input-number>
            </n-space>
            <n-space>
                (UI)列表每页数量
                <n-input-number v-model:value="config.CountPerPage" size="large" />
            </n-space>
            <n-space>
                (UI)列表选择器每页数量
                <n-input-number v-model:value="config.ChooseItemCountPerPage" size="large" />
            </n-space>
            <n-space>
                阻止领地方块破坏效果增强
                <n-switch step="50" v-model:value="config.PreventDestroyEx" size="large" />
            </n-space>
            <!-- <n-space>
                不启用材质
                <n-switch step="50" v-model:value="config.NoResourcePack" size="large" />
            </n-space>
            <div v-if="!config.NoResourcePack">
                <n-space>
                    (UI)选择表单宽度（需要材质）
                    <n-input-number step="50" v-model:value="config.SimpleFormWidth" size="large" />
                </n-space>
                <n-space>
                    (UI)选择表单宽度（需要材质）
                    <n-input-number step="50" v-model:value="config.SimpleFormHeight" size="large" />
                </n-space>
            </div> -->
        </div>
    </div>
</template>
<script lang="ts">
import { useGlobalStore } from "../stores/global";
const store = useGlobalStore();
export default {
    data() {
        return {
            config: store.config.Land,
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