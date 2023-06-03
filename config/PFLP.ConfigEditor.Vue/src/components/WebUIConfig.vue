<template>
  <div>
    <n-h3 prefix="bar">
      WebUI/网页UI
      <n-switch v-model:value="config.ModuleEnabled" size="large" />
    </n-h3>
    <div v-if="config.ModuleEnabled">
      <n-space>
        地址:<n-input
          :status="verifyAddress(config.Hostname)"
          v-model:value="config.Hostname"
        />
      </n-space>
      <n-space> 网站标题:<n-input v-model:value="config.HtmlTitle" /> </n-space>
      <n-space>
        端口 :<n-input-number
          :status="verifyPort(config.Port)"
          v-model:value="config.Port"
        />
      </n-space>
      <n-space>
        使用SSL :
        <n-switch v-model:value="config.UseSSL" size="large" />
      </n-space>
      <div v-if="config.UseSSL">
        <n-space>
          SSL证书路径 :<n-input v-model:value="config.SSLCertificatePath" />
        </n-space>
        <n-space>
          SSL证书密码 :<n-input v-model:value="config.SSLCertificatePassword" />
        </n-space>
      </div>
      <n-space>
        调试日志 :
        <n-switch v-model:value="config.Debug" size="large" />
      </n-space>
      <div>
        <n-h5 prefix="bar">功能设置 : </n-h5>
        <div style="margin-left: 20px">
          <n-space>
            查询日志<n-switch
              v-model:value="config.Functions.LogQuery"
              size="large"
            />
          </n-space>
          <n-space>
            聊天查看<n-switch
              v-model:value="config.Functions.OnlineChat"
              size="large"
            />
          </n-space>
          <n-space>
            保留聊天(即使重启服务器)<n-switch
              v-model:value="config.Functions.PreserveChatHistory"
              size="large"
            />
          </n-space>
          <n-space>
            在线地图<n-switch
              v-model:value="config.Functions.OnlineMap"
              size="large"
            />
          </n-space>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
<script lang="ts">
import { useGlobalStore } from "../stores/global";
const store = useGlobalStore();
export default {
  setup() {
    const onlineMap = computed({
      get: () =>
        store.config.WebUI.Functions.OnlineMap &&
        store.config.MapService.ModuleEnabled,
      set: (value) => {
        store.config.WebUI.Functions.OnlineMap = value;
        store.config.MapService.ModuleEnabled = value;
      },
    });
    return {
      onlineMap,
    };
  },
  methods: {
    verifyAddress: function (text: string): "success" | "error" | "warning" {
      //address
      if (/^\d+\.\d+\.\d+\.\d+$/.test(text)) {
        //match 0.0.0.0
        if (text === "0.0.0.0") {
          return "success";
        }
        return "warning";
      }
      return "error";
    },
    verifyPort: function (port: number): "success" | "error" | "warning" {
      if (port > 0 && port < 65536) {
        return "success";
      }
      return "error";
    },
  },
  data() {
    return {
      config: store.config.WebUI,
    };
  },
};
</script>
<style scoped>
.n-space {
  align-items: center;
  margin-bottom: 10px;
}
</style>
