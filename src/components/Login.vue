<template>
  <v-container class="fill-height login-bg" fluid>
    <particlesJS />
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <!-- LOGIN Component -->

        <v-card v-if="loggingIn" class="elevation-12" max-width="400">
          <br />
          <div class="mb-4 text-center">Comeaux Weather Presents:</div>
          <h1 class="mb-1 text-center">SKNOW FALL</h1>
          <v-spacer></v-spacer>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Email"
                name="email"
                v-model="user.data.email"
                prepend-icon="mdi-email"
                type="text"
                autocomplete="username"
              ></v-text-field>

              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                :type="show1 ? 'text' : 'password'"
                v-model="user.data.password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show1 = !show1"
                autocomplete="current-password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn block @click="login" color="primary" large outlined>Login</v-btn>
          </v-card-actions>
          <br />
          <v-divider></v-divider>
          <br />
          <p class="text-center">Or login using one of the following methods</p>
          <v-card-actions class="justify-center">
            <v-btn @click="fbLogin" outlined color="indigo">
              <v-icon>mdi-facebook</v-icon>Facebook
            </v-btn>
            <v-btn @click="gLogin" outlined>
              <v-icon>mdi-google</v-icon>Google
            </v-btn>
          </v-card-actions>
          <v-card-actions class="justify-center">
            <v-btn @click="actionSwitch" class="margin-auto" text>No Account? Sign Up Here</v-btn>
          </v-card-actions>
          <br />
        </v-card>

        <!-- SIGN-UP Component -->

        <v-card v-else class="elevation-12" max-width="400">
          <br />
          <div class="mb-4 text-center">Comeaux Weather Presents:</div>
          <div class="mb-1 text-center">SKNOW FALL</div>
          <v-spacer></v-spacer>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Username"
                name="name-signup"
                prepend-icon="mdi-account"
                type="text"
                v-model="signUp.name"
              ></v-text-field>
              <v-text-field
                label="Email"
                name="email-signup"
                prepend-icon="mdi-email"
                type="text"
                v-model="signUp.email"
              ></v-text-field>
              <v-text-field
                label="Phone"
                name="phone-signup"
                prepend-icon="mdi-phone"
                type="text"
                v-model="signUp.phone"
              ></v-text-field>
              <v-text-field
                id="password"
                label="Password"
                name="password-signup"
                prepend-icon="mdi-lock"
                type="password"
                v-model="signUp.password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn block @click="signUpAction" color="primary" large outlined>Sign Up</v-btn>
          </v-card-actions>
          <v-card-actions class="justify-center">
            <v-btn
              @click="actionSwitch"
              class="margin-auto"
              text
            >Already Have An Account? Log In Here</v-btn>
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
        this.$store.dispatch("setUser", user);
        this.$store.dispatch("loggedIn", true);
        this.user.data = user;
        this.$router.push("/dashboard");
      } else {
        this.$store.dispatch("loggedIn", false);
        this.user.data.email = "";
        this.user.data.password = "";
      }
    });
  },

  data() {
    return {
      show1: false,
      show2: false,
      loggingIn: true,
      user: {
        loggedIn: false,
        data: {
          email: "",
          password: ""
        }
      },
      signUp: {
        email: "",
        phone: "",
        name: "",
        password: ""
      }
    };
  },

  computed: {
    authenticated() {
      return this.$store.state.loggedIn;
    }
  },
  methods: {
    login() {
      Firebase.login(this.user.data.email, this.user.data.password);
    },
    gLogin() {
      Firebase.gLogin();
    },
    fbLogin() {
      Firebase.fbLogin();
    },
    logout() {
      Firebase.logout();
    },
    signUpAction() {
      Firebase.signUp();
    },
    actionSwitch() {
      this.loggingIn = !this.loggingIn;
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
