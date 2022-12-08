<template>
    <div>
    </div>
</template>
<script lang="ts">
import { useGlobalStore } from "../stores/global";
import "../components/GlobalConfig";
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