<template>
  <div class="profile-header-box shadow">
    <div class="profile-header">
      <!--cover user img-->
      <div class="user-cover-img">
        <img src="@/store/imgs/cover-img.jpg" alt="" />
        <button class="change-btn cover-btn" type="button">
          <i class="fa fa-pen"></i>
        </button>
      </div>

      <!--profile user img-->
      <div class="user-profile-img">
        <span :style="'background-image: url(\'' + user.avatar.original + '\');'" class="rounded-circle avatar"></span>
      </div>

      <!--profile user info -->
      <div class="user-profile-info">
        <div class="info-header mt-5">
          <p class="info-name">{{ user.name }}</p>
          <p class="info-username">@{{ user.username }}</p>
        </div>

        <div class="info-about">
          <p class="info-desc">
            Lorem ipsum dolor sit amet #consectetur adipisicing elit. Nemo autem
            doloribus porro aliquid natus quis sit, sint odit voluptate expedita
            consectetur sunt cumque adipisci dolore quisquam ipsa id, placeat
            quam?
          </p>
        </div>

        <ul class="info-list-style">
          <li class="list">
            <a
              href="https://www.linkedin.com/in/mohamed-hggy/"
              class="user-link"
            >
              <i class="fa fa-link"></i>
              https://www.linkedin.com/in/mohamed-hggy/
            </a>
          </li>
          <li class="list">
            <a href="https://twitter.com/mohamed_higgy" class="user-link">
              <i class="fab fa-twitter"></i>
              https://twitter.com/mohamed_higgy
            </a>
          </li>
        </ul>

        <div class="info-follow">
          <nuxt-link to="#" class="follow">
            <span class="number">10</span>
            following
          </nuxt-link>
          <nuxt-link to="#" class="follow">
            <span class="number">6</span>
            followers
          </nuxt-link>
        </div>

        <div class="info-tags">
          <ul class="tags-list-style">
            <li class="list">
              <a href="#"># Design</a>
            </li>
            <li class="list">
              <a href="#"># Developemnt</a>
            </li>
            <li class="list">
              <a href="#"># Laravel</a>
            </li>
            <li class="list">
              <a href="#"># AI</a>
            </li>
            <li class="list">
              <a href="#"># Nuxt</a>
            </li>
            <li class="list">
              <a href="#"># Vue</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object
    }
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
</style>
