<template>
  <div>
    <n-h3 prefix="bar">
      <n-space>
        启用 Frp Client 模块<n-switch
          v-model:value="frpc.ModuleEnabled"
          size="large"
        />
      </n-space>
    </n-h3>
    <n-text type="info"> 实现在内网穿透的情况下获取玩家的真实IP <br /> </n-text>
    <n-text type="info"
      >|
      <a href="https://docs.mcpf.live/usage/frpc.html" target="_blank">
        文档和开源实现原理 </a
      >|
      <a href="https://github.com/fatedier/frp" target="_blank">
        Frp 项目仓库 </a
      >|
      <br />
    </n-text>
    <div v-if="frpc.ModuleEnabled">
      <n-space>
        覆盖LL的获取IP接口(开启方可让所有使用了LL接口的插件获取到真实IP)<n-switch
          v-model:value="frpc.OverrideLLGetIp"
          size="large"
        />
      </n-space>
      <n-space>
        Frp启动重试次数（如遇到端口冲突会尝试重启Frp）<n-input-number
          v-model:value="frpc.RestartRetryTime"
          size="large"
        />
      </n-space>
      <n-space>
        frp配置文件（可多个）：
        <n-dynamic-input
          v-model:value="frpc.FrpConfigs"
          :on-update-value="
            () => {
              // frpc.ExtraAllowIncomingProtocolVersions.splice(0, disconnect.ExtraAllowIncomingProtocolVersions.length, ...disconnect.ExtraAllowIncomingProtocolVersions.map(x => {
              //     if (x === '') return 0;
              //     return Number((x as string).toString().replace(/[^0-9]/g, ''));
              // }) as never[]);
            }
          "
          :on-create="() => '~\\frpc.ini'"
          #="{ index, value }"
        >
          <n-space>
            <n-switch
              size="large"
              v-model:value="toggleTemp[index]"
              :on-change="
                () => {
                  const defaultC = `[common]
server_addr = frp.example.com
server_port = 7000

[mc19132]
type = udp
local_ip = 127.0.0.1
local_port = 19132
remote_port = 11451
`;
                  const defaultP = '~\\frpc.ini';
                  if (toggleTemp[index]) {
                    if (frpc.FrpConfigs[index] == defaultP)
                      frpc.FrpConfigs[index] = defaultC;
                  } else {
                    if (frpc.FrpConfigs[index] == defaultC)
                      frpc.FrpConfigs[index] = defaultP;
                  }
                }
              "
            >
              <template #checked>内容</template>
              <template #unchecked>路径</template>
            </n-switch>
            <n-input
              v-if="toggleTemp[index]"
              type="textarea"
              size="large"
              v-model:value="frpc.FrpConfigs[index]"
              placeholder="文件内容"
            />
            <n-input
              v-else
              v-model:value="frpc.FrpConfigs[index]"
              placeholder="文件路径"
            />
          </n-space>
        </n-dynamic-input>
      </n-space>
    </div>
  </div>
</template>
<script lang="ts">
import { useGlobalStore } from "../stores/global";
const store = useGlobalStore();
export default {
  data() {
    return {
      frpc: store.config.FrpClient,
      toggleTemp: [],
    };
  },
};
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
