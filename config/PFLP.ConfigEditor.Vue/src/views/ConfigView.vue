<template>
    <div>
        {{ config }}
    </div>
</template>
<script lang="ts">
import { useGlobalStore } from "../stores/global";
const store = useGlobalStore();
export default {
    data() {
        return {
            config: store.configData,
        };
    }
}
</script>
<style>

</style>