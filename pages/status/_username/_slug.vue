<template>
  <div class="post-content pt-5">
    <div class="container">
      <div class="row">
        <div class="left-side-content col-lg-2 col-md-2 col-xs-12">
          <LeftSide />
        </div>
        <div class="col-lg-8 col-md-8 col-xs-12">
          <div class="post-card shadow-sm">
            <div class="post-card-img">
              <img src="@/store/imgs/download.png" alt="" class="rounded-circle avatar"/>
            </div>
            <div class="post-card-content">
              <div class="post-card-content-header">
                <div class="post-card-content-header-left">
                  <p class="post-card-content-header-title">Name</p>
                  <nuxt-link to="#" class="post-card-content-header-user">@username</nuxt-link>
                  <span class="post-card-content-header-title-date">. a year ago</span>
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
                <p class="post-card-content-middle-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eligendi, amet cum rerum sequi libero voluptatibus harum sed blanditiis id totam veniam nisi odit vitae? Deleniti maiores perspiciatis rem sequi.</p>
              </div>
              <div class="post-card-content-bottom">
                <button class="post-card-actions-btn" type="button">
                  <i class="fa fa-comment-dots"></i>
                  <span class="btn-counter">50</span>
                </button>
                <button class="post-card-actions-btn" type="button">
                  <i class="fa fa-heart"></i>
                  <span class="btn-counter">50</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftSide from "@/components/global/TheLeftSide";
  export default {
    validate({ params }) {
      return !isNaN(params.slug);
    },
    data() {
      return {
      }
    },
    components: {
      LeftSide
    }
  }
</script>
