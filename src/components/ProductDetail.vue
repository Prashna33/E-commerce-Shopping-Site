<template>
  <div class="product-detail-page">
    <div class="container">
      <button class="back-button" @click="emit('back-to-products')">
        ← Back to Products
      </button>

      <div class="product-detail" v-if="product">
        <div class="product-image">
          <img :src="product.image" :alt="product.title" />
        </div>

        <div class="product-info">
          <h1 class="product-title">{{ product.title }}</h1>
          <div class="product-category">{{ formatCategory(product.category) }}</div>

          <div class="product-rating">
            <span class="stars">{{ generateStars(product.rating?.rate) }}</span>
            <span class="rating-count">
              ({{ product.rating?.count || 0 }} reviews)
            </span>
          </div>

          <div class="product-price">${{ product.price }}</div>

          <p class="product-description">{{ product.description }}</p>

          <div class="product-actions">
            <div class="quantity-selector">
              <label for="quantity">Quantity:</label>
              <select id="quantity" v-model="quantity">
                <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
              </select>
            </div>

            <button class="add-to-cart-btn" @click="addToCart">
              Add to Cart
            </button>

            <button class="buy-now-btn">
              Buy Now
            </button>
          </div>

          <div class="product-features">
            <h3>Features:</h3>
            <ul>
              <li>Free shipping on orders over $50</li>
              <li>30-day money-back guarantee</li>
              <li>Secure payment options</li>
            </ul>
          </div>
        </div>
      </div>

      <div v-else>
        <p>Loading product...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
  product: {
    type: Object,
    required: false
  }
})

const emit = defineEmits(["add-to-cart", "back-to-products"])

const quantity = ref(1)

function addToCart() {
  if (props.product) {
    for (let i = 0; i < quantity.value; i++) {
      emit("add-to-cart", props.product)
    }
  }
}

function formatCategory(category) {
  if (!category) return ""
  return category
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

function generateStars(rating) {
  if (!rating) return "☆☆☆☆☆"
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)
  return "★".repeat(fullStars) + (halfStar ? "½" : "") + "☆".repeat(emptyStars)
}
</script>

<style scoped>
.product-detail-page {
  padding: 20px 0;
  min-height: 100vh;
  background-color: #f8f9fa;
}

.back-button {
  background: #4b6cb7;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
  font-weight: 500;
}

.back-button:hover {
  background: #3a5999;
}

.product-detail {
  display: flex;
  gap: 40px;
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.product-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  padding: 30px;
  border-radius: 8px;
}

.product-image img {
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
}

.product-info {
  flex: 1;
}

.product-title {
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #333;
}

.product-category {
  font-size: 1rem;
  color: #6c757d;
  margin-bottom: 15px;
  text-transform: capitalize;
}

.product-rating {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.stars {
  color: #ffc107;
  font-size: 1.2rem;
}

.rating-count {
  color: #6c757d;
}

.product-price {
  font-size: 1.8rem;
  font-weight: bold;
  color: #4b6cb7;
  margin-bottom: 20px;
}

.product-description {
  line-height: 1.6;
  margin-bottom: 25px;
  color: #555;
}

.product-actions {
  margin-bottom: 30px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}

.quantity-selector {
  margin-bottom: 15px;
}

.quantity-selector label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

.quantity-selector select {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.add-to-cart-btn,
.buy-now-btn {
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  margin-right: 10px;
}

.add-to-cart-btn {
  background: #4b6cb7;
  color: white;
}

.add-to-cart-btn:hover {
  background: #3a5999;
}

.buy-now-btn {
  background: #ff6b6b;
  color: white;
}

.buy-now-btn:hover {
  background: #ff5252;
}

.product-features {
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.product-features h3 {
  margin-bottom: 10px;
  color: #333;
}

.product-features ul {
  list-style-type: none;
  padding-left: 0;
}

.product-features li {
  padding: 5px 0;
  color: #555;
  position: relative;
  padding-left: 20px;
}

.product-features li:before {
  content: "✓";
  color: #4b6cb7;
  position: absolute;
  left: 0;
}

@media (max-width: 768px) {
  .product-detail {
    flex-direction: column;
  }

  .product-image {
    padding: 20px;
  }

  .product-title {
    font-size: 1.5rem;
  }
}
</style>
