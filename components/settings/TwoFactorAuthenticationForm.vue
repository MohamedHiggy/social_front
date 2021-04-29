<template>
    <div class="setting-sec-box shadow-sm">
      <p class="setting-box-title">Two Factor Authentication</p>
      <p class="setting-box-subtitle">Add additional security to your account using two factor authentication.</p>
      <div class="setting-sec-box-content mt-3">
        <form @submit.prevent="saveInfo" class="user_info">
          <p class="setting-box-text">When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application.</p>
          <button class="setting-sec-box-btn" type="submit">Enable</button>
        </form>
      </div>
    </div>
</template>

<script>
  export default {
  data() {
    return {
    }
  },
  methods: {
    saveInfo() {
      console.log("saveInfo");
    },
  },
  }
</script>

<style lang="scss" scoped>

</style>
