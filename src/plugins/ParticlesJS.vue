<template>
  <div id="particles-js"></div>
</template>

<script>
import particleconfig from "../assets/particlesjs-config.json";
export default {
  name: "ParticlesJS",

  mounted() {
    require("particles.js");
    this.$nextTick(() => {
      this.initParticlesJS();
    });
  },

  methods: {
    initParticlesJS() {
      /* eslint-disable */
      particlesJS("particles-js", particleconfig);
    },
  },
};
</script>

<style>
#particles-js {
  background-color: #b2d4f2;
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
