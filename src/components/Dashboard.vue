<template>
  <div id="home-wrapper">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <h1>Heya</h1>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  computed: {
    username() {
      return this.$store.state.currentUser.displayName;
    }
  },
  data() {
    return {
      drawer: false
    };
  }
};
</script>