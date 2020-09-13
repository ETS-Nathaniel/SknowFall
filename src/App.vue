<template>
  <v-app>
    <v-app-bar v-if="loggedIn" app color="blue" flat dark>
      <v-toolbar-title>Welcome, {{username}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="localLogout">
        Logout
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { logout } from "./firebase";
export default {
  name: "App",
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn;
    },
    username() {
      return this.$store.state.currentUser.displayName;
    }
  },
  methods: {
    localLogout() {
      logout();
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Gayathri:100,400,700&display=swap");
$body-font-family: "Gayathri";
.v-application {
  font-family: $body-font-family, sans-serif !important;
}
</style>