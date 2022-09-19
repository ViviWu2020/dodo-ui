<template>
  <div class="dodo-tabs">
    <div class="dodo-tabs-nav" ref="container">
      <div
        class="dodo-tabs-nav-item"
        :class="{ selected: t === selected }"
        v-for="(t, index) in titles"
        :key="index"
        @click="select(t)"
        :ref="
          (el) => {
            if (t === selected) selectedItem = el;
          }
        "
      >
        {{ t }}
      </div>
      <div class="dodo-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="dodo-tabs-content">
      <component :is="current" :key="current.props.title" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, onMounted, watchEffect } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: String,
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const x = () => {
      const { width } = selectedItem.value.getBoundingClientRect();
      indicator.value.style.width = width + "px";
      const { left: left1 } = container.value.getBoundingClientRect();
      const { left: left2 } = selectedItem.value.getBoundingClientRect();
      indicator.value.style.left = left2 - left1 + "px";
    };

    onMounted(() => {
      watchEffect(x);
    });
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 子标签必须是 Tab");
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const current = computed(() => {
      return defaults.find((tag) => tag.props.title === props.selected);
    });
    const select = (title: string) => {
      context.emit("update:selected", title);
    };
    return {
      defaults,
      titles,
      select,
      selectedItem,
      indicator,
      container,
      current,
    };
  },
};
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.dodo-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>