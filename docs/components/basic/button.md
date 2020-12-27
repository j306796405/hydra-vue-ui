---
title: Button
---

# 按钮
<script>
export default {
  data() {
    return {
      button: '默认'
    }
  }
}
</script>

<template>
  <h-button>{{button}}</h-button>
  <h-button type="primary">主色</h-button>
  <h-button type="success">成功</h-button>
  <h-button type="info">提示</h-button>
</template>


### 使用
```html
<h-button>默认</h-button>
<h-button type="primary">主色</h-button>
<h-button type="success">成功</h-button>
<h-button type="info">提示</h-button>
```
