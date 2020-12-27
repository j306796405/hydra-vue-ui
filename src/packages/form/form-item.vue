<template>
  <div>
    <label v-if="label" :class="{ 'hydra-form-item__label-required': isRequired}">{{ label }}</label>
    <div>
      <slot></slot>
      <div v-if="validateState === 'error'" class="hydra-form-item__error">{{ validateMessage }}</div>
    </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator';
import Emitter from '../../mixins/emitter';

export default {
  name: "hFormItem",
  inject: ['form'],
  mixins: [Emitter],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  data () {
    return {
      isRequired: false,
      validateState: '',
      validateMsg: '',
      initialFieldValue: ''
    }
  },
  computed: {
    fieldValue () {
      return this.form.model[this.prop]
    },
    currentRule () {
      const formRules = this.form.rules

      if (formRules) {
        return formRules[this.prop] || []
      }

      return []
    }
  },
  mounted () {
    if (this.prop) {
      this.dispatch('hForm', 'on-form-item-add', this)
    }

    this.initialFieldValue = this.fieldValue
    this.setRules()
  },
  beforeDestroy() {
    if (this.prop) {
      this.dispatch('hForm', 'on-form-item-destroy', this)
    }
  },
  methods: {
    setRules () {
      this.currentRule.some((rule) => {
        if (rule.required) {
          this.isRequired = rule.required
          return true
        }

        return false
      })

      this.$on('on-form-input', this.onFormItemInput)
      this.$on('on-form-blur', this.onFormItemBlur)
    },
    validate (trigger, cb = () => {}) {
      let desc = {
        [this.prop]: this.currentRule
      }

      const validator = new AsyncValidator(desc)
      let model = {
        [this.prop]: this.fieldValue
      }

      validator.validate(model, { firstFields: true}, err => {
        if (err) {
          this.validateState = 'error'
          this.validateMessage = err[0].message
        } else {
          this.validateState = 'success'
        }

        cb(this.validateMessage)
      })
    },
    onFormItemInput () {
      this.validate('input')
    },
    onFormItemBlur () {
      this.validate('blur')
    },
    resetField () {
      this.validateState = ''
      this.validateMessage = ''

      // 重置为初始值
      this.form.model[this.prop] = this.initialFieldValue;
    }
  }
}
</script>
