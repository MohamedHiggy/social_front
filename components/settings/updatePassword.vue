<template>
    <div class="setting-sec-box shadow-sm">
      <p class="setting-box-title">Update Password</p>
      <p class="setting-box-subtitle">Ensure your account is using a long, random password to stay secure.</p>
      <div class="setting-sec-box-content mt-3">
        <form @submit.prevent="changePassword" class="user_info">
          <div class="form-row">
            <div class="form-group col-8">
              <label for="Cpassword">Current Password</label>
              <input type="password" class="form-control input-focus" id="Cpassword" aria-describedby="Cpassword" v-model="changePass.current_password">
            </div>
            <div class="form-group col-8">
              <label for="Npassword">New Password</label>
              <input type="password" class="form-control input-focus" id="Npassword" aria-describedby="Npassword" v-model="changePass.new_password">
            </div>
            <div class="form-group col-8">
              <label for="Conpassword">Confirm Password</label>
              <input type="password" class="form-control input-focus" id="Conpassword" aria-describedby="Conpassword" v-model="changePass.new_password_confirmation">
            </div>
          </div>
          <button class="setting-sec-box-btn" type="submit">Save</button>
        </form>
      </div>
    </div>
</template>

<script>
import axios from "axios"
  export default {
  data() {
    return {
      changePass: {
        current_password: null,
        new_password: null,
        new_password_confirmation: null,
      }
    }
  },
  methods: {
    async changePassword() {
    let token = localStorage.getItem("auth._token.password_grant_custom");
     const headers = {
        'Accept': 'application/json',
        'Authorization': token
      }
      await axios.
      post("http://social.test/api/user/chnage-password", this.changePass, { headers })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
    },
  },
  }
</script>

<style lang="scss" scoped>

</style>
