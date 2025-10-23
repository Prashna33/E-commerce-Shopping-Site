<template>
  <div id="app">
    <Header :cart="cart" :is-logged-in="isLoggedIn" @toggle-auth="toggleAuth" />

    <HeroBanner />

    <!--  Added TopSections -->
    <TopSections />

    <CategorySection
      :categories="categories"
      :selected-category="selectedCategory"
      @filter-category="filterCategory"
    />

    <ProductGrid
      :selected-category="selectedCategory"
      @add-to-cart="addToCart"
    />

    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue"
import Header from "./components/Header.vue"
import HeroBanner from "./components/HeroBanner.vue"
import CategorySection from "./components/CategorySection.vue"
import ProductGrid from "./components/ProductGrid.vue" 
import Footer from "./components/Footer.vue"
import TopSections from "./components/TopSections.vue" 

const categories = ref([
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing"
])

const selectedCategory = ref(null)
const cart = ref([])
const isLoggedIn = ref(false)

function addToCart(product) {
  cart.value.push(product)
  alert(`${product.title} added to cart!`)
}

function filterCategory(category) {
  selectedCategory.value =
    selectedCategory.value === category ? null : category
}

function toggleAuth() {
  isLoggedIn.value = !isLoggedIn.value
}
</script>

<style>
body {
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8f9fa;
}
</style>
