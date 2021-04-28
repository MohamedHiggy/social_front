<template>
  <div class="auth-content">
    <div class="container">
      <div class="auth-content-form">
        <form class="auth-form shadow-sm" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name" :class="{ 'label-error': regErrors.name }"
              >Name</label
            >
            <input
              type="text"
              :class="{ 'input-focus-red': regErrors.name }"
              class="form-control input-focus"
              id="name"
              v-model="form.name"
              placeholder="Enter your username"
            />
            <div v-if="regErrors.name" class="error-mesage">
              <span>{{ regErrors.name[0] }}</span>
            </div>
          </div>

          <div class="form-group">
            <label for="email" :class="{ 'label-error': regErrors.email }"
              >Email address</label
            >
            <input
              :class="{ 'input-focus-red': regErrors.email }"
              type="text"
              class="form-control input-focus"
              id="email"
              v-model="form.email"
              placeholder="Enter your email "
            />
            <div v-if="regErrors.email" class="error-mesage">
              <span>{{ regErrors.email[0] }}</span>
            </div>
          </div>

          <div class="form-group">
            <label
              for="password"
              :class="{ 'label-error': regErrors.password }"
              >Password</label
            >
            <input
              :class="{ 'input-focus-red': regErrors.password }"
              type="password"
              class="form-control input-focus"
              placeholder="Password"
              v-model="form.password"
              id="password"
            />

            <div v-if="regErrors.password" class="error-mesage">
              <span>{{ regErrors.password[0] }}</span>
            </div>
          </div>

          <div class="form-group">
            <label
              for="password2"
              :class="{ 'label-error': regErrors.password_confirmation }"
              >Confirm Password</label
            >
            <input
              :class="{ 'input-focus-red': regErrors.password_confirmation }"
              type="password"
              class="form-control input-focus"
              placeholder="Password"
              v-model="form.password_confirmation"
              id="password2"
            />

            <div v-if="regErrors.password_confirmation" class="error-mesage">
              <span>{{ regErrors.password_confirmation[0] }}</span>
            </div>
          </div>

          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input custom-check-box"
              id="exampleCheck1"
              v-model="form.terms"
            />
            <label
              :class="{ 'label-error': regErrors.terms }"
              class="form-check-label"
              for="exampleCheck1"
              >I agree to the Terms of Service and Privacy Policy</label
            >
          </div>

          <div class="mt-2 form-group form-group-bottom">
            <nuxt-link :to="{ name: 'auth-login' }" class="auth-form-link"
              >Already registered?</nuxt-link
            >
            <button type="submit" class="form-btn">register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  middleware: ["redirectIfAuthenticated"],
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        terms: null,
      },
      regErrors: {}
    };
  },
  methods: {
    async submitForm() {
        await axios.post("http://social.test/api/register", this.form)
        .then(response => console.log(response.data))
        .catch(error => {
          this.regErrors = error.response.data.errors
        })
    },
  },
};
</script>

<style scoped>
</style>
