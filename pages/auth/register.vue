<template>
  <div class="auth-content">
    <div class="container">
      <div class="auth-content-form">
        <form class="auth-form shadow-sm" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name" :class="{ 'label-error': validation.name }">Name</label>
            <input
              type="text"
              :class="{ 'input-focus-red': validation.name }"
              class="form-control input-focus"
              id="name"
              v-model="form.name"
              placeholder="Enter your username"
            />
            <div v-if="validation.name" class="error-mesage">
              <span>{{validation.name[0]}}</span>
            </div>
          </div>

          <div class="form-group">
            <label for="email" :class="{ 'label-error': validation.email }">Email address</label>
            <input
              :class="{ 'input-focus-red': validation.email }"
              type="text"
              class="form-control input-focus"
              id="email"
              v-model="form.email"
              placeholder="Enter your email "
            />
            <div v-if="validation.email" class="error-mesage">
              <span>{{validation.email[0]}}</span>
            </div>
          </div>

          <div class="form-group">
            <label for="password" :class="{ 'label-error': validation.password }">Password</label>
            <input
              :class="{ 'input-focus-red': validation.password }"
              type="password"
              class="form-control input-focus"
              placeholder="Password"
              v-model="form.password"
              id="password"
            />

            <div v-if="validation.password" class="error-mesage">
              <span>{{validation.password[0]}}</span>
            </div>
          </div>

          <div class="form-group">
            <label for="password2" :class="{ 'label-error': validation.password_confirmation }">Confirm Password</label>
            <input
              :class="{ 'input-focus-red': validation.password_confirmation }"
              type="password"
              class="form-control input-focus"
              placeholder="Password"
              v-model="form.password_confirmation"
              id="password2"
            />

            <div v-if="validation.password_confirmation" class="error-mesage">
              <span>{{validation.password_confirmation[0]}}</span>
            </div>
          </div>

          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input custom-check-box"
              id="exampleCheck1"
              v-model="form.terms"
            />
            <label :class="{ 'label-error': validation.terms }" class="form-check-label" for="exampleCheck1">I agree to the Terms of Service and Privacy Policy</label>
          </div>

          <div class="mt-2 form-group form-group-bottom">
            <nuxt-link :to="{ name: 'auth-login' }" class="auth-form-link">Already registered?</nuxt-link>
            <button type="submit" class="form-btn">register</button>
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
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        terms: null
      },
      validation: {}
    }
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
