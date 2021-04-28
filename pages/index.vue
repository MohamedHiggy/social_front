<template>
  <div class="home-page pt-5">
    <div class="container">
      <div class="row">
        <div class="left-side-content col-lg-2 col-md-2 col-xs-12">
          <LeftSide />
        </div>

        <div class="center-side-content col-lg-7 col-md-7 col-xs-12">
          <div class="center-side">
            <AddPostCard />
            <Posts :title="title"/>
          </div>
        </div>

        <div class="right-side-content col-lg-3 col-md-3 col-xs-12">
          <RightSide />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RightSide from "@/components/global/TheRightSide";
import LeftSide from "@/components/global/TheLeftSide";
import Posts from "@/components/global/ThePosts";
import AddPostCard from "@/components/global/AddPostCard";
export default {
  data() {
    return {
      title: "Latest Posts"
    }
  },
  components: {
    RightSide,
    LeftSide,
    Posts,
    AddPostCard
  },
};
</script>

<style></style>
