<template>
  <div class="main-top">
    <n-tabs animated :type="tabTypeByDocWidth" default-value="global">
      <n-tab-pane name="global" tab="全局配置">
        <global-config />
      </n-tab-pane>
      <n-tab-pane name="main" tab="基础功能">
        <n-tabs animated :type="tabTypeByDocWidth" default-value="global">
          <n-tab-pane name="shop" tab="经济">
            <econmic-config />
          </n-tab-pane>
          <n-tab-pane name="land" tab="领地">
            <land-config />
          </n-tab-pane>
          <n-tab-pane name="teleport" tab="传送">
            <teleport-config />
          </n-tab-pane>
          <n-tab-pane name="worldlimit" tab="边界">
            <world-limit-config />
          </n-tab-pane>
          <n-tab-pane name="message" tab="信息">
            <message-config />
          </n-tab-pane>
        </n-tabs>
      </n-tab-pane>
      <n-tab-pane name="ext" tab="扩展功能">
        <n-tabs animated :type="tabTypeByDocWidth" default-value="global">
          <n-tab-pane name="pic" tab="地图画">
            <picture-loader-config />
          </n-tab-pane>
          <n-tab-pane name="ws" tab="远控">
            <websocket-config />
          </n-tab-pane>
          <n-tab-pane name="next" tab="杂项">
            <next-config />
          </n-tab-pane>
          <n-tab-pane name="other" tab="其他">
            <other-config />
          </n-tab-pane>
        </n-tabs>
      </n-tab-pane>
      <n-tab-pane name="log" tab="日志备份">
        <n-tabs animated :type="tabTypeByDocWidth" default-value="global">
          <n-tab-pane name="next" tab="行为日志">
            <behavior-log-config />
          </n-tab-pane>
          <n-tab-pane name="backup" tab="存档备份">
            <backup-config />
          </n-tab-pane>
        </n-tabs>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>
<script lang="ts">
import { useGlobalStore } from "../stores/global";
const store = useGlobalStore();
export default {
  data() {
    return {
      config: store.config,
      docWidth: 600,
    };
  },
  mounted: function () {
    this.docWidth = document.documentElement.clientWidth;
    window.addEventListener("resize", this.handleResize);
  },
  unmounted: function () {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize: function () {
      this.docWidth = document.documentElement.clientWidth;
    },
  },
  computed: {
    tabTypeByDocWidth: function () {
      if (this.docWidth < 768) {
        return "segment";
      } else if (this.docWidth >= 768 && this.docWidth < 992) {
        return "bar";
      } else {
        return "line";
      }
    },
  },
};
</script>
<style scoped>
.card-tabs .n-tabs-nav--bar-type {
  padding-left: 4px;
}
.n-tabs {
  margin-top: -10px;
}
div.main-top {
  margin-top: 10px;
}
</style>
