<template>
    <div>
        233
        <n-input>
        </n-input>
    </div>
</template>
<script lang="ts">
/*
"ConsoleLanguage": "zh_CN",
"Global.AsyncTeleportWaitTime": 2500,
"FormAPI.CountPerPage": 5,
*/
import { useGlobalStore } from "../stores/global";
const store = useGlobalStore();
export default {
    data() {
        return {
            config: store.config,
        };
    }
}
</script>
<style>
    
</style>