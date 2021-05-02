<template>
    <div class="setting-sec-box shadow-sm">
      <p class="setting-box-title">Profile Information</p>
      <p class="setting-box-subtitle">Update your account's profile information and email address.</p>
      <div class="setting-sec-box-content mt-3">

        <form @submit.prevent="SendImg">
            <div class="user-photo">
            <label for="photo" class="profilePhotoLabel">
              <input type="file" accept="image/*" ref="photo" class="hidden" @change="PreviewPhoto">
            </label>

            <div class="photoPreview" v-show="!PreviewAvatar">
              <img  :src="user.avatar.original" :alt="user.name" class="rounded-circle avatar" width="100" height="100">
            </div>

            <div class="photoPreview" v-show="PreviewAvatar">
              <span :style="'background-image: url(\'' + PreviewAvatar + '\');'"></span>
            </div>

            <button class="user-photo-btn" type="button" v-show="!PreviewAvatar" @click.prevent="selectNewPhoto">Select A New Photo</button>


            <button class="user-photo-btn" type="button" disabled v-if="isLoading">
              <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
              Loading...
            </button>
            <button class="user-photo-btn" type="submit" v-show="PreviewAvatar" v-else>Update A New Photo</button>

            <button class="user-photo-btn" type="button" @click.prevent="deletePhoto">Remove Photo</button>
          </div>
        </form>

        <form @submit.prevent="updateUserInfo" class="user_info">
          <div class="form-row">
            <div class="form-group col-8">
              <label for="name">Name</label>
              <input type="text" class="form-control input-focus" id="name" aria-describedby="name" placeholder="Name" v-model="profileInfo.name">
            </div>
            <div class="form-group col-8">
              <label for="username">Username</label>
              <input type="text" class="form-control input-focus" id="username" aria-describedby="username" placeholder="username" v-model="profileInfo.username">
            </div>
            <div class="form-group col-8">
              <label for="email">Email</label>
              <input type="email" class="form-control input-focus" id="email" aria-describedby="email" placeholder="Email" v-model="profileInfo.email">
            </div>
          </div>
          <button class="setting-sec-box-btn" type="submit">Save</button>
        </form>
      </div>
    </div>
</template>

<script>
import {mapGetters } from "vuex"
import axios from 'axios';
  export default {
  data() {
    return {
      profileInfo: {
        username: "",
        name: "",
        email: "",
      },
      userImg: {
        avatar: null,
      },
      PreviewAvatar: null,
      user_token: '',
      isLoading: false
    }
  },
  mounted() {
   this.user_token = localStorage.getItem("auth._token.password_grant_custom");
  },
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    PreviewPhoto(event) {
      this.userImg.avatar = event.target.files[0];
      var input = event.target
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.PreviewAvatar = e.target.result;
        }
        this.PreviewAvatar=input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
    selectNewPhoto() {
      this.$refs.photo.click();
    },
    deletePhoto() {
      this.PreviewAvatar= null
    },
    async SendImg(){
      this.isLoading = true
     const headers = {
        'Accept': 'application/json',
        'Authorization': this.user_token
      }
      const avatar = new FormData();
      avatar.append("avatar",  this.userImg.avatar ,this.userImg.avatar.name)

      await axios
        .post("http://social.test/api/user/update-avatar", avatar, { headers })
        .then(res => {
          if (res.status === 200) {this.PreviewAvatar = null}
          this.isLoading = false
        })
        .catch(err => { this.isLoading = false })
        this.$auth.fetchUser()
    },
    async updateUserInfo() {
     const headers = {
        'Accept': 'application/json',
        'Authorization': this.user_token
      }
      await axios.post("http://social.test/api/user/update-info", this.profileInfo, { headers }).then(res => {
        console.log(res.data);
      }).catch(err => {
        console.log(err);
      });
      this.$auth.fetchUser()
    },
  },
  }
</script>

<style lang="scss" scoped>

</style>
