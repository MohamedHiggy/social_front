<template>
    <div class="setting-sec-box shadow-sm">
      <p class="setting-box-title">Update Password</p>
      <p class="setting-box-subtitle">Ensure your account is using a long, random password to stay secure.</p>
      <div class="setting-sec-box-content mt-3">
        <form @submit.prevent="saveInfo" class="user_info">
          <div class="form-row">
            <div class="form-group col-8">
              <label for="Cpassword">Current Password</label>
              <input type="password" class="form-control input-focus" id="Cpassword" aria-describedby="Cpassword" v-model="profileInfo.currentPass">
            </div>
            <div class="form-group col-8">
              <label for="Npassword">New Password</label>
              <input type="password" class="form-control input-focus" id="Npassword" aria-describedby="Npassword" v-model="profileInfo.newPass">
            </div>
            <div class="form-group col-8">
              <label for="Conpassword">Confirm Password</label>
              <input type="password" class="form-control input-focus" id="Conpassword" aria-describedby="Conpassword" v-model="profileInfo.confirmNewPass">
            </div>
          </div>
          <button class="setting-sec-box-btn" type="submit">Save</button>
        </form>
      </div>
    </div>
</template>

<script>
  export default {
  data() {
    return {
      profileInfo: {
        currentPass: null,
        newPass: null,
        confirmNewPass: null,
      }
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
