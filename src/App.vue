<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Gayathri:100,400,700&display=swap");
$body-font-family: "Gayathri";
.v-application {
  font-family: $body-font-family, sans-serif !important;
}
</style>