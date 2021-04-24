<template>
  <div class="auth-content">
    <div class="container">
      <div class="auth-content-form">
        <form class="auth-form shadow-sm" @submit.prevent="submitForm">
          <p class="forget-hint">
            Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.
          </p>
          <div class="form-group">
            <label for="emailOrUser">Enter your email or username</label>
            <input
              type="text"
              class="form-control input-focus"
              id="emailOrUser"
              v-model="email"
              placeholder="Enter your email"
            />
          </div>
          <div class="form-group form-group-bottom">
            <button type="submit" class="form-btn">Email Password Reset Link</button>
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
        email: ""
    };
  },
  methods: {
    submitForm() {
      console.log(this.email);
    }
  }
};
</script>

<style scoped>
.form-btn {
  padding: 8px 0;
  width: 230px;
}
</style>
