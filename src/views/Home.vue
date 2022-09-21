<template>
  <div class="homeWrapper">
    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <h1>Dodo-UI</h1>
        <h2>这是译为多多的简洁版 UI 框架</h2>
        <p class="actions">
          <a href="https://github.com">GitHub</a>
          <router-link to="/doc">Let's go</router-link>
        </p>
      </div>
    </div>
    <div class="feature">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-light"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>


<style lang="scss" scoped>
$border-radius: 4px;
$color: rgb(182, 204, 226);
.homeWrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #0e2439;
}
.feature {
  margin: 64px auto;
  width: 400px;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }

  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        color: white;
        grid-area: title;
        font-size: 28px;
      }
      > p {
        color: $color;
        grid-area: text;
      }
    }
  }
}
.topnavAndBanner {
  background: #1f364d;
  clip-path: ellipse(80% 60% at 50% 40%);
  margin-top: 4px;
}
.banner {
  color: #fff;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > h1 {
    font-size: 40px;
  }
  > h2 {
    margin-top: 40px;
    color: $color;
  }
  > .actions {
    margin-top: 40px;
    padding: 8px 0px;
    a {
      color: #fff;
      font-size: 17px;
      font-weight: 600;
      margin: 0 12px;
      background-image: linear-gradient(to right, #e052a0, #f15c41);
      display: inline-block;
      padding: 10px 24px;
      border-radius: $border-radius;
      box-shadow: 20px 20px 20px rgb(0 0 0 / 18%);
      transition: box-shadow 250ms;
      &:hover {
        box-shadow: 16px 16px 1px rgb(0 0 0 / 2%);
        background: linear-gradient(
          97deg,
          rgba(62, 197, 224, 1) 0%,
          rgba(82, 109, 244, 1) 100%
        );
      }
    }
  }
}
</style>