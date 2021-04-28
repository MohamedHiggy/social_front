<template>
    <div class="profile-page">
      <div class="container">
        <div class="row">
          <!--Left SideBar-->
          <div class="col-lg-3 col-md-3 col-xs-12">
            <LeftSide />
          </div>
          <!--Content-->
          <div class="col-lg-4 col-md-9 col-xs-12">
            <div class="setting-navbar">
              <p class="title">Settings</p>
              <ul class="setting-list-style">
                <li class="list">
                  <nuxt-link to="#" exact class="list-a">
                    Your account
                    <i class="fa fa-chevron-right"></i>
                  </nuxt-link>
                </li>
                <li class="list">
                  <nuxt-link to="#" class="list-a">
                    security and account access
                    <i class="fa fa-chevron-right"></i>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-5 col-md-9 col-xs-12">
            <h1>Settings</h1>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
import LeftSide from "@/components/global/TheLeftSide";
export default {
  middleware: ['redirectIfGuest'],
  data() {
    return {
    }
  },
  components: {
    LeftSide,
  },
};
</script>

<style lang="scss" scoped></style>
