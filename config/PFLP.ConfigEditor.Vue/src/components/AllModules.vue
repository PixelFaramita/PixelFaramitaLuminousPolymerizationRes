<template>
    <div>

    </div>
</template>
<script lang="ts">
import { useGlobalStore } from "../stores/global";
const store = useGlobalStore();
export default {
    data() {
        return {
            config: store.config.Land,
        }
    }
}
</script>
<style>
    
</style>