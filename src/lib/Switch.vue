<template>
  <button
    class="dodo-switch"
    @click="toggle"
    :class="{ 'dodo-checked': value }"
  >
    <span></span>
  </button>
</template>

<script>
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};
</script>




<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.dodo-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: grey;
  border-radius: $h/2;
  position: relative;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2/2;
    transition: left 0.5s;
  }
  &.dodo-checked {
    background: blue;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus {
    outline: none;
  }
}
</style>