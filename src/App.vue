<template>
  <div id="app">
    <!-- Header -->
    <Header
      :cart="cartStore.items"
      :is-logged-in="isLoggedIn"
      @toggle-auth="toggleAuth"
    />

    <!-- Show sections only if not in product detail -->
    <HeroBanner v-if="!selectedProduct" />
    <TopSections v-if="!selectedProduct" />

    <!-- Categories -->
    <CategorySection
      v-if="!selectedProduct"
      :categories="categories"
      :selected-category="selectedCategory"
      @filter-category="filterCategory"
    />

    <!-- Product Grid -->
    <ProductGrid
      v-if="!selectedProduct"
      :products="filteredProducts"
      @add-to-cart="addToCart"
      @view-product="viewProduct"
    />

    <!-- Product Detail -->
    <ProductDetail
      v-else
      :product="selectedProduct"
      @add-to-cart="addToCart"
      @back-to-products="backToProducts"
    />

    <!-- Footer -->
    <Footer v-if="!selectedProduct" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"
import axios from "axios"

import Header from "./components/Header.vue"
import HeroBanner from "./components/HeroBanner.vue"
import TopSections from "./components/TopSections.vue"
import CategorySection from "./components/CategorySection.vue"
import ProductGrid from "./components/ProductGrid.vue"
import ProductDetail from "./components/ProductDetail.vue"
import Footer from "./components/Footer.vue"

// Import Pinia cart store
import { useCartStore } from "./stores/cart"
const cartStore = useCartStore()

const products = ref([])
const categories = ref([])
const selectedCategory = ref(null)
const isLoggedIn = ref(false)
const selectedProduct = ref(null)

// Computed filter
const filteredProducts = computed(() => {
  if (selectedCategory.value) {
    return products.value.filter(
      (p) => p.category === selectedCategory.value
    )
  }
  return products.value
})

// Methods
function addToCart(product) {
  cartStore.addToCart(product) // use Pinia store
  alert('${product.title} added to cart!')
}

function filterCategory(category) {
  selectedCategory.value =
    selectedCategory.value === category ? null : category
}

function toggleAuth() {
  isLoggedIn.value = !isLoggedIn.value
}

function viewProduct(product) {
  selectedProduct.value = product
}

function backToProducts() {
  selectedProduct.value = null
}

// Fetch products from API
onMounted(async () => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products")
    products.value = res.data
    const catRes = await axios.get(
      "https://fakestoreapi.com/products/categories"
    )
    categories.value = catRes.data
  } catch (err) {
    console.error("Error fetching data:", err)
  }
})
</script>

<style>
body {
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8f9fa;
}

.product-detail {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
.product-detail img {
  display: block;
  margin: 10px 0;
}
</style>
