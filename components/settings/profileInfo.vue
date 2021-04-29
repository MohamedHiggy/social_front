<template>
    <div class="setting-sec-box shadow-sm">
      <p class="setting-box-title">Profile Information</p>
      <p class="setting-box-subtitle">Update your account's profile information and email address.</p>
      <div class="setting-sec-box-content mt-3">
        <form @submit.prevent="saveInfo" class="user_info">
          <div class="user-photo">

            <label for="photo" class="profilePhotoLabel">
             <input type="file" accept="image/*" ref="photo" class="hidden" @change="PreviewPhoto">
            </label>

            <div class="photoPreview" v-show="!userImg.avatar">
              <img :src="user.avatar.original" :alt="user.name" class="rounded-circle avatar" width="100" height="100">
            </div>

            <div class="photoPreview" v-show="userImg.avatar">
              <span :style="'background-image: url(\'' + userImg.avatar + '\');'"></span>
            </div>

            <button class="user-photo-btn" type="button" v-show="!userImg.avatar" @click.prevent="selectNewPhoto">Select A New Photo</button>
            <button class="user-photo-btn" type="button" v-show="userImg.avatar" @click.prevent="SendImg">Update A New Photo</button>

            <button class="user-photo-btn" type="button" @click.prevent="deletePhoto">Remove Photo</button>
          </div>

          <div class="form-row">
            <div class="form-group col-8">
              <label for="name">Name</label>
              <input type="text" class="form-control input-focus" id="name" aria-describedby="name" placeholder="Name" v-model="profileInfo.name">
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
        name: null,
        email: null,
      },
      userImg: {
        avatar: null,
      },
      user_token: ''
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
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.userImg.avatar = e.target.result;
        }
        this.userImg.avatar=input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
    async SendImg(){
     const headers = {
        'Accept': 'application/json',
        'Authorization': this.user_token
      }
      await axios.post("http://social.test/api/user/update-avatar", this.userImg, { headers })
    },
    selectNewPhoto() {
      this.$refs.photo.click();
    },
    deletePhoto() {
      this.photoPreview = null
    },
    saveInfo() {
      console.log("saveInfo");
    },
  },
  }
</script>

<style lang="scss" scoped>

</style>
