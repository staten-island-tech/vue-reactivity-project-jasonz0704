<template>
  <div class="displayorder">
    <img class="orderedtoppingimage" :src="selectedtopping.imageurl" :alt="selectedtopping.name" />
  </div>
</template>

<script setup>
defineProps({
  selectedtopping: {
    type: Object,
    required: true,
  },
})
/* import { ref } from 'vue' */
</script>

<style scoped>
.orderedtoppingimage {
  position: absolute;
  bottom: 440px;
  left: 125px;
  width: 250px;
  height: 250px;
}
</style>
