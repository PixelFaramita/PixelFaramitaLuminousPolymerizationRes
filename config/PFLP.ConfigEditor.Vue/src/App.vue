<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { darkTheme } from "naive-ui";
import hljs from "highlight.js/lib/core";
import json from "highlight.js/lib/languages/json";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import cpp from "highlight.js/lib/languages/cpp";
import csharp from "highlight.js/lib/languages/csharp";
import vbnet from "highlight.js/lib/languages/vbnet";
import fsharp from "highlight.js/lib/languages/fsharp";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("cpp", cpp);
hljs.registerLanguage("csharp", csharp);
hljs.registerLanguage("vb.net", vbnet);
hljs.registerLanguage("F#", fsharp);
hljs.registerLanguage("json", json);
</script>
<script lang="ts">
import axios from "axios";
import { useGlobalStore } from "./stores/global";
import router from "./router";

export default {
  data() {
    return {
      isFormRemote: false,
    };
  },
  computed: {
    isHome: function (): boolean {
      return (
        this.$route.name == "home" ||
        this.$route.name == "about" ||
        this.$route.name == "document" ||
        this.$route.name == "install" ||
        this.$route.name == "install_pannel"
      );
    },
    isEditor: function (): boolean {
      return (
        this.$route.name == "config" ||
        this.$route.name == "editor" ||
        this.$route.name == "save"
      );
    },
  },
  mounted: function () {
    axios.post("/api/config/get").then((res) => {
      if (res.status == 200) {
        this.isFormRemote = true;
        const store = useGlobalStore();
        store.config = res.data;
        store.isFormRemote = true;
      }
      router.push({ name: "config" });
    });
  },
};
</script>
<template>
  <div class="mainView">
    <nav v-if="isHome">
      <RouterLink to="/">配置工具</RouterLink>
      <RouterLink to="/document">接口文档</RouterLink>
      <RouterLink to="/install">安装教程</RouterLink>
      <RouterLink to="/about">关于</RouterLink>
    </nav>
    <nav v-else-if="isEditor">
      <RouterLink to="/config">编辑/修改</RouterLink>
      <RouterLink to="/save" v-if="isFormRemote">保存/重载</RouterLink>
      <RouterLink to="/editor" v-else>预览/下载</RouterLink>
    </nav>
    <n-config-provider :theme="darkTheme" :hljs="hljs">
      <n-message-provider>
        <RouterView />
      </n-message-provider>
    </n-config-provider>
  </div>
</template>
<style scoped>
nav {
  font-size: large;
  /* align to top center */
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  border-bottom: 4px solid var(--color-border);
}

nav a {
  padding: 0 1rem;
}

.mainView {
  margin: auto;
}

</style>