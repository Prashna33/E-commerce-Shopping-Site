<template>
  <section class="featured-products">
    <div class="container">
      <div class="section-header">
        <h2>Grab the best deal on Fashion & Gadgets</h2>
        <a href="#" class="view-all">View All ></a>
      </div>

      <div class="products-grid">
        <div class="product-card" v-for="product in filteredProducts" :key="product.id">
          <div class="product-image">
            <img :src="product.image" :alt="product.title" />
          </div>

          <div class="product-info">
            <h3 class="product-title">{{ truncateTitle(product.title) }}</h3>
            <div class="product-category">{{ formatCategory(product.category) }}</div>
            <div class="product-price">${{ product.price.toFixed(2) }}</div>
            <div class="product-rating">
              <span class="stars">{{ generateStars(product.rating.rate) }}</span>
              <span class="rating-count">({{ product.rating.count }})</span>
            </div>
          </div>

          <button class="add-to-cart" @click="addToCart(product)">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"
import axios from "axios"

const props = defineProps({
  selectedCategory: {
    type: String,
    default: null,
  },
})

const emit = defineEmits(["add-to-cart"])
const products = ref([])

onMounted(async () => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products")
    products.value = res.data
  } catch (err) {
    console.error("Error fetching products:", err)
  }
})

const filteredProducts = computed(() =>
  props.selectedCategory
    ? products.value.filter(
        (p) => p.category.toLowerCase() === props.selectedCategory.toLowerCase()
      )
    : products.value
)

const addToCart = (product) => {
  emit("add-to-cart", product)
}

const truncateTitle = (title) => {
  return title.length > 50 ? title.substring(0, 50) + "..." : title
}

const formatCategory = (category) => {
  return category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

const generateStars = (rating) => {
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)
  return "★".repeat(fullStars) + (halfStar ? "½" : "") + "☆".repeat(emptyStars)
}
</script>

<style scoped>
.featured-products {
  padding: 40px 0;
}
.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
}
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}
.section-header h2 {
  color: #333;
  font-size: 1.8rem;
}
.view-all {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
}
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
}
.product-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;
}
.product-card:hover {
  transform: translateY(-5px);
}
.product-image {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #f8f9fa;
}
.product-image img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}
.product-info {
  padding: 15px;
  flex-grow: 1;
}
.product-title {
  font-size: 1rem;
  margin-bottom: 8px;
  color: #333;
}
.product-category {
  font-size: 0.85rem;
  color: #6c757d;
  margin-bottom: 8px;
}
.product-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #4b6cb7;
  margin-bottom: 8px;
}
.product-rating {
  display: flex;
  align-items: center;
  gap: 5px;
}
.stars {
  color: #ffc107;
}
.rating-count {
  font-size: 0.8rem;
  color: #6c757d;
}
.add-to-cart {
  background: pink;
  color: white;
  border: none;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  border-radius: 0 0 8px 8px;
}
.add-to-cart:hover {
  background: hotpink;
}
</style>
