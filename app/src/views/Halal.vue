<template>
  <div class="background">
    <h1>Halal Maker</h1>
    <div class="container">
      <div class="order">
        <HalalPlate
          v-for="selectedtopping in selectedtoppings"
          :key="selectedtopping.name"
          :selectedtopping="selectedtopping"
        ></HalalPlate>
      </div>
      <div class="toppings">
        <HalalCard v-for="topping in toppings" :key="topping.name" :topping="topping">
          <button @click="addtohalal(topping)" class="addbutton">Add to Halal</button>
          <button @click="removefromhalal(topping)" class="removebutton">Remove from Halal</button>
        </HalalCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HalalCard from '@/components/HalalCard.vue'
import HalalPlate from '@/components/HalalPlate.vue'

function addtohalal(topping) {
  if (!selectedtoppings.value.includes(topping)) {
    selectedtoppings.value.push(topping)
  }
  console.log(selectedtoppings.value)
}
function removefromhalal(topping) {
  selectedtoppings.value = selectedtoppings.value.filter((t) => t !== topping)
  console.log(selectedtoppings.value)
}

const selectedtoppings = ref([{ name: 'halalplate', imageurl: '/images/halalplate.webp' }])

const toppings = ref([
  { name: 'Rice', imageurl: '/images/cookie.png' },
  { name: 'Lettuce', imageurl: 'asdasd' },
  { name: 'Tomato', imageurl: 'asdasd' },
  { name: 'Onion', imageurl: 'asdasd' },
  { name: 'Chicken', imageurl: 'asdasd' },
  { name: 'Lamb', imageurl: 'asdasd' },
  { name: 'White Sauce', imageurl: 'asdasd' },
  { name: 'Hot Sauce', imageurl: 'asdasd' },
])
</script>

<style scoped>
.background {
  background-color: white;
}
div {
  padding: 16px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 50px;
}

.container {
  display: flex;
  flex: 1;
}

.toppings {
  display: flex;
  width: 80vw;
  margin: 20px auto;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.removebutton {
  height: 35px;
  background-color: rgb(197, 39, 39);
  font-size: 15px;
  border-radius: 5px;
  color: white;
  border-width: 2px;
}

.removebutton:hover {
  background-color: rgb(255, 51, 51);
}

.addbutton {
  height: 35px;
  background-color: rgb(27, 141, 61);
  font-size: 15px;
  border-radius: 5px;
  color: white;
}

.addbutton:hover {
  background-color: rgb(33, 190, 80);
}
</style>
