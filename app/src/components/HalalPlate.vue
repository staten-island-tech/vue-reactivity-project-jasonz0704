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
  max-width: 400px;
  max-height: 400px;
}
</style>
