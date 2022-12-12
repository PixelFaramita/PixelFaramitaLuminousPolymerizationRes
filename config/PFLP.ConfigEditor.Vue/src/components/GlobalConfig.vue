<template>
    <div>
        <n-cascader v-model:value="value" placeholder="没啥用的值" :options="options" :filterable="true"
            :render-label="renderLabel" />
    </div>
</template>
<script lang="ts">
/*
"ConsoleLanguage": "zh_CN",
"Global.AsyncTeleportWaitTime": 2500,
"FormAPI.CountPerPage": 5,
*/
import { useGlobalStore } from "../stores/global";
const store = useGlobalStore();
export default {
    data() {
        return {
            config: store.config,
        };
    }, methods: {
        renderLabel(option: { value?: string | number; label?: string }) {
            return option.label;
        }
    }, computed: {
        value: {
            get() {
                return this.config.ConsoleLanguage;
            },
            set(value: string) {
                this.config.ConsoleLanguage = value;
            }
        },
        options() {
            return [
                {
                    value: "zh_CN",
                    label: "中文"
                },
                {
                    value: "en_US",
                    label: "English"
                }
            ];
        }
    }
}
</script>
<style>

</style>