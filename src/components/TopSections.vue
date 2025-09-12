<template>
  <section class="top-sections">
    <div class="container">
      
      <!-- Top Jewelery -->
      <div class="section-block jewelry-block">
        <div class="section-header"> 
          <h2>Top <span class="highlight">Jewelery</span></h2>
        </div>
        <Swiper
          :modules="[Autoplay, Navigation, Pagination]"
          :slides-per-view="4"
          :space-between="20"
          :autoplay="{ delay: 2500, disableOnInteraction: false }"
          navigation
          pagination
          class="products-swiper"
        >
          <SwiperSlide v-for="item in jewelry" :key="item.id">
            <div class="brand-card">
              <div class="image-wrapper">
                <img :src="item.image" :alt="item.title" />
                <span class="discount-badge">45% OFF</span>
              </div>
              <h4>{{ truncateTitle(item.title) }}</h4>
              <p class="price">
                <span class="discounted">Now ${{ discountedPrice(item.price) }}</span>
                <span class="original">${{ item.price }}</span>
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- Top Women's Clothing -->
      <div class="section-block womens-block">
        <div class="section-header">
          <h2>Top <span class="highlight">Women's Clothing</span></h2>
        </div>
        <Swiper
          :modules="[Autoplay, Navigation, Pagination]"
          :slides-per-view="4"
          :space-between="20"
          :autoplay="{ delay: 2500, disableOnInteraction: false }"
          navigation
          pagination
          class="products-swiper"
        >
          <SwiperSlide v-for="item in womensClothing" :key="item.id">
            <div class="brand-card">
              <div class="image-wrapper">
                <img :src="item.image" :alt="item.title" />
                <span class="discount-badge">45% OFF</span>
              </div>
              <h4>{{ truncateTitle(item.title) }}</h4>
              <p class="price">
                <span class="discounted">Now ${{ discountedPrice(item.price) }}</span>
                <span class="original">${{ item.price }}</span>
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- Top Electronics -->
      <div class="section-block electronics-block">
        <div class="section-header">
          <h2>Top <span class="highlight">Electronics</span></h2>
        </div>
        <Swiper
          :modules="[Autoplay, Navigation, Pagination]"
          :slides-per-view="4"
          :space-between="20"
          :autoplay="{ delay: 2500, disableOnInteraction: false }"
          navigation
          pagination
          class="products-swiper"
        >
          <SwiperSlide v-for="item in electronics" :key="item.id">
            <div class="brand-card">
              <div class="image-wrapper">
                <img :src="item.image" :alt="item.title" />
                <span class="discount-badge">45% OFF</span>
              </div>
              <h4>{{ truncateTitle(item.title) }}</h4>
              <p class="price">
                <span class="discounted">Now ${{ discountedPrice(item.price) }}</span>
                <span class="original">${{ item.price }}</span>
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- Top Men's Clothing -->
      <div class="section-block mens-block">
        <div class="section-header">
          <h2>Top <span class="highlight">Men's Clothing</span></h2>
        </div>
        <Swiper
          :modules="[Autoplay, Navigation, Pagination]"
          :slides-per-view="4"
          :space-between="20"
          :autoplay="{ delay: 2500, disableOnInteraction: false }"
          navigation
          pagination
          class="products-swiper"
        >
          <SwiperSlide v-for="item in mensClothing" :key="item.id">
            <div class="brand-card">
              <div class="image-wrapper">
                <img :src="item.image" :alt="item.title" />
                <span class="discount-badge">45% OFF</span>
              </div>
              <h4>{{ truncateTitle(item.title) }}</h4>
              <p class="price">
                <span class="discounted">Now ${{ discountedPrice(item.price) }}</span>
                <span class="original">${{ item.price }}</span>
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue"
import axios from "axios"

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

const jewelry = ref([])
const womensClothing = ref([])
const electronics = ref([])
const mensClothing = ref([])
const discountPercent = 45

onMounted(async () => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products")
    const allProducts = res.data

    jewelry.value = allProducts.filter(p => p.category === "jewelery")
    womensClothing.value = allProducts.filter(p => p.category === "women's clothing")
    electronics.value = allProducts.filter(p => p.category === "electronics")
    mensClothing.value = allProducts.filter(p => p.category === "men's clothing")
  } catch (err) {
    console.error("Failed to fetch products", err)
  }
})

function truncateTitle(title) {
  return title.length > 25 ? title.substring(0, 25) + "..." : title
}

function discountedPrice(price) {
  return (price - (price * discountPercent) / 100).toFixed(2)
}
</script>

<style scoped>
.top-sections {
  padding: 40px 0;
  background: #fff;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
}

.section-block {
  margin-bottom: 50px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.section-header h2 {
  font-size: 1.6rem;
  color: #333;
}

.section-header .highlight {
  font-weight: bold;
  color: #e75480; /* pink */
}

.view-all {
  text-decoration: none;
  font-weight: 500;
  color: #e75480; /* pink */
}

.products-swiper {
  padding-bottom: 20px;
}

.brand-card {
  flex: 0 0 200px;
  background: #f8f9fa;
  border-radius: 8px;
  text-align: center;
  padding: 15px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.brand-card:hover {
  transform: translateY(-5px);
}

.image-wrapper {
  position: relative;
}

.brand-card img {
  width: 100%;
  height: 150px;
  object-fit: contain;
  border-radius: 6px;
  margin-bottom: 10px;
}

.discount-badge {
  position: absolute;
  top: 8px;
  left: 8px;
  background: #e75480; /* pink badge */
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 5px;
}

.brand-card h4 {
  margin: 5px 0;
  font-size: 1rem;
  color: #333;
}

.price {
  font-size: 0.95rem;
  margin: 5px 0;
}

.price .discounted {
  color: #e75480; /* pink */
  font-weight: bold;
  margin-right: 8px;
}

.price .original {
  text-decoration: line-through;
  color: #777;
}
</style>
