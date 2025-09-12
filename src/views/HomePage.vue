<template>
    <div>
      <h1>Products</h1>
      <div class="grid">
        <div v-for="p in products" :key="p.id" class="card">
          <h3>{{ p.title }}</h3>
          <p>${{ p.price }}</p>
          <button @click="addToCart(p)">Add to Cart</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue"
  import axios from "axios"
  import { useCartStore } from "../stores/cart"
  
  const cartStore = useCartStore()
  const products = ref([])
  
  function addToCart(product) {
    cartStore.addToCart(product)
  }
  
  onMounted(async () => {
    const res = await axios.get("https://fakestoreapi.com/products")
    products.value = res.data
  })
  </script>
  