<template>
  <button class="hydra-button" :class="{[`hydra-button-${type}`]: true}">
    <slot></slot>
  </button>
</template>

<script>
import { oneOf } from "../utils/assist";

export default {
  name: "h-button",
  props: {
    type: {
      validator (type) {
        return oneOf(type, ['default', 'primary', 'dashed', 'text', 'info', 'success',
        'warning', 'error'])
      },
      type: String,
      default: 'default'
    },
    size: {
      validator (size) {
        return oneOf(size, ['small', 'large', 'default'])
      },
      type: String,
      default: 'default'
    }
  }
}
</script>

<style scoped>

</style>
