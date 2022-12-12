<template>
    <div>
        <n-layout-header class="header">
            <n-space>
                <n-button @click="copy">
                    复制到剪切板
                </n-button>
                <n-button @click="download">
                    下载
                    config.json
                </n-button>
            </n-space>
        </n-layout-header>
        <n-layout content-style="padding: 24px;width: 80vw;">
            <n-code :code="configStr" language="json" show-line-numbers />
        </n-layout>
    </div>
</template>
<script lang="ts">
import { useMessage } from 'naive-ui'
import { useGlobalStore } from "../stores/global";
const store = useGlobalStore();
export default {
    data() {
        return {
            message: useMessage(),
            config: store.config
        };
    },
    computed: {
        configStr: function (): string {
            return JSON.stringify(store.config, null, 4)
        }
    }
    , methods: {
        copy: function () {
            navigator.clipboard.writeText(this.configStr)
            this.message.info('已复制到剪切板')
        },
        download: function () {
            const a = document.createElement('a')
            const file = new Blob([this.configStr], { type: 'text/plain' })
            a.href = URL.createObjectURL(file)
            a.download = 'config.json'
            a.click()
            this.message.info('已下载config.json，请自行复制到配置目录')
        }
    }
}
</script>
<style scoped>
.header {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}
</style>