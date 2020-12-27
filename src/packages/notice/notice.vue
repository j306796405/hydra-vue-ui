<template>
  <div class="hydra-notice">
    <div class="hydra-notice__main" v-for="notice in notices">
      <div class="hydra-notice__title">{{ notice.title }}</div>
      <div class="hydra-notice__content">{{ notice.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "h-notice",
  data () {
    return {
      notices: []
    }
  },
  methods: {
    add (notice) {
      const timestamp = Date.now()
      const duration = notice.duration || 3000

      notice.id = timestamp
      this.notices.push(notice)

      setTimeout(() => {
        this.remove(timestamp)
      }, duration)
    },
    remove (id) {
      const index = this.notices.findIndex((notice) => notice.id === id)
      this.notices.splice(index, 1)
    }
  }
}
</script>

<style scoped>

</style>
