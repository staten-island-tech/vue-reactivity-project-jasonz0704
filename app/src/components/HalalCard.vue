<template>
  <div class="card">
    <p>{{ topping.name }}</p>

    <button class="addbutton">Add to Halal</button>
    <button class="removebutton">Remove from Halal</button>
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
  width: 200px;
  margin: 40px auto;
  border: 1px solid black;
  font-size: 40px;
  text-align: center;
}

.removebutton {
  background-color: rgb(255, 52, 52);
  font-size: 15px;
  border-radius: 5px;
}
</style>
