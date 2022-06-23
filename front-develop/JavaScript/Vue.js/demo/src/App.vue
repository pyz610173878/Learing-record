<template>
  <div>
    123
    <Pannel></Pannel>
  </div>
</template>

<script>
import Pannel from "./components/Pannel.vue";

export default {
  components: {
    Pannel,
  },
  data() {
    return {
      name: "<h3>{{ title }}</h3>",
    };
  },
};
</script>

<style></style>


