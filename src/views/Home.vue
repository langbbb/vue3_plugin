<template>
  <div class='Home'>

    <div>
      <NpmShowmore></NpmShowmore>
    </div>

  </div>
</template>
 
<script>
import NpmShowmore from "./npmPlugin/npm-showmore.vue";
export default {
  name: "Home",

  components: { NpmShowmore },

  data() {
    return {};
  },

  created() {},

  methods: {},
};
</script>

<style scoped>
</style>