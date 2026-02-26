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

.removebutton {
  height: 35px;
  width:;
  background-color: rgb(197, 39, 39);
  font-size: 15px;
  border-radius: 5px;
  color: white;
  border-width: 2px;
}
.addbutton {
  height: 35px;
  width:;
  background-color: rgb(27, 141, 61);
  font-size: 15px;
  border-radius: 5px;
  color: white;
}
</style>
