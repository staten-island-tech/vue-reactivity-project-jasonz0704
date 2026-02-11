<template>
  <div>
    <h2>{{ topping.name }}</h2>
    <h3>{{ topping.desc }}</h3>
  </div>
</template>

<script setup>
defineProps({
  topping: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped></style>
