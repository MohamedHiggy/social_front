<template>
    <div class="setting-sec-box shadow-sm">
      <p class="setting-box-title">Delete Account</p>
      <p class="setting-box-subtitle">Permanently delete your account.</p>
      <div class="setting-sec-box-content mt-3">
        <form @submit.prevent="saveInfo" class="user_info">
          <p class="setting-box-text">Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.</p>
          <button class="setting-sec-box-delete-btn" type="submit">Delete Account</button>
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
