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
p {
  margin: 10px;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 325px;
  width: 275px;
  margin: 20px auto;
  font-size: 35px;
  text-align: center;
  margin-bottom: 50px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.toppingimage {
  height: 150px;
  width: 150px;
}
</style>
