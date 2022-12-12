<template>
    <div>
        <n-space>
            插件语言：
            <n-select v-if="selected" :show-checkmark="false" :consistent-menu-width="false"
                v-model:value="config.ConsoleLanguage" placeholder="语言" :options="options" :filterable="true"
                :render-label="renderLabel" />
            <n-input v-else v-model:value="config.ConsoleLanguage" placeholder="语言" />
            <n-switch v-model:value="selected" size="large">
                <template #checked>
                    选择
                </template>
                <template #unchecked>
                    编辑
                </template>
            </n-switch>
        </n-space>
        <n-space>
            全局表单每页个数<n-input-number v-model:value="config.FormAPI_CountPerPage" />
        </n-space>
        <n-space>
            全局传送免伤时间<n-input-number step="500" v-model:value="config.Global_AsyncTeleportWaitTime" />毫秒
        </n-space>
    </div>
</template>
<script lang="ts">
import { useGlobalStore } from "../stores/global";
const store = useGlobalStore();
export default {
    data() {
        return {
            config: store.config,
            selected: true
        };
    }, methods: {
        renderLabel(option: { value?: string | number; label?: string }) {
            return option.label;
        }
    }, computed: {
        options() {
            return [
                // "zh_CN" => "中文(简体)",
                { value: "zh_CN", label: "中文(简体)" },
                // "zh_wenyan" => "文言文(简体)",
                { value: "zh_wenyan", label: "文言文(简体)" },
                // "zh_TW" => "中文(繁體)",
                { value: "zh_TW", label: "中文(繁體)" },
                // "en_US" => "English (United States)",
                { value: "en_US", label: "English (United States)" },
                // "en_GB" => "English (United Kingdom)",
                { value: "en_GB", label: "English (United Kingdom)" },
                // "de_DE" => "Deutsch (Deutschland)",
                { value: "de_DE", label: "Deutsch (Deutschland)" },
                // "es_ES" => "Español (España)",
                { value: "es_ES", label: "Español (España)" },
                // "es_MX" => "Español (México)",
                { value: "es_MX", label: "Español (México)" },
                // "fr_FR" => "Français (France)",
                { value: "fr_FR", label: "Français (France)" },
                // "fr_CA" => "Français (Canada)",
                { value: "fr_CA", label: "Français (Canada)" },
                // "it_IT" => "Italiano (Italia)",
                { value: "it_IT", label: "Italiano (Italia)" },
                // "ja_JP" => "日本語 (日本)",
                { value: "ja_JP", label: "日本語 (日本)" },
                // "ko_KR" => "한국어 (대한민국)",
                { value: "ko_KR", label: "한국어 (대한민국)" },
                // "pt_BR" => "Português (Brasil)",
                { value: "pt_BR", label: "Português (Brasil)" },
                // "pt_PT" => "Português (Portugal)",
                { value: "pt_PT", label: "Português (Portugal)" },
                // "ru_RU" => "Русский (Россия)",
                { value: "ru_RU", label: "Русский (Россия)" },
                // "nl_NL" => "Nederlands (Nederland)",
                { value: "nl_NL", label: "Nederlands (Nederland)" },
                // "bg_BG" => "Български (България)",
                { value: "bg_BG", label: "Български (България)" },
                // "cs_CZ" => "Čeština (Česko)",
                { value: "cs_CZ", label: "Čeština (Česko)" },
                // "da_DK" => "Dansk (Danmark)",
                { value: "da_DK", label: "Dansk (Danmark)" },
                // "el_GR" => "Ελληνικά (Ελλάδα)",
                { value: "el_GR", label: "Ελληνικά (Ελλάδα)" },
                // "fi_FI" => "Suomi (Suomi)",
                { value: "fi_FI", label: "Suomi (Suomi)" },
                // "hu_HU" => "Magyar (Magyarország)",
                { value: "hu_HU", label: "Magyar (Magyarország)" },
                // "id_ID" => "Indonesia (Indonesia)",
                { value: "id_ID", label: "Indonesia (Indonesia)" },
                // "nb_NO" => "Norsk bokmål (Norge)",
                { value: "nb_NO", label: "Norsk bokmål (Norge)" },
                // "pl_PL" => "Polski (Polska)",
                { value: "pl_PL", label: "Polski (Polska)" },
                // "sk_SK" => "Slovenčina (Slovensko)",
                { value: "sk_SK", label: "Slovenčina (Slovensko)" },
                // "sv_SE" => "Svenska (Sverige)",
                { value: "sv_SE", label: "Svenska (Sverige)" },
                // "tr_TR" => "Türkçe (Türkiye)",
                { value: "tr_TR", label: "Türkçe (Türkiye)" },
                // "uk_UA" => "Українська (Україна)",
                { value: "uk_UA", label: "Українська (Україна)" },
            ];
        }
    }
}
</script>
<style scoped>
.n-space {
    align-items: center;
    margin-bottom: 10px;
}
</style>