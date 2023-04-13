<template>
  <div>
    <n-layout-header class="header">
      <n-space>
        <n-button @click="save"> 保存config.json </n-button>
        <n-button @click="reload"> 重载配置文件 </n-button>
        <n-button @click="copy"> 复制到剪切板 </n-button>
        <n-button @click="download"> 下载 config.json </n-button>
      </n-space>
    </n-layout-header>
    <n-layout content-style="padding: 24px;width: 80vw;">
      <n-code :code="configStr" language="json" show-line-numbers />
    </n-layout>
  </div>
</template>
<script lang="ts">
import { useMessage } from "naive-ui";
import { useGlobalStore } from "../stores/global";
import axios from "axios";
const store = useGlobalStore();
export default {
  data() {
    return {
      message: useMessage(),
      config: store.config,
    };
  },
  computed: {
    configStr: function (): string {
      return JSON.stringify(store.config, null, 4);
    },
  },
  methods: {
    save: function () {
      axios
        .post("/api/config/set", store.config, { timeout: 5000 })
        .then((res) => {
          if (res.status == 200) {
            this.message.success("保存成功：" + res.data);
          }
        })
        .catch((err) => {
          axios
            .post("/api/config/set", store.config, { timeout: 5000 })
            .then((res) => {
              if (res.status == 200) {
                this.message.success("保存成功：" + res.data);
              }
            })
            .catch((err) => {
              this.message.error("保存失败：" + err);
            });
        });
    },
    reload: function () {
      axios.post("/api/config/reload").then((res) => {
        if (res.status == 200) {
          this.message.success("重载成功：" + res.data);
        }
      });
    },
    copy: function () {
      navigator.clipboard.writeText(this.configStr);
      this.message.info("已复制到剪切板");
    },
    download: function () {
      const a = document.createElement("a");
      const file = new Blob([this.configStr], { type: "text/plain" });
      a.href = URL.createObjectURL(file);
      a.download = "config.json";
      a.click();
      this.message.info("已下载config.json，请自行复制到配置目录");
    },
  },
};
</script>
<style scoped>
.header {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
</style>
