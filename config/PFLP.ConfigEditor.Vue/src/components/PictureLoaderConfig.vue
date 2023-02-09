<template>
    <div>
        <n-h3 prefix="bar">
            <n-space>
                启用图片加载器模块<n-switch v-model:value="pic.ModuleEnabled" size="large" />
            </n-space>
        </n-h3>
        <n-text type="info">
            用于直接在游戏内加载图片，支持png、jpg、jpeg、bmp、webp格式的本地或在线图片<br />
            支持GIF动图，带宽有限的服务器请谨慎创建<br />
            OP在游戏内使用命令/picture导入图片<br />
        </n-text>
        <div v-if="pic.ModuleEnabled">
            <n-space>
                图片激活距离<n-input-number v-model:value="pic.DisplayDistance" size="large" /> 格
                <div>
                    <n-text type="info">
                        玩家接近图片时才会加载图片
                    </n-text><br />
                    <n-text type="error">
                        请不要设置过大，否则会增加占用且玩家收到图片有延迟
                    </n-text>
                </div>
            </n-space>
            <n-space>
                静态图片刷新间隔<n-input-number v-model:value="pic.StaticPictureResendDurationSeconds" size="large" /> 秒
                <div>
                    <n-text type="info">
                        定期重发方块，以免玩家重新加载区块导致图片消失
                    </n-text>
                </div>
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
            pic: store.config.PictureLoader
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