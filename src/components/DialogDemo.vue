<template>
  <div>DialogDemo</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog
    v-model:visible="bool"
    :closeOnClickOverlay="false"
    :ok="f1"
    :cancel="f2"
  ></Dialog>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const bool = ref(false);
    const toggle = () => {
      bool.value = !bool.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {};
    return { bool, toggle, f1, f2 };
  },
};
</script>