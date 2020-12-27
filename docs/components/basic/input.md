---
title: Input
---

# 输入框

<script>
export default {
  data() {
    return {
      inputValue: ''
    }
  }
}
</script>
<template>
  <h-input v-model="inputValue"></h-input>
  <div>输入的值是: {{inputValue}}</div>
</template>

```vue
<script>
export default {
  data() {
    return {
      inputValue: ''
    }
  }
}
</script>
<template>
  <h-input v-model="inputValue"></h-input>
  <div>输入的值是: {{inputValue}}</div>
</template>
```
