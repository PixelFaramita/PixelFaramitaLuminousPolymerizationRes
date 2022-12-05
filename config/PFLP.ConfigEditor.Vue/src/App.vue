<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { darkTheme } from 'naive-ui'
import hljs from 'highlight.js/lib/core'
import json from 'highlight.js/lib/languages/json'
hljs.registerLanguage('json', json)
</script>
<script lang="ts">
export default {
  data() {
    return {
    }
  },
  computed: {
    isHome: function (): boolean {
      return this.$route.name == 'home' || this.$route.name == 'about'
    },
    isEditor: function (): boolean {
      return this.$route.name == 'config' || this.$route.name == 'editor'
    }
  }
}
</script>
<template>
  <div class="main">
    <nav v-if="isHome">
      <RouterLink to="/">主页</RouterLink>
      <RouterLink to="/about">关于</RouterLink>
    </nav>
    <nav v-else-if="isEditor">
      <RouterLink to="/config">编辑/修改</RouterLink>
      <RouterLink to="/editor">预览/下载</RouterLink>
    </nav>
    <n-config-provider :theme="darkTheme" :hljs="hljs">
      <n-message-provider>
        <RouterView />
      </n-message-provider>
    </n-config-provider>
  </div>
</template>

<style scoped>
div.main {
  margin-top: 10px;
  min-height: 100vh;
  min-width: 100vh;
  align-items: center;
  vertical-align: top;
  justify-content: center;
}

nav {
  font-size: large;
  /* align to center */
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  border-bottom: 4px solid var(--color-border);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  padding: 0 1rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  nav {
    text-align: left;
    justify-self: center;
  }
}
</style>
