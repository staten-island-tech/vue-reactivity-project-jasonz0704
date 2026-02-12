<template>
  <div>
    <TacoCard v-for="topping in toppings" :key="topping.name" :topping="topping"></TacoCard>
  </div>
</template>

<script setup>
import TacoCard from '@/components/TacoCard.vue'

const toppings = [{ name: 'Meat', desc: 'adspadsads' }]
</script>

<style scoped>
div {
  padding: 16px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}
.container {
  display: flex;
  width: 80vw;
  margin: 20px auto;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.card {
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
