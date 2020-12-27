---
title: Form
---
# 表单组件


## 表单验证

<br>

<script>
export default {
  mounted() {
    console.log('ss', this.$options.name)
  },
  data() {
    return {
      form: {
        name: '',
        email: ''
      },
      rules: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    doValidate() {
      console.log('doValidate');
      this.$refs.form.validate((valid) => {
        console.log(valid);
      })
    }
  }
}
</script>
<template>
  <h-form ref="form" :model="form" :rules="rules">
    <h-form-item label="用户名" prop="name">
      <h-input v-model="form.name"></h-input>
    </h-form-item>
    <h-form-item label="邮箱" prop="email">
      <h-input v-model="form.email"></h-input>
    </h-form-item>
    <h-button @click.native="doValidate" style="margin-top:20px" type="primary">触发验证表单</h-button>
  </h-form>
</template>

```vue
<script>
export default {
  mounted() {
    console.log('ss', this.$options.name)
  },
  data() {
    return {
      form: {
        name: '',
        email: ''
      },
      rules: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    doValidate() {
      console.log('doValidate')
      this.$refs.form.validate((valid) => {
        console.log(valid)
      })
    }
  }
}
</script>
<template>
  <h-form ref="form" :model="form" :rules="rules">
    <h-form-item label="用户名" prop="name">
      <h-input v-model="form.name"></h-input>
    </h-form-item>
    <h-form-item label="邮箱" prop="email">
      <h-input v-model="form.email"></h-input>
    </h-form-item>
    <h-button @click.native="doValidate" style="margin-top:20px" type="primary">触发验证表单</h-button>
  </h-form>
</template>
```
