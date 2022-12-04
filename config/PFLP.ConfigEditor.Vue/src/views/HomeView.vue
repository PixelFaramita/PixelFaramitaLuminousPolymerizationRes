<script setup lang="ts">
import { useMessage } from 'naive-ui'
import { ArchiveOutline as ArchiveIcon } from '@vicons/ionicons5'
import { FundViewOutlined } from '@vicons/antd'
import { ImportOutlined } from '@vicons/antd'
import { MdArrowRoundBack, MdArrowRoundForward } from '@vicons/ionicons4'
</script>
<script lang="ts">
import { ref } from 'vue'
import type { UploadFileInfo } from 'naive-ui'
import type { StepsProps } from 'naive-ui'
import { useGlobalStore } from "../stores/global";
const store = useGlobalStore();
const currentRef = ref<number | null>(0)
export default {
  data() {
    return {
      fileData: '',
      message: useMessage(),
      currentStatus: ref<StepsProps['status']>('process'),
      current: currentRef
    }
  },
  methods: {
    next() {
      this.currentStatus = 'process'
      if (currentRef.value === null) currentRef.value = 1
      else {
        if (currentRef.value == 2) {
          if (this.fileData.length == 0) {
            this.message.error('请先导入配置文件')
            this.currentStatus = 'error'
            return
          }
          currentRef.value++
        }
        else if (currentRef.value >= 3) {
          this.message.info('即将跳转到配置页面')
          currentRef.value = null
          store.config = JSON.parse(this.fileData)
          this.$router.push('/config')
        }
        else currentRef.value++
      }
    },
    prev() {
      if (currentRef.value === 0) currentRef.value = null
      else if (currentRef.value === null) currentRef.value = 4
      else currentRef.value--
    },
    async beforeUpload(data: {
      file: UploadFileInfo
      fileList: UploadFileInfo[]
    }) {
      if (data.file.file?.type !== 'application/json') {
        this.message.error('只能上传json格式的文件，请重新上传')
      } else {
        this.message.info('导入成功！')
        //read the file 
        const file = data.file.file
        const reader = new FileReader()
        reader.readAsText(file)
        reader.onload = () => {
          this.fileData = reader.result as string
          currentRef.value = 2
        }
        return false
      }
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
    <n-space vertical>
      <n-steps :current="(current as number)" :status="currentStatus">
        <n-step title="导入配置" description="选择一个方式导入文件">
          <template #icon>
            <ImportOutlined />
          </template>
        </n-step>
        <n-step title="预览配置" description="查看导入的配置文件（JSON）">
          <template #icon>
            <n-icon>
              <FundViewOutlined />
            </n-icon>
          </template>
        </n-step>
        <n-step title="开始编辑" description="前往编辑器" />
      </n-steps>
      <!-- put in center -->
      <n-space style="justify-content: center;">
        <n-button-group>
          <n-button @click="prev" v-if="(current !== null && current > 0)">
            {{ current === 2 ? '重新导入' : '上一步' }}
            <template #icon>
              <n-icon>
                <md-arrow-round-back />
              </n-icon>
            </template>
          </n-button>
          <n-button @click="next">
            <template #icon>
              <n-icon>
                <md-arrow-round-forward />
              </n-icon>
            </template>
            {{ current === 0 ? '开始' : current === 3 ? '开始编辑' : '下一步' }}
          </n-button>
        </n-button-group>
      </n-space>
    </n-space>
    <ul v-if="(current === 1)">
      <n-h3 prefix="bar" style="margin-top: 10px;">
        本地文件导入：
      </n-h3>
      <n-upload :max="5" @before-upload="beforeUpload">
        <n-upload-dragger>
          <div style="margin-bottom: 0">
            <n-icon size="48" :depth="3" style="margin: 0 auto;">
              <archive-icon />
            </n-icon>
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
    <ul v-if="(current === 2)">
      <n-code :code="fileData" language="json" show-line-numbers />
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

.nhc {
  text-align: center;
}
</style>
