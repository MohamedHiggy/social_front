<template>
  <div class="left-side">
  <div class="social-main-links">
    <ul class="social-list-style">
      <li class="list">
        <nuxt-link to="/profile" exact class="list-a">
        <i class="fa fa-user"></i>
          Profile
        </nuxt-link>
      </li>
      <li class="list">
        <nuxt-link to="/search" class="list-a">
        <i class="fa fa-search"></i>
          Search
        </nuxt-link>
      </li>
      <li class="list">
        <nuxt-link to="/people" class="list-a">
          <i class="fa fa-user-friends"></i>
          People
        </nuxt-link>
      </li>
      <li class="list">
        <nuxt-link to="/notifications" class="list-a">
          <i class="fa fa-bell"></i>
          Notifications
        </nuxt-link>
      </li>
      <li class="list">
        <nuxt-link to="/settings" class="list-a">
          <i class="fa fa-cog"></i>
          settings
        </nuxt-link>
      </li>
    </ul>
  </div>
  <div class="tags-sec">
    <p class="tags-sec-title">Popular Tags</p>
    <ul class="list-style">
      <li class="list">
        <a href="#" class="tag-text">
          # <span class="text">Design</span>
        </a>
      </li>
      <li class="list">
        <a href="#" class="tag-text">
          # <span class="text">Laravel</span>
        </a>
      </li>
      <li class="list">
        <a href="#" class="tag-text">
          # <span class="text">Vue</span>
        </a>
      </li>
      <li class="list">
        <a href="#" class="tag-text">
          # <span class="text">Nuxt</span>
        </a>
      </li>
      <li class="list">
        <a href="#" class="tag-text">
          # <span class="text">ML</span>
        </a>
      </li>
      <li class="list">
        <a href="#" class="tag-text">
          # <span class="text">APIS</span>
        </a>
      </li>
      <li class="list">
        <a href="#" class="tag-text">
          # <span class="text">HTML</span>
        </a>
      </li>
      <li class="list">
        <a href="#" class="tag-text">
          # <span class="text">AI</span>
        </a>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

</style>
