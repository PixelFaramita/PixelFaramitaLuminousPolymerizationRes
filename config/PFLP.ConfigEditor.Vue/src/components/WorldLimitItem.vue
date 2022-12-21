<template>
    <n-dynamic-input v-model:value="datax" :on-create="onCreate" :on-update-value="onUpdate">
        <template #create-button-default>
            写点啥
        </template>
        <template #default="{ value }: { value: LineItem }">
            <div style="display: flex; align-items: center; width: 100%">
                <n-input-number v-model:value="value.X1" step="100"/>
                <n-input-number v-model:value="value.Z1" step="100"/>
                <span style="margin: 0 20px">——</span>
                <n-input-number v-model:value="value.X2" step="100"/>
                <n-input-number v-model:value="value.Z2" step="100"/>
            </div>
        </template>
    </n-dynamic-input>
    <div v-if="preview">
        <n-code :code="JSON.stringify(data, null, 2)" language="json" show-line-numbers />
        <n-divider />
    </div>
</template>
<script lang="ts"> 
class LineItem {
    X1: number = -1000
    Z1: number = -1000
    X2: number = 1000
    Z2: number = 1000
}
export default {
    props: {
        data: {
            type: Array<LineItem | never>,
            required: true
        },
        preview: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
            datax: this.data.map(item => item as LineItem)
        }
    },
    methods: {
        onCreate: function () {
            return new LineItem()
        },
        onUpdate: function () {
            this.data.splice(0, this.data.length, ...this.datax)
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