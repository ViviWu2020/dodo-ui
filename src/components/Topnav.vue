<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-waves"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/">首页</router-link>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <svg
      v-if="toggleMenuButtonVisible"
      class="toggleAside"
      @click="updateMenuVisible"
    >
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>


<script lang="ts">
import { inject } from "vue";
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const updateMenuVisible = inject("updateMenuVisible");
    return { updateMenuVisible };
  },
};
</script>



<style lang="scss" scoped>
.topnav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    > svg {
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      color: rgb(31, 54, 77);
      margin: 0 1em;
      > a {
        margin-left: 8px;
        &:hover {
          color: rgb(182, 204, 226);
        }
      }
    }
  }
  .toggleAside {
    height: 24px;
    width: 24px;
    display: none;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>