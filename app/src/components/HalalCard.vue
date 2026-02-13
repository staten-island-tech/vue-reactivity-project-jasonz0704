<template>
  <div>
    <p>{{ topping.name }}</p>
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
  height: 250px;
  width: 200px;
  border: 1px solid black;
  margin: 40px;
  font-size: 40px;
}
</style>
