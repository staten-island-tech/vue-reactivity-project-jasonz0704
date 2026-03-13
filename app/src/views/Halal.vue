<template>
  <div class="background">
    <h1>Halal Maker</h1>
    <div class="container">
      <div class="order">
        <img class="halalplate" src="/images/halalplate.webp" alt="halalplate" />
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
}
function removefromhalal(topping) {
  selectedtoppings.value = selectedtoppings.value.filter((t) => t !== topping)
}

const selectedtoppings = ref([])

const toppings = ref([
  { name: 'Rice', imageurl: '/images/rice.png' },
  { name: 'Lettuce', imageurl: '/images/lettuce.png' },
  { name: 'Tomato', imageurl: '/images/tomato.png' },
  { name: 'Onion', imageurl: 'images/onion.png' },
  { name: 'Chicken', imageurl: '/images/chicken.png' },
  { name: 'Lamb', imageurl: '/images/lamb.png' },
  { name: 'White Sauce', imageurl: '/images/whitesauce.png' },
  { name: 'Hot Sauce', imageurl: '/images/hotsauce.png' },
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
  margin: 20px;
  font-size: 60px;
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
  width: 150px;
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
  width: 100px;
  background-color: rgb(27, 141, 61);
  font-size: 15px;
  border-radius: 5px;
  color: white;
}

.addbutton:hover {
  background-color: rgb(33, 190, 80);
}

.halalplate {
  width: 400px;
  height: 400px;
}
</style>
