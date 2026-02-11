<template>
  <div>Taco Thing</div>
  <div>
    <TacoCard v-for="topping in toppings" :key="topping.name" :topping="topping"></TacoCard>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TacoCard from '@/components/TacoCard.vue'

const toppings = ref([
  { name: 'Meat', desc: 'adspadsads' },
  { name: 'Meat', desc: 'adspadsads' },
  { name: 'Meat', desc: 'adspadsads' },
  { name: 'Meat', desc: 'adspadsads' },
  { name: 'Meat', desc: 'adspadsads' },
  { name: 'Meat', desc: 'adspadsads' },
  { name: 'Meat', desc: 'adspadsads' },
])
</script>

<style scoped></style>
