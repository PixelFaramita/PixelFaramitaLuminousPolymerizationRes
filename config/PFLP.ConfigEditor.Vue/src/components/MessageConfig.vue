<template>
    <div>
        <div>
            <n-h4 prefix="bar">
                <h2>PopupInfo/悬浮信息</h2>
                <n-space>
                    启用模块
                    <n-switch size="large" v-model:value="popup.ModuleEnabled" />
                </n-space>
                <div v-if="popup.ModuleEnabled">
                    <n-space>
                        切换间隔<n-input-number step="250" v-model:value="popup.RefreshInterval">
                            <template #suffix>
                                毫秒
                            </template>
                        </n-input-number>
                    </n-space>
                    <format-pages :data="popup.Pages" textarea />
                </div>
            </n-h4>
        </div>
        <div>
            <n-h4 prefix="bar">
                <h2>BelowName/玩家名</h2>
                <n-space>
                    启用模块
                    <n-switch size="large" v-model:value="belowname.ModuleEnabled" />
                </n-space>
                <div v-if="belowname.ModuleEnabled">
                    <n-space>
                        切换间隔<n-input-number step="250" v-model:value="belowname.RefreshInterval">
                            <template #suffix>
                                毫秒
                            </template>
                        </n-input-number>
                    </n-space>
                    <format-pages :data="belowname.Pages" textarea />
                </div>
            </n-h4>
        </div>
        <div>
            <n-h4 prefix="bar">
                <h2>Sidebar/侧栏</h2>
 <n-space>
                    启用模块
                    <n-switch size="large" v-model:value="sidebar.ModuleEnabled" />
                </n-space>
                <div v-if="sidebar.ModuleEnabled">
                    <n-space>
                        切换间隔<n-input-number step="250" v-model:value="sidebar.RefreshInterval">
                            <template #suffix>
                                毫秒
                            </template>
                        </n-input-number>
                    </n-space>
                    <format-pages-with-title :data="sidebar.Pages" textarea />
                </div>
            </n-h4>
        </div>
        <div>
            <n-h4 prefix="bar">
                <h2>PlayerList/在线列表</h2>
                <n-space>
                    启用模块
                    <n-switch size="large" v-model:value="playerlist.ModuleEnabled" />
                </n-space>
                <div v-if="playerlist.ModuleEnabled">
                    <n-space>
                        切换间隔<n-input-number step="250" v-model:value="playerlist.RefreshInterval">
                            <template #suffix>
                                毫秒
                            </template>
                        </n-input-number>
                    </n-space>
                    <format-pages-with-title :data="playerlist.Pages" textarea />
                </div>
            </n-h4>
        </div>
        <div>
            <n-h4 prefix="bar">
                <h2>DynamicMotd/动态服务器名</h2>
                <n-space>
                    启用模块
                    <n-switch size="large" v-model:value="motd.ModuleEnabled" />
                </n-space>
                <div v-if="motd.ModuleEnabled">
                    <n-space>
                        切换间隔<n-input-number step="250" v-model:value="motd.RefreshInterval">
                            <template #suffix>
                                毫秒
                            </template>
                        </n-input-number>
                    </n-space>
                    <format-pages :data="motd.Pages" />
                </div>
            </n-h4>
        </div>
        <n-h2 prefix="bar">断开连接提示优化</n-h2>
        <n-space>
            启用模块
            <n-switch size="large" v-model:value="disconnect.ModuleEnabled" />
        </n-space>
        <div v-if="disconnect.ModuleEnabled">
            <n-space>
                在控制台显示断开连接的信息
                <n-switch size="large" v-model:value="disconnect.ShowDisconnectInConsole" />
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
                <n-h5 prefix="bar" type="info">未通过XboxLive在线验证：
                    <n-input v-model:value="disconnect.NotAuthenticated" />
                </n-h5>
                <n-h5 prefix="bar" type="info">不在白名单内：
                    <n-input v-model:value="disconnect.NotInWhitelist" />
                </n-h5>
                <n-h5 prefix="bar" type="info">客户端版本过旧：
                    <n-input v-model:value="disconnect.OldClient" />
                </n-h5>
                <n-h5 prefix="bar" type="info">客户端版本过新：
                    <n-input v-model:value="disconnect.OldServer" />
                </n-h5>
                <n-h5 prefix="bar" type="info">版本具体信息：
                    <n-input v-model:value="disconnect.DetailedInfo" />
                </n-h5>
                <n-h5 prefix="bar" type="info">当前账号已在其他设备登录：
                    <n-input v-model:value="disconnect.AlreadyLoginIn" />
                </n-h5>
            </div>
        </div>

    </div>
</template>
<script lang="ts" setup>
import FormatPages from "../components/FormatPages.vue";
import FormatPagesWithTitle from "../components/FormatPagesWithTitle.vue";
</script>
<script lang="ts">
import { useGlobalStore } from "../stores/global";
const store = useGlobalStore();
export default {
    data() {
        return {
            popup: store.config.Popup,
            belowname: store.config.BelowName,
            playerlist: store.config.PlayerList,
            sidebar: store.config.Sidebar,
            motd: store.config.DynamicMotd,
            disconnect: store.config.FriendlyDisconnect,
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