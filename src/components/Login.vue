<template>
  <v-container class="fill-height login-bg" fluid>
    <particlesJS />
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12" max-width="400">
          <br />
          <div class="mb-4 text-center">Comeaux Weather Presents:</div>
          <div class="headline-- mb-1 text-center">SKNOW FALL</div>
          <v-spacer></v-spacer>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Login"
                name="login"
                prepend-icon="mdi-account"
                type="text"
              ></v-text-field>

              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn block @click="login" color="primary" large outlined
              >Login</v-btn
            >
          </v-card-actions>
          <br />
          <v-divider></v-divider>
          <br />
          <p class="text-center">Or login using one of the following methods</p>
          <v-card-actions class="justify-center">
            <v-btn @click="fbLogin" outlined color="indigo">
              <v-icon>mdi-facebook</v-icon>
              Facebook
            </v-btn>
            <v-btn @click="gLogin" outlined>
              <v-icon>mdi-google</v-icon>
              Google
            </v-btn>
          </v-card-actions>
          <br />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Firebase from "../firebase.js";
import particlesJS from "../plugins/ParticlesJS";

export default {
  name: "Login",
  components: { particlesJS },

  mounted: function() {
    Firebase.auth.onAuthStateChanged(user => {
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
        data: {}
      }
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
    }
  },
  methods: {
    login() {
      Firebase.login();
    },
    gLogin() {
      Firebase.gLogin();
    },
    fbLogin() {
      Firebase.fbLogin();
    },
    logout() {
      Firebase.logout();
    }
  }
};
</script>

<style scoped>
.login-bg {
  background-color: lightblue;
}
#login-particles {
  position: absolute;
}
</style>
