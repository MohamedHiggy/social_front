<template>
   <nav class="navbar navbar-expand-lg navbar-light shadow bg-light">
        <nuxt-link to="/" class="navbar-brand">Social</nuxt-link>
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
            <li class="nav-item">
              <nuxt-link to="#"  class="nav-link">Notifications</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="#"  class="nav-link">Profile</nuxt-link>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <nuxt-link to="/auth/login" class="nav-link">signIn</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/auth/register" class="nav-link">SignUp</nuxt-link>
            </li>
            <li class="nav-item">
              <button class="btn btn-sm btn-outline-secondary" type="button">Log out</button>
            </li>
          </ul>
        </div>
    </nav>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
</style>
