<template>
  <div>
    导航栏 <router-link to="/">| Dodo</router-link>|
    <router-link to="/xxx">| Dodo2</router-link>
  </div>
  <hr />
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
