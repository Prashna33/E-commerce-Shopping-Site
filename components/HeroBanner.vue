<template>
  <section class="hero-banner">
    <div class="container">
      <div class="hero-content">
        <h1>Best Deals on Fashion</h1>
        <p class="subtitle">WEARABLE</p>
        <p class="discount">Up to 75% OFF</p>
        <button class="cta-button" @click="handleShopNow">Shop Now</button>
      </div>
      <div class="hero-image">
        <img
          src="https://www.loveshackfancy.com/cdn/shop/files/Navigation_Tile_1-min.jpg?v=1710798398&width=1790"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
function handleShopNow() {
  // Redirect to shop page
  window.location.href = '/shop'
}
</script>

<style scoped>
.hero-banner {
  background: linear-gradient(to right, #ffdde1, #ee9ca7); /* light pink gradient */
  color: #333;
  padding: 60px 0;
}

.container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.hero-content {
  flex: 1 1 500px;
  padding: 20px;
}

.hero-content h1 {
  font-size: 2.8rem;
  margin-bottom: 20px;
  color: #b91c5d; /* deep pink for contrast */
}

.subtitle {
  font-size: 1.1rem;
  letter-spacing: 2px;
  margin-bottom: 10px;
  text-transform: uppercase;
  color: #e75480;
}

.discount {
  font-size: 1.6rem;
  font-weight: bold;
  color: #d63384;
  margin-bottom: 20px;
}

.cta-button {
  background: #ff6b81;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.cta-button:hover {
  background: #e74c68;
}

.hero-image {
  flex: 1 1 400px;
  text-align: center;
  padding: 20px;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }

  .hero-content h1 {
    font-size: 2.2rem;
  }
}
</style> 