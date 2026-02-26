<template>
  <div class="background">
    <h1>Halal Maker</h1>
    <div class="container">
      <div class="displayorder">
        <img class="halalplate" src="/images/halalplate.webp" alt="Halal Plate" />
      </div>
      <div class="toppings">
        <HalalCard v-for="topping in toppings" :key="topping.name" :topping="topping"></HalalCard>
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
</style>
