<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref} from "vue";
import { router } from "./router";

export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width <= 500 ? false : true);
    function updateMenuVisible(){
      menuVisible.value = !menuVisible.value
    }
    provide("menuVisible", menuVisible);
    provide("updateMenuVisible",updateMenuVisible)
    router.afterEach(() => {
      if (width <= 500) {
        menuVisible.value = false;
      }
    });

  },
};
</script>

