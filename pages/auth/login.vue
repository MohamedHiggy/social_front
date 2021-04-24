<template>
  <div class="auth-content">
    <div class="container">
      <div class="auth-content-form">
        <form class="auth-form shadow-sm" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="emailOrUser">Enter your email or username</label>
            <input
              type="text"
              class="form-control input-focus"
              id="emailOrUser"
              v-model="form.login_key"
              placeholder="Enter your email or username"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control input-focus"
              placeholder="Password"
              v-model="form.password"
              id="password"
            />
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
            <nuxt-link :to="{ name: 'auth-forgetPassword' }" class="auth-form-link">Forgot your password?</nuxt-link>
            <button type="submit" class="form-btn">Log in</button>
          </div>
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
        password: ""
      }
    };
  },
  methods: {

      submitForm() {
        console.log(this.form);
      },
  }
};
</script>

<style scoped>
</style>
