<template>
    <div>
        <n-h3 prefix="bar">
            攻击回显
            <n-switch v-model:value="attack.ModuleEnabled" />
        </n-h3>
        <div v-if="attack.ModuleEnabled">
            <n-space>
                弹射物击中 ding~ 音效:<n-switch v-model:value="attack.BowDing" />
            </n-space>
            <n-space>
                弹射物击中标题显示伤害:<n-switch v-model:value="attack.BowDingTitle" />
            </n-space>
        </div>
        <n-h3 prefix="bar">
            UI扩展
            <n-switch v-model:value="ui.ModuleEnabled" />
        </n-h3>
        <div v-if="ui.ModuleEnabled">
            <n-space>
                SimpleFormHeight:<n-input-number v-model:value="ui.SimpleFormHeight" />
            </n-space>
            <n-space>
                SimpleFormWidth:<n-input-number v-model:value="ui.SimpleFormWidth" />
            </n-space>
        </div> <n-h3 prefix="bar">
            实验功能
            <n-switch v-model:value="helper.ModuleEnabled" placeholder="实验功能" />
        </n-h3>
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
                修改红石刻速度
                <n-switch v-model:value="helper.EditRedstoneTPS" />
                <n-a v-if="helper.EditRedstoneTPS" href="https://wiki.biligame.com/mc/%E5%88%BB">刻/TPS/MSPT参考</n-a>
            </n-space>
            <n-space v-if="helper.EditRedstoneTPS">
                <n-space>
                    主世界红石
                    <n-input-number step="0.5" v-model:value="helper.OverworldRedstoneTPS">
                        <template #suffix>
                            TPS
                        </template>
                    </n-input-number>
                    <n-space>
                        =<n-text class="blue">{{ TpsToMSPT(helper.OverworldRedstoneTPS) }}</n-text>
                        <n-text class="yellow">MSPT</n-text>
                        =<n-text class="yellow">原速</n-text>÷<n-text class="blue">{{
                            TpsToCount(helper.OverworldRedstoneTPS)
                        }}</n-text>
                    </n-space>
                </n-space>
                <n-space>
                    地狱红石
                    <n-input-number step="0.5" v-model:value="helper.NetherRedstoneTPS">
                        <template #suffix>
                            TPS
                        </template>
                    </n-input-number>
                    <n-space>
                        =<n-text class="blue">{{ TpsToMSPT(helper.NetherRedstoneTPS) }}</n-text>
                        <n-text class="yellow">MSPT</n-text>
                        =<n-text class="yellow">原速</n-text>÷<n-text class="blue">{{
                            TpsToCount(helper.NetherRedstoneTPS)
                        }}</n-text>
                    </n-space>
                </n-space>
                <n-space>
                    末地红石
                    <n-input-number step="0.5" v-model:value="helper.TheEndRedstoneTPS">
                        <template #suffix>
                            TPS
                        </template>
                    </n-input-number>
                    <n-space>
                        =<n-text class="blue">{{ TpsToMSPT(helper.TheEndRedstoneTPS) }}</n-text>
                        <n-text class="yellow">MSPT</n-text>
                        =<n-text class="yellow">原速</n-text>÷<n-text class="blue">{{
                            TpsToCount(helper.TheEndRedstoneTPS)
                        }}</n-text>
                    </n-space>
                </n-space>
            </n-space>
        </div>
        <n-h3 prefix="bar">
            <n-divider /> <n-space>
                修改主世界高度
                <n-switch v-model:value="height.ModuleEnabled" />
            </n-space>
        </n-h3>
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
        <n-h3 prefix="bar">
            <n-space>
                关服时自动传送到指定服务器
                <n-switch v-model:value="close.TransferServerOnClose" />
            </n-space>
        </n-h3>
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
        <n-h3 prefix="bar">
            <n-space>
                进服IP归属地显示
                <n-switch v-model:value="location.ModuleEnabled" />
            </n-space>
        </n-h3>
        <div v-if="location.ModuleEnabled">
            <n-space>
                广播消息
                <n-switch v-model:value="location.SendMessage" />
                横幅通知
                <n-switch v-model:value="location.SendToast" />
            </n-space>
        </div>
        <n-h3 prefix="bar">
            <n-space>
                断开连接提示优化
                <n-switch v-model:value="disconnect.ModuleEnabled" />
            </n-space>
        </n-h3>
        <div v-if="disconnect.ModuleEnabled">
            <n-space>
                在控制台显示断开连接的信息
                <n-switch v-model:value="disconnect.ShowDisconnectInConsole" />
            </n-space>
            <n-space>
                强制允许的协议版本
                <n-dynamic-input v-model:value="disconnect.ExtraAllowIncomingProtocolVersions" :on-update-value="() => {
                    disconnect.ExtraAllowIncomingProtocolVersions.splice(0, disconnect.ExtraAllowIncomingProtocolVersions.length, ...disconnect.ExtraAllowIncomingProtocolVersions.map(x => {
                        if (x === '') return 0;
                        return Number((x as string).toString().replace(/[^0-9]/g, ''));
                    }) as never[]);
                }" :on-create="() => 390">
                </n-dynamic-input>
            </n-space>
            <div style="margin-left: 15px;">
                <n-h5 prefix="bar" type="info">未通过XboxLive在线验证：</n-h5>
                <n-input v-model:value="disconnect.NotAuthenticated" />
                <n-h5 prefix="bar" type="info">不在白名单内：</n-h5>
                <n-input v-model:value="disconnect.NotInWhitelist" />
                <n-h5 prefix="bar" type="info">客户端版本过旧：</n-h5>
                <n-input v-model:value="disconnect.OldClient" />
                <n-h5 prefix="bar" type="info">客户端版本过新：</n-h5>
                <n-input v-model:value="disconnect.OldServer" />
                <n-h5 prefix="bar" type="info">版本具体信息：</n-h5>
                <n-input v-model:value="disconnect.DetailedInfo" />
                <n-h5 prefix="bar" type="info">当前账号已在其他设备登录：</n-h5>
                <n-input v-model:value="disconnect.AlreadyLoginIn" />
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
            helper: store.config.Helper,
            height: store.config.HeightEdit,
            close: store.config.CloseHandler_Settings,
            location: store.config.JoinLocation,
            disconnect: store.config.FriendlyDisconnect,
            ui: store.config.UIExtensions,
            attack: store.config.AttackEcho
        };
    },
    methods: {
        TpsToMSPT: function (val: number) {
            return Math.round(1000 / (20 / this.TpsToCount(val)));
        }, TpsToCount: function (val: number) {
            return Math.max(Math.round(40 / val) / 2, .5);
        }
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

.yellow {
    /*yellow*/
    color: #f0ad4e;
}

.green {
    color: lightblue;
}
</style>