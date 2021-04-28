<template>
  <div class="posts-content">
    <p class="posts-content-title">{{title}}</p>
    <PostCard v-for="post in posts" :key="post.id" :post="post"/>
  </div>
</template>

<script>
import PostCard from "@/components/global/PostCard";
import posts from "../../data/post"
  export default {
    data() {
      return {
        posts: posts
      }
    },
    props: ['title'],
    components: {
      PostCard
    },
  }
</script>

<style lang="scss" scoped>

</style>
