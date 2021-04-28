<template>
  <div class="post-card shadow-sm">
    <div class="post-card-img">
      <img :src="post.img" alt="" class="rounded-circle avatar"/>
    </div>
    <div class="post-card-content">
      <div class="post-card-content-header">
        <div class="post-card-content-header-left">
          <p class="post-card-content-header-title">{{post.name}}</p>
          <nuxt-link :to="`/status/${post.username}/${post.id}`" class="post-card-content-header-user">@{{post.username}}</nuxt-link>
          <span class="post-card-content-header-title-date">. {{ $moment(post.date).fromNow()}}</span>
        </div>
        <div class="post-card-content-header-right">
          <div class="dropdown">
            <button class="btn" type="button" id="postCardDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-ellipsis-h"></i>
            </button>
            <div class="dropdown-menu" aria-labelledby="postCardDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </div>
      </div>
      <div class="post-card-content-middle">
        <short-text :text="post.description" :target="150" />
      </div>
      <div class="post-card-content-bottom">
        <button class="post-card-actions-btn" type="button">
          <i class="fa fa-comment-dots"></i>
          <span class="btn-counter">{{post.comments}}</span>
        </button>
        <button class="post-card-actions-btn" type="button">
          <i class="fa fa-heart"></i>
          <span class="btn-counter">{{post.likes}}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ShortText from '~/components/shared/ShortText.vue';
  export default {
    props: {
      post: {
        type: Object,
        required: true
      },
    },
    components: {
      ShortText
    }
  }
</script>

<style lang="scss" scoped>

</style>
