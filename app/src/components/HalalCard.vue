<template>
  <div class="card">
    <p>{{ topping.name }}</p>
    <img class="toppingimage" :src="topping.imageurl" :alt="topping.name" />
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
}

.toppingimage {
  height: 100px;
  width: 100px;
}
</style>
