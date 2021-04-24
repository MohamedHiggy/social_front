<template>
  <div class="profile-page">
    <div class="container">
      {{this.$store.state.token}}
    </div>
  </div>
</template>

<script>
  export default {
    middleware: 'auth',
  }
</script>

<style lang="scss" scoped>

</style>
