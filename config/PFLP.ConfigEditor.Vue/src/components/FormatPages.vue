<template>
    <n-dynamic-input show-sort-button v-model:value="datax" :on-create="onCreate" :on-update-value="onUpdate">
        <template #create-button-default>
            写点啥
        </template>
        <template #default="{ value }">
            <div style="display: flex; align-items: center; width: 100%">
                <n-input v-model:value="value.string" :type="(textarea ? 'textarea' : 'text')" :on-change="onUpdate" />
            </div>
        </template>
    </n-dynamic-input>
    <pre>{{ JSON.stringify(data, null, 2) }}</pre>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
    props: {
        data: {
            type: Array<string | Array<string>>,
            required: true
        },
        textarea: {
            type: Boolean,
            default: false
        }
    },
    data: function () {
        return {
            datax: ref(this.data.map(item => {
                if (typeof item === 'string') {
                    return {
                        string: item
                    }
                }
                return {
                    string: item.join('')
                }
            }))
        }
    },
    methods: {
        onCreate: function () {
            return {
                string: ''
            }
        },
        onUpdate: function () {
            this.$props.data.splice(0, this.$props.data.length, ...this.datax.map(item => {
                if (item.string.includes('\n')) {
                    return item.string.split('\n')
                }
                return item.string
            }))
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