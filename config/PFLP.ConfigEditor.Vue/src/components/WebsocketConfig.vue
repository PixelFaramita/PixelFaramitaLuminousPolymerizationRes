<template>
    <n-h3 prefix="bar">
        WebsocketAPI远程控制
        <n-switch v-model:value="ws.ModuleEnabled" size="large" />
    </n-h3>
    <div v-if="ws.ModuleEnabled">
        <n-space>
            地址:<n-input :status="verifyWebsocketAddress(ws.Location)" v-model:value="ws.Location" />
        </n-space>
        <n-space>
            密钥:<n-input v-model:value="ws.Token" />
        </n-space>
        <n-space>
            控制台输出Websocket日志<n-switch v-model:value="outputlog" />
        </n-space>
        <n-space>
            控制台输出Websocket调试日志<n-switch v-model:value="ws.EnableDebugOutput" />
        </n-space>
    </div>
</template>
<script lang="ts">
import { useGlobalStore } from "../stores/global";
const store = useGlobalStore();
export default {
    data() {
        return {
            ws: store.config.WebsocketAPI
        };
    },
    methods: {
        verifyWebsocketAddress: function (text: string): 'success' | 'error' | 'warning' {
            if (text.startsWith("ws://") || text.startsWith("wss://")) {
                //match 0.0.0.0
                if (text.includes("0.0.0.0:")) {
                    return "success";
                }
                return "warning";
            }
            return "error";
        }
    }, computed: {
        outputlog: {
            get() {
                return !this.ws.QuietConsole;
            },
            set(value: boolean) {
                this.ws.QuietConsole = !value
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