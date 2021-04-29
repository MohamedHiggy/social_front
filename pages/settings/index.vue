<template>
    <div class="setting-page">
      <div class="container">
        <div class="row">
          <!--Left SideBar-->
          <div class="col-lg-3 col-md-3 col-xs-12">
            <LeftSide />
          </div>
          <!--Content-->
          <div class="col-lg-9 col-md-9 col-xs-12">
            <div class="setting-sec">
              <p class="title">Settings</p>
              <profileInfo />
              <changePass />
              <TwoFactorAuth />
              <deleteAcc />
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
import LeftSide from "@/components/global/TheLeftSide";
import profileInfo from "@/components/settings/profileInfo";
import changePass from "@/components/settings/updatePassword";
import deleteAcc from "@/components/settings/deleteProfile";
import TwoFactorAuth from "@/components/settings/TwoFactorAuthenticationForm";
export default {
  middleware: ['redirectIfGuest'],
  components: {
    LeftSide,
    profileInfo,
    changePass,
    deleteAcc,
    TwoFactorAuth
  },
};
</script>

<style lang="scss" scoped></style>
