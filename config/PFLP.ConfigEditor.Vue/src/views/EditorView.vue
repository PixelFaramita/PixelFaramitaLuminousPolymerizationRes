<template>
    <div>
        <n-layout-header>
            <n-button @click="download" class="downloadbtn">
                下载
                config.json
            </n-button>
        </n-layout-header>
        <n-layout content-style="padding: 24px;width: 80vw;">
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
.downloadbtn{
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 10px;
    width: 60%;
}
</style>