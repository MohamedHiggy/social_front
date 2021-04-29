<template>
   <nav class="navbar navbar-expand-lg navbar-light shadow-sm bg-light" id="navbar_top">
        <p class="navbar-brand">Social</p>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <nuxt-link to="/" exact class="nav-link">Home</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="#"  class="nav-link">Search</nuxt-link>
            </li>
            <template v-if="loggedIn">
              <li class="nav-item">
                <nuxt-link to="#"  class="nav-link">Notifications</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link to="/profile"  class="nav-link">Profile</nuxt-link>
              </li>
            </template>
          </ul>
          <ul class="navbar-nav">
            <template v-if="!loggedIn">
              <li class="nav-item">
                <nuxt-link to="/auth/login" class="nav-link">signIn</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link to="/auth/register" class="nav-link">SignUp</nuxt-link>
              </li>
            </template>
            <template v-if="loggedIn">
              <button class="btn btn-sm btn-outline-secondary" type="button"  @click="logout">Log out</button>
            </template>
          </ul>
        </div>
    </nav>
</template>

<script>
  import {mapGetters} from "vuex"
  export default {
  computed: {
    ...mapGetters({
      loggedIn: 'loggedIn',
    })
  },
  methods: {
    logout() {
      this.$auth.logout();
    },
  },
  }
</script>

<style lang="scss" scoped>
</style>
