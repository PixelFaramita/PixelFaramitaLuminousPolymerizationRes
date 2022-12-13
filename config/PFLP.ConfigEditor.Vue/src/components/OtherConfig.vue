<template>
    <div>
        <n-space>
            实验功能
            <n-switch v-model:value="helper.ModuleEnabled" placeholder="实验功能" />
        </n-space>
        <div v-if="helper.ModuleEnabled">
            <n-space>
                强制下载材质
                <n-switch v-model:value="helper.ForceDownloadWithoutCovering" />
            </n-space>
            <n-space>
                伪造种子
                <n-switch v-model:value="helper.EnableFakeSeed" />
            </n-space>
            <n-space v-if="helper.EnableFakeSeed">
                种子
                <n-input-number :show-button="false" v-model:value="helper.FakeSeed" />
            </n-space>
            <n-space>
                修改存档名称（暂停界面）
                <n-switch v-model:value="helper.EnableLevelName" />
            </n-space>
            <n-space v-if="helper.EnableLevelName">
                存档名称
                <n-input v-model:value="helper.LevelName" />
            </n-space>
            <n-space>
                重新定义红石刻
                <n-switch v-model:value="helper.SlowDownRedstoneTick" />
            </n-space>
            <n-space v-if="helper.SlowDownRedstoneTick">
                主世界红石刻时间
                <n-input-number step="500" v-model:value="helper.OverworldRedstoneTickMs">
                    <template #suffix>
                        毫秒
                    </template>
                </n-input-number>
            </n-space>
            <n-space v-if="helper.SlowDownRedstoneTick">
                地狱红石刻时间
                <n-input-number step="500" v-model:value="helper.NetherRedstoneTickMs">
                    <template #suffix>
                        毫秒
                    </template>
                </n-input-number>
            </n-space>
            <n-space v-if="helper.SlowDownRedstoneTick">
                末地红石刻时间
                <n-input-number step="500" v-model:value="helper.TheEndRedstoneTickMs">
                    <template #suffix>
                        毫秒
                    </template>
                </n-input-number>
            </n-space>
        </div>
        <n-divider /> <n-space>
            修改主世界高度
            <n-switch v-model:value="height.ModuleEnabled" />
        </n-space>
        <div v-if="height.ModuleEnabled">
            <n-space>
                最高高度
                <n-input-number step="16" v-model:value="height.Max" :validator="(x: number) => x <= 512" />
            </n-space>
            <n-space>
                最低高度
                <n-input-number step="16" v-model:value="height.Min" :validator="(x: number) => x >= -512" />
            </n-space>
        </div>
        <n-divider />
        <n-space>
            关服时自动传送到指定服务器
            <n-switch v-model:value="close.TransferServerOnClose" />
        </n-space>
        <div v-if="close.TransferServerOnClose">
            <n-space>
                服务器地址
                <n-input step="16" v-model:value="close.Address" />
            </n-space>
            <n-space>
                端口
                <n-input-number step="16" v-model:value="close.Port" :validator="(x: number) => x >= 0 && x <= 65535" />
            </n-space>
        </div>
        <n-divider />
        <n-space>
            进服IP归属地显示
            <n-switch v-model:value="location.ModuleEnabled" />
        </n-space>
        <div v-if="location.ModuleEnabled">
            <n-space>
                广播消息
                <n-switch v-model:value="location.SendMessage" />
            </n-space>
            <n-space>
                消息通知
                <n-switch v-model:value="location.SendToast" />
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
            helper: store.config.Helper,
            height: store.config.HeightEdit,
            close: store.config.CloseHandler_Settings,
            location: store.config.JoinLocation
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