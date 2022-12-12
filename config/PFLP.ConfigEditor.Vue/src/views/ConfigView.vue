  <template>
  <n-tabs animated type="segment" default-value="global">
    <n-tab-pane name="global" tab="全局配置">
        <global-config/>
    </n-tab-pane>
    <n-tab-pane name="tpa" tab="传送">
        b
    </n-tab-pane>
    <n-tab-pane name="web" tab="远程">
        c
    </n-tab-pane>
  </n-tabs>
</template>
<script lang="ts">
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