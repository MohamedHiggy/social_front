<template>
  <div class="profile-nav-bar mt-5">
    <ul class="profile-list-style">
      <li class="list">
        <nuxt-link to="/profile" class="list-anchor">
          <i class="fa fa-file-alt"></i> Posts
        </nuxt-link>
      </li>
      <li class="list">
        <nuxt-link to="/profile/likes" class="list-anchor">
          <i class="fa fa-heart"></i> Favorites
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
