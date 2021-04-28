<template>
    <div class="profile-page">
      <div class="container">
        <div class="row">
          <!--Left SideBar-->
          <div class="col-lg-2 col-md-2 col-xs-12">
            <LeftSide />
          </div>
          <!--Content-->
          <div class="col-lg-10 col-md-12 col-xs-12">
            <profileHeader :user="user"/>
            <!--________profile Content________-->
            <UserNav />

            <h1>Posts</h1>

          </div>
        </div>
      </div>
    </div>
</template>

<script>
import LeftSide from "@/components/global/TheLeftSide";
import UserNav from "@/components/userProfile/UserNav";
import profileHeader from "@/components/shared/profileHeader";
export default {
  data() {
    return {
      title: "Your Posts",
      user: this.$store.state.auth.user
    }
  },
  middleware: [
    'redirectIfGuest'
  ],
  components: {
    LeftSide,
    UserNav,
    profileHeader
  },
};
</script>

<style lang="scss" scoped></style>
