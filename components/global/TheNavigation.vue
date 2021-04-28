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
    handleScroll () {
      const classesToAdd = ['fixed-top', 'shadow'];
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add(...classesToAdd);
        // add padding top to show content behind navbar
        const navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove(...classesToAdd);
         // remove padding top from body
        document.body.style.paddingTop = '0';
      }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  }
</script>

<style lang="scss" scoped>
</style>
