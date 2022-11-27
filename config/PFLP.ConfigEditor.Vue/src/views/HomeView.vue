<script setup lang="ts">
import { useMessage } from 'naive-ui'
var message = useMessage()
</script>
<script lang="ts">
import type { UploadFileInfo } from 'naive-ui'
export default {
  data() {
    return {
      filePath: ''
    }
  },
  methods: {
    async beforeUpload(data: {
      file: UploadFileInfo
      fileList: UploadFileInfo[]
    }) {
      if (data.file.file?.type !== 'application/json') {
        message.error('只能上传json格式的文件，请重新上传')
        return false
      }
      return true
    },
    dealfilechange() {


    },
    selectLocalFile() {

    },
    importLocalFile() {
    }
  }
}

</script>
<template>
  <main>
    <n-h4 class="nhc">
      编辑PixelFaramitaLuminousPolymerization配置文件</n-h4>
    <n-h3 class="nhc">
      从这里开始
    </n-h3>
    <ul>
      <n-h3 prefix="bar">
        本地文件导入：
      </n-h3>
      <n-upload @on-select="importLocalFile" :max="5" @before-upload="beforeUpload">
        <n-upload-dragger>
          <div style="width: 48px;margin: 0 auto;">
            <i role="img" class="n-icon n-icon--depth n-icon--color-transition"
              style="--n-bezier:cubic-bezier(0.4, 0, 0.2, 1); --n-color:#fff; --n-opacity:0.52; font-size: 48px;"><svg
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
                <path d="M80 152v256a40.12 40.12 0 0 0 40 40h272a40.12 40.12 0 0 0 40-40V152" fill="none"
                  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>
                <rect x="48" y="64" width="416" height="80" rx="28" ry="28" fill="none" stroke="currentColor"
                  stroke-linejoin="round" stroke-width="32"></rect>
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
                  d="M320 304l-64 64l-64-64"></path>
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
                  d="M256 345.89V224"></path>
              </svg></i>
          </div>
          <n-text style="font-size: 16px">
            点击或者拖动config.json配置文件到该区域来上传
          </n-text>
          <n-p depth="3" style="margin: 0px 0 0 0">
            配置文件位于[服务端]\plugins\PixelFaramitaLuminousPolymerization\config.json
          </n-p>
        </n-upload-dragger>
      </n-upload>
      <n-h3 prefix="bar">
        连接远程服务器：
      </n-h3>
      <h5>（需要开启PFLP插件的WebsocketAPI功能）</h5>
    </ul>
  </main>
</template>
<style>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

/*align title to center*/
.nhc {
  text-align: center;
}
</style>
