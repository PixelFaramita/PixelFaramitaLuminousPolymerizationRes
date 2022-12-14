<template>
    <div>
        Popup
        <format-pages :data="popup.Pages" textarea/>
    </div>
</template>
<script lang="ts" setup>
import FormatPages from "../components/FormatPages.vue";
</script>

<script lang="ts">
import { useGlobalStore } from "../stores/global";
const store = useGlobalStore();
export default {
    data() {
        return {
            popup: store.config.Popup,
            belowname: store.config.BelowName,
            notice: store.config.Notice,
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