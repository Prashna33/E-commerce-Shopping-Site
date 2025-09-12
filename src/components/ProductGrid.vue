<template>
  <section class="products-grid">
    <Swiper
      :modules="[Navigation, Pagination]"
      :slides-per-view="4"
      :space-between="20"
      navigation
      pagination
      class="mySwiper"
    >
      <SwiperSlide v-for="product in products" :key="product.id">
        <div class="product-card">
          <div class="product-image" @click="viewProduct(product)">
            <img :src="product.image" :alt="product.title" />
          </div>
          <h3 class="product-title" @click="viewProduct(product)">
            {{ product.title }}
          </h3>
          <p class="product-price">${{ product.price }}</p>
          <button class="add-to-cart" @click.stop="addToCart(product)">
            Add to Cart
          </button>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const props = defineProps({
  products: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(["add-to-cart", "view-product"])

function addToCart(product) {
  emit("add-to-cart", product)
}

function viewProduct(product) {
  emit("view-product", product)
}
</script>

<style scoped>
.products-grid {
  margin-top: 20px;
}

.product-card {
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.product-image img {
  max-width: 150px;
  max-height: 150px;
  object-fit: contain;
}

.product-image,
.product-info {
  cursor: pointer;
}

.product-image:hover,
.product-info:hover {
  opacity: 0.8;
}

/* 🔥 Pink Add to Cart Button */
.add-to-cart {
  margin-top: 10px;
  background: #ff69b4; /* pink */
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.2s ease;
}

.add-to-cart:hover {
  background: #e75480; /* darker pink */
}
</style> 