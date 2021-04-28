<template>
  <div class="auth-content">
    <div class="container">
      <div class="auth-content-form">

        <form class="auth-form shadow-sm" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="emailOrUser" :class="{ 'label-error': errors.login_key }">Enter your email or username</label>
            <input
              type="text"
              :class="{ 'input-focus-red': errors.login_key }"
              class="form-control input-focus"
              id="emailOrUser"
              v-model="form.login_key"
              placeholder="Enter your email or username"
            />
            <div v-if="errors.login_key" class="error-mesage">
              <span>{{ errors.login_key[0] }}</span>
            </div>
          </div>
          <div class="form-group">
            <label for="password" :class="{ 'label-error': errors.password }">Password</label>
            <input
              type="password"
              :class="{ 'input-focus-red': errors.password }"
              class="form-control input-focus"
              placeholder="Password"
              v-model="form.password"
              id="password"
            />
            <div v-if="errors.password" class="error-mesage">
              <span>{{ errors.password[0] }}</span>
            </div>
          </div>

          <!-- value="✔" -->
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input custom-check-box"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1"
              >Remember me</label
            >
          </div>
          <div class="form-group form-group-bottom">
            <nuxt-link
              :to="{ name: 'auth-forgetPassword' }"
              class="auth-form-link"
              >Forgot your password?</nuxt-link
            >
            <button type="submit" class="form-btn">Log in</button>
          </div>
          <nuxt-link :to="{ name: 'auth-register' }" class="auth-form-link"
            >You don't have an account?
          </nuxt-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        login_key: "",
        password: "",
      },
    };
  },
  middleware: ["redirectIfAuthenticated"],
  methods: {
    async submitForm() {
      try {
        let res = await this.$auth.loginWith("password_grant_custom", {data: this.form})
        if(auth.data.success = true) {
          console.log(res);
        }
      } catch (e) {
        console.log("Error Response", e);
      }
    },
  },
};
</script>

<style scoped>
</style>
