<template>
  <div>
    <n-h3 prefix="bar">
      WebConfig/网页配置UI
      <n-switch v-model:value="config.ModuleEnabled" size="large" />
    </n-h3>
    <n-h6>无身份验证，请千万不要公开到公网</n-h6>
    <div v-if="config.ModuleEnabled">
      <n-space>
        地址:<n-input
          :status="verifyAddress(config.Hostname)"
          v-model:value="config.Hostname"
        />
      </n-space>
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
    </div>
  </div>
</template>
<style scoped></style>
<script lang="ts">
import { useGlobalStore } from "../stores/global";
const store = useGlobalStore();
export default {
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
      config: store.config.WebConfig,
      //WebUI: {
      //  ModuleEnabled: true,
      //   Hostname: "0.0.0.0",
      //   Port: 8080,
      //   UseSSL: false,
      //   SSLCertificatePath: "",
      //   SSLCertificatePassword: "",
      //   Debug: true,
      //},
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
