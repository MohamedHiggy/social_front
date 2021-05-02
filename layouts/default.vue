<template>
  <div>
    <TheNavigation />
    <userStatus :msg="msg" />
    <button @click.prevent="$fetch">refresh</button>
    <Nuxt />
  </div>
</template>

<script>
import TheNavigation from "@/components/global/TheNavigation"
import userStatus from "@/components/shared/userStatus"
import {mapGetters} from "vuex"
export default {
  data() {
    return {
      msg: "You need to verifie your email",
    }
  },
  computed: {
    ...mapGetters({
      "UPDATE_USER_STATUS" : "userStatus/UPDATE_USER_STATUS",
    }),
  },
  mounted() {
  },
  components: {
    TheNavigation,
    userStatus
  },
  async fetch({$axios, store}) {
    const headers = {
        'Accept': 'application/json',
        'Authorization': localStorage.getItem("auth._token.password_grant_custom")
    }
    return $axios.get("http://social.test/api/user/statuses", { headers }).then(res => {
      console.log(res);
    })
  }
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
