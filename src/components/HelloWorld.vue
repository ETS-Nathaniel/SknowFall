<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>
        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br />please join our online
          <a href="https://community.vuetifyjs.com" target="_blank"
            >Discord Community</a
          >
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

        <v-row justify="center">
          <v-btn
            v-if="!authenticated"
            color="primary"
            outlined
            x-large
            @click="login"
            >Login</v-btn
          >
          <div v-if="authenticated">
            <v-btn color="primary" outlined x-large @click="logout"
              >Logout</v-btn
            >
            <h1>Hi {{ firstName }}!</h1>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Firebase from "../firebase.js";

export default {
  name: "HelloWorld",

  mounted: function() {
    Firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        this.user.loggedIn = true;
        this.user.data = user;
      } else {
        this.user.loggedIn = false;
        this.user.data = {};
      }
    });
  },

  data() {
    return {
      user: {
        loggedIn: false,
        data: {},
      },
    };
  },

  computed: {
    authenticated() {
      return this.user.loggedIn;
    },
    firstName() {
      if (this.user.data.displayName) {
        return this.user.data.displayName.split(" ")[0];
      }
      return null;
    },
  },

  methods: {
    login() {
      Firebase.login();
    },
    logout() {
      Firebase.logout();
    },
  },
};
</script>
