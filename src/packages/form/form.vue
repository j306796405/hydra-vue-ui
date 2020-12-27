<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "hForm",
  provide() {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  created() {
    /* 初始化的时候缓存form-item */
    this.$on('on-form-item-add', (field) => {
      field && this.fields.push(field)
    })

    /* form-item销毁的时候移除 */
    this.$on('on-form-item-destroy', (field) => {
      this.fields.splice(this.fields.indexOf(field), 1)
    })
  },
  data() {
    return {
      fields: []
    }
  },
  methods: {
    validate(cb) {
      let isValid = true

      this.fields.forEach((field) => {
        field.validate('', errMsg => {
          if (errMsg) {
            isValid = false
          }
        })
      })

      cb && cb(isValid)
    },
    resetFields() {
      this.fields.forEach((field) => {
        field.resetField()
      })
    }
  }
}
</script>
