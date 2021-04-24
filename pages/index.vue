<template>
  <div class="home-page pt-5">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-xs-12">
            <div class="left-side">
              <LeftSide />
            </div>
          </div>

          <div class="col-lg-6 col-md-6 col-xs-12">
            <div class="center-side">
              <div class="add-post-card shadow">
                <div class="user-img">
                  <img src="../store/imgs/add-post.png" alt="">
                </div>
                <div class="add-post-content">
                  <form @submit.prevent="addPost">
                    <div class="form-group">
                      <textarea class="form-control input-focus mb-2" placeholder="Post an update..." rows="2"></textarea>
                      <button class="add-tags-btn mb-2" type="button" @click.prevent="Tags">+ Add tags</button>
                      <input type="text" class="form-control input-focus" v-if="tags"/>
                    </div>
                    <div class="form-group bottom-form-group pt-3">
                        <label class="post-img-upload">
                          <i class="fa fa-image"></i> Add Image
                          <input type="file" @change="previewImages" multiple accept="image/*">
                        </label>
                        <button class="add-post-btn" type="submit">Create Post</button>
                    </div>
                    <div class="images-upload"  v-if="preview_list.length">
                      <div v-for="(item, index) in preview_list" :key="index" class="image-box">
                        <button class="delete_img" type="button">
                         <i class="fa fa-times"></i>
                        </button>
                        <img :src="item" class="img-upload"/>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <Post />
            </div>
          </div>

          <div class="col-lg-3 col-md-3 col-xs-12">
            <div class="right-side">
              <RightSide />
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import RightSide from "@/components/global/TheRightSide"
import LeftSide from "@/components/global/TheLeftSide"
import Post from "@/components/global/ThePost"
export default {
  components: {
    RightSide,
    LeftSide,
    Post
  },
  data() {
    return {
      preview_list: [],
      image_list: [],
      tags: false
    }
  },
  mounted() {
    console.log(this.preview_list);
  },
  methods: {
    Tags() {
      this.tags = !this.tags
    },
    previewImages: function(event) {
      var input = event.target;
      var count = input.files.length;
      console.log(count);
     var index = 0;
      if (input.files) {
        while(count --) {
          var reader = new FileReader();
          reader.onload = (e) => {
            this.preview_list.push(e.target.result);
          }
          this.image_list.push(input.files[index]);
          reader.readAsDataURL(input.files[index]);
          index ++;
        }
      }
    },
  }
}
</script>

<style>

</style>
