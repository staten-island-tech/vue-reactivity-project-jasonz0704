<template>
  <div class="card">
    <p>{{ topping.name }}</p>
    <img :src="topping.imageurl" alt="" />
    <slot></slot>
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
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 250px;
  width: 300px;
  margin: 40px auto;
  font-size: 40px;
  text-align: center;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: rgb(255, 255, 255);
}
</style>
