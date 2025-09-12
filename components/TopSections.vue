<template>
  <section class="top-sections">
    <div class="container">
      
      <!-- Top Jewelry -->
      <div class="section-block jewelry-block">
        <div class="section-header">
          <h2>Top <span class="highlight">Jewelery</span></h2>
          <a href="#" class="view-all">View All ></a>
        </div>
        <div class="scroll-container">
          <div 
            v-for="item in jewelry" 
            :key="item.id" 
            class="brand-card"
          >
            <img :src="item.image" :alt="item.title" />
            <h4>{{ truncateTitle(item.title) }}</h4>
            <p>Only ${{ item.price }}</p>
          </div>
        </div>
      </div>

      <!-- Top Women's Clothing -->
      <div class="section-block womens-block">
        <div class="section-header">
          <h2>Top <span class="highlight">Women's Clothing</span></h2>
          <a href="#" class="view-all">View All ></a>
        </div>
        <div class="scroll-container">
          <div 
            v-for="item in womensClothing" 
            :key="item.id" 
            class="brand-card"
          >
            <img :src="item.image" :alt="item.title" />
            <h4>{{ truncateTitle(item.title) }}</h4>
            <p>Only ${{ item.price }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const jewelry = ref([]);
const womensClothing = ref([]);

// fetch products from API
onMounted(async () => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    const allProducts = res.data;

    // filter categories
    jewelry.value = allProducts.filter(p => p.category === "jewelery");
    womensClothing.value = allProducts.filter(p => p.category === "women's clothing");
  } catch (err) {
    console.error("Failed to fetch products", err);
  }
});

function truncateTitle(title) {
  return title.length > 25 ? title.substring(0, 25) + "..." : title;
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
}

/* Both jewelry and women's clothing use pink */
.jewelry-block .highlight,
.womens-block .highlight {
  color: #e75480; /* pink */
}

.view-all {
  text-decoration: none;
  font-weight: 500;
}

.jewelry-block .view-all,
.womens-block .view-all {
  color: #e75480; /* pink */
}

.scroll-container {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 10px;
}

.brand-card {
  flex: 0 0 180px;
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

.brand-card img {
  width: 100%;
  height: 120px;
  object-fit: contain;
  border-radius: 6px;
  margin-bottom: 10px;
}

.brand-card h4 {
  margin: 5px 0;
  font-size: 1rem;
  color: #333;
}

.brand-card p {
  font-size: 0.9rem;
  color: #e75480;
  font-weight: bold;
}
</style>
