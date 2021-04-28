<template>
  <div class="add-post-card shadow-sm">
    <div class="user-img">
      <img src="@/store/imgs/download.png" alt="" class="rounded-circle avatar"/>
    </div>
    <div class="add-post-box">
      <form @submit.prevent="addPost">
        <div class="form-group">
          <textarea
            class="form-control input-focus mb-2"
            placeholder="Post an update..."
            rows="2"
          ></textarea>
          <button class="add-tags-btn mb-2" type="button" @click.prevent="Tags">
            + Add tags
          </button>
          <input type="text" class="form-control input-focus" v-if="tags" />
        </div>
        <div class="form-group bottom-form-group pt-3">
          <label class="post-img-upload">
            <i class="fa fa-image"></i> Add Image
            <input
              type="file"
              @change="previewImages"
              multiple
              accept="image/*"
            />
          </label>
          <button class="add-post-btn" type="submit">
            Create Post
          </button>
        </div>
        <div class="images-upload" v-if="preview_list.length">
          <div
            v-for="(item, index) in preview_list"
            :key="index"
            class="image-box"
          >
            <button
              class="delete_img"
              type="button"
              @click.prevent="deleteImg(index)"
            >
              <i class="fa fa-times"></i>
            </button>
            <img :src="item" class="img-upload" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      preview_list: [],
      tags: false
    };
  },
  methods: {
    Tags() {
      this.tags = !this.tags;
    },
    previewImages: function(event) {
      var input = event.target;
      var count = input.files.length;
      var index = 0;
      if (input.files) {
        while (count--) {
          var reader = new FileReader();
          reader.onload = e => {
            this.preview_list.push(e.target.result);
          };
          reader.readAsDataURL(input.files[index]);
          index++;
        }
      }
    },
    deleteImg(e) {
      var imageList = this.preview_list;
      var index = imageList.indexOf(imageList[e]);
      if (e == index) {
        this.preview_list.splice(index, 1);
      }
    },
  }
};
</script>

<style lang="scss" scoped></style>
