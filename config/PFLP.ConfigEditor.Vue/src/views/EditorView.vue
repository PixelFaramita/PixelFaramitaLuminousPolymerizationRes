<template>
    <div style="position: relative">
        <n-layout-header>
            <n-button style="width: 60vh;left: 20vh;margin-top: 20px;" @click="download">
                下载
                config.json
            </n-button>
        </n-layout-header>
        <n-layout content-style="padding: 24px;width: 100vh;">
            <n-code :code="configStr" language="json" show-line-numbers />
        </n-layout>
    </div>
</template>
<script lang="ts">
import { useGlobalStore } from "../stores/global";
const store = useGlobalStore();
export default {
    data() {
        return {
            config: store.config
        };
    },
    computed: {
        configStr: function (): string {
            return JSON.stringify(store.config, null, 4)
        }
    }
    , methods: {
        download: function () {
            const a = document.createElement('a')
            const file = new Blob([this.configStr], { type: 'text/plain' })
            a.href = URL.createObjectURL(file)
            a.download = 'config.json'
            a.click()
        }
    }
}
</script>
<style scoped>
.n-layout-sider {
    background: rgba(128, 128, 128, 0.3);

}
</style>