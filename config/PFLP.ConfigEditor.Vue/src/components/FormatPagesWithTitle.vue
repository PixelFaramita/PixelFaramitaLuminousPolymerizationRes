<template>
    <n-dynamic-input show-sort-button v-model:value="datax" :on-create="onCreate" :on-update-value="onUpdate">
        <template #create-button-default>
            写点啥
        </template>
        <template #default="{ value }: { value: LineItem }">
            <div style="display: flex; align-items: center; width: 100%">
                <div style="display: flex; align-items: center; width: 30%; margin-right: 10px;">
                    <div>
                        标题：<n-input v-model:value="value.Title" type="text" :on-change="onUpdate" />
                        <n-divider style="margin: 4px;" />
                        <div style="float: right;">
                            <n-switch v-model:value="value.multiline" size="large"
                                :on-update-value="value.switchChanged">
                                <template #checked>
                                    多行
                                </template>
                                <template #unchecked>
                                    单框
                                </template>
                            </n-switch>
                        </div>
                        <n-text style="float: right;">内容：</n-text>
                    </div>
                </div>
                <div style="display: flex; align-items: center; width: 70%">
                    <div v-if="textarea" style="display: flex; align-items: center; width: 100%">
                        <n-dynamic-input v-if="value.multiline" v-model:value="value.lines" :on-create="() => ''"
                            :on-update-value="onUpdate">
                        </n-dynamic-input>
                        <n-input v-else v-model:value="value.string" type="textarea" :on-update-value="onUpdate" />
                    </div>
                    <div v-else>
                        <n-input v-model:value="value.string" type="text" :on-change="onUpdate" />
                    </div>
                </div>
            </div>
        </template>
    </n-dynamic-input>
    <n-code :code="JSON.stringify(data, null, 2)" language="json" show-line-numbers />
    <n-divider />
</template>
<script lang="ts">
import { ref } from 'vue'
import { computed } from 'vue'
class LineItem {
    constructor(item: {
        Title: string,
        Lines: string | Array<string>
    }) {
        this.Title = item.Title
        if (typeof item.Lines === 'string') {
            this.string = item.Lines
            this.lines = item.Lines.split('\n')
        } else {
            this.lines = item.Lines
            this.string = item.Lines.join('\n')
        }
    }
    Title: string
    string: string
    multiline: boolean = true
    lines: string[] = []
    switchChanged = () => {
        if (this.multiline) {
            this.lines.splice(0, this.lines.length, ...this.string.split('\n'))
        } else {
            this.string = this.lines.join('\n')
        }
    }
    GetResult: () => {
        Title: string,
        Lines: string | Array<string>
    } = () => {
        const text = (() => {
            if (this.multiline) {
                return this.lines.join('\n')
            }
            return this.string
        })()
        if (text.indexOf('\n') !== -1) {
            return {
                Title: this.Title,
                Lines: text.split('\n')
            }
        }
        return {
            Title: this.Title,
            Lines: text
        }
    }
}
export default {
    props: {
        data: {
            type: Array<{
                Title: string,
                Lines: string | Array<string>
            }>,
            required: true
        },
        textarea: {
            type: Boolean,
            default: false
        }
    },
    data: function () {
        return {
            datax: ref(this.data.map(item => new LineItem(item)))
        }
    },
    methods: {
        onCreate: function () {
            return new LineItem({
                Title: '',
                Lines: ''
            })
        },
        onUpdate: function () {
            this.$props.data.splice(0, this.$props.data.length,
                ...this.datax.map(item => item.GetResult()))
        } 
    }
}
</script>
<style scoped>
.n-input {
    flex-wrap: nowrap;
    word-wrap: unset;
    overflow-wrap: unset;
}
</style>