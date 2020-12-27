<template>
  <div class="hydra-input-container">
    <input class="hydra-input" type="text"
           :class="inputClass"
           @blur="blurEvent"
           @input="inputEvent"
    >
  </div>
</template>

<script>
import { oneOf } from "../utils/assist";
import Emitter from "../../mixins/emitter";

export default {
  name: "hInput",
  mixins: [Emitter],
  props: {
    value: {
      type: String,
      default: ''
    },
    size: {
      validator (value) {
        return oneOf(value, ['small', 'large', 'default']);
      },
      default: 'default'
    }
  },
  computed: {
    inputClass() {
      const prefix = 'hydra-input'
      return {
        [`${prefix}__size-${this.size}`]: true
      }
    }
  },
  methods: {
    inputEvent (event) {
      const { value } = event.target
      this.$emit('input', value)
      this.dispatch('hFormItem', 'on-form-input', value)
    },
    blurEvent (event) {
      const { value } = event.target
      this.dispatch('hFormItem', 'on-form-blur', value)
    }
  }
}
</script>

<style scoped>

</style>
