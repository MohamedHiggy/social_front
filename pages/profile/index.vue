<template>
    <div class="profile-page">
      <div class="container">
        <div class="row">
          <!--Left SideBar-->
          <div class="col-lg-3 col-md-3 col-xs-12">
            <LeftSide />
          </div>
          <!--Content-->
          <div class="col-lg-9 col-md-9 col-xs-12">
            <profileHeader :user="user"/>
            <!--________profile Content________-->
            <UserNav />
            <Posts :title="title"/>

          </div>
        </div>
      </div>

    </div>
</template>

<script>
import LeftSide from "@/components/global/TheLeftSide";
import Posts from "@/components/global/ThePosts";
import UserNav from "@/components/userProfile/UserNav";
import profileHeader from "@/components/shared/profileHeader";
import { mapGetters } from "vuex"
export default {
  middleware: ['redirectIfGuest'],
  data() {
    return {
      title: "Your Posts",
    }
  },
  mounted() {
    this.userName
  },
  computed: {
    ...mapGetters({
      user: 'user',
    }),
  },

  methods: {
  },
  components: {
    Posts,
    LeftSide,
    UserNav,
    profileHeader
  },
};
</script>

<style lang="scss" scoped></style>
