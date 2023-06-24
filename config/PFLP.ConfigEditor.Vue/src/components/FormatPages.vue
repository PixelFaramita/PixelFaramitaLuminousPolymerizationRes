<template>
  <n-dynamic-input
    show-sort-button
    v-model:value="datax"
    :on-create="onCreate"
    :on-update-value="onUpdate"
  >
    <template #create-button-default> 写点啥 </template>
    <template #default="{ value }: { value: LineItem }">
      <div class="fullwidth">
        <div v-if="textarea" class="fullwidth">
          <n-switch
            v-model:value="value.multiline"
            size="large"
            :on-update-value="value.switchChanged"
          >
            <template #checked> 多行 </template>
            <template #unchecked> 单框 </template>
          </n-switch>
          <n-dynamic-input
            v-if="value.multiline"
            v-model:value="value.lines"
            :on-create="() => ''"
            :on-update-value="onUpdate"
          >
          </n-dynamic-input>
          <n-input
            v-else
            v-model:value="value.string"
            type="textarea"
            :on-update-value="onUpdate"
          />
        </div>
        <div v-else class="fullwidth">
          <n-input
            v-model:value="value.string"
            type="text"
            :on-change="onUpdate"
          />
        </div>
      </div>
    </template>
  </n-dynamic-input>
  <n-code
    :code="JSON.stringify(data, null, 2)"
    language="json"
    show-line-numbers
  />
  <n-divider />
</template>
<script lang="ts">
import { ref } from "vue";
class LineItem {
  constructor(string: string) {
    this.string = string;
    this.lines = string.split("\n");
  }
  string: string;
  multiline: boolean = true;
  lines: string[] = [];
  switchChanged = () => {
    if (this.multiline) {
      this.lines.splice(0, this.lines.length, ...this.string.split("\n"));
    } else {
      this.string = this.lines.join("\n");
    }
  };
  GetResult = (singleLine: boolean) => {
    if (singleLine) {
      return this.string;
    }
    if (this.multiline) {
      return this.lines.join("\n");
    } else {
      return this.string;
    }
  };
}
export default {
  props: {
    data: {
      type: Array<string | Array<string>>,
      required: true,
    },
    textarea: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    return {
      datax: ref(
        this.data.map((item) => {
          if (typeof item === "string") {
            return new LineItem(item);
          }
          return new LineItem(item.join(""));
        })
      ),
    };
  },
  methods: {
    onCreate: function () {
      return new LineItem("");
    },
    onUpdate: function () {
      this.$props.data.splice(
        0,
        this.$props.data.length,
        ...this.datax.map((item) => {
          let result = item.GetResult(!this.textarea);
          if (result.includes("\n")) {
            return result.split("\n");
          }
          return result;
        })
      );
    },
  },
};
</script>
<style scoped>
.n-input {
  flex-wrap: nowrap;
  word-wrap: unset;
  overflow-wrap: unset;
}

div.fullwidth {
  width: 100%;
  display: flex;
  align-items: center;
}
</style>
