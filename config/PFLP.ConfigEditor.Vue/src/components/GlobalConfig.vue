<template>
    <div>
        <n-input>
            <n-input-group>
                <n-input-addon slot="prepend">ConsoleLanguage</n-input-addon>
                <n-input v-model="config.ConsoleLanguage" />
            </n-input-group>
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
<style lang="">
    
</style>