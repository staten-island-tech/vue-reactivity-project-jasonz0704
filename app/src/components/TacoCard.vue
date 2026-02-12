<template>
  <div>
    <p>{{ topping.name }}</p>
    <p>{{ topping.desc }}</p>
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

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 150px;
  width: 100px;
  border: 1px solid black;
}
</style>
