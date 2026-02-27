<template>
  <div class="background">
    <h1>Halal Maker</h1>
    <div class="container">
      <div class="displayorder">
        <img class="halalplate" src="/images/halalplate.webp" alt="Halal Plate" />
      </div>

      <div class="toppings">
        <HalalCard v-for="topping in toppings" :key="topping.name" :topping="topping">
          <button class="addbutton">Add to Halal</button>
          <button class="removebutton">Remove from Halal</button>
        </HalalCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import HalalCard from '@/components/HalalCard.vue'

const toppings = [
  { name: 'Rice', imageurl: 'asdasd' },
  { name: 'Lettuce', imageurl: 'asdasd' },
  { name: 'Tomato', imageurl: 'asdasd' },
  { name: 'Onion', imageurl: 'asdasd' },
  { name: 'Chicken', imageurl: 'asdasd' },
  { name: 'Lamb', imageurl: 'asdasd' },
  { name: 'White Sauce', imageurl: 'asdasd' },
  { name: 'Hot Sauce', imageurl: 'asdasd' },
]
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

.halalplate {
  max-width: 400px;
  max-height: 400px;
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
  width:;
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
  width:;
  background-color: rgb(27, 141, 61);
  font-size: 15px;
  border-radius: 5px;
  color: white;
}

.addbutton:hover {
  background-color: rgb(33, 190, 80);
}
</style>
