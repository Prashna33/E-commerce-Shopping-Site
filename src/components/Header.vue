<template>
  <header class="header">
    <!-- Topbar -->
    <div class="topbar">
      <div class="topbar-left">
        Welcome to Worldwide Fashion & Gadgets!
      </div>
      <div class="topbar-right">
        <a href="#">Deliver to <strong>78986</strong></a>
        <a href="#">Track your order</a>
        <a href="#">All Offers</a>
      </div>
    </div>

    <!-- Main Header -->
    <div class="main-header container">
      <!-- Logo -->
      <div class="logo">Zinia.<span class="highlight">Flows</span></div>

      <!-- Search Box -->
      <div class="search-box">
        <input 
          type="text" 
          placeholder="Search essentials, products and more..." 
          v-model="searchQuery" 
        />
        <button @click="searchProducts" class="search-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 24 24">
            <path d="M21 20l-5.8-5.8a7 7 0 1 0-1.4 1.4L20 21l1-1zM4 10a6 6 0 1 1 12 0A6 6 0 0 1 4 10z"/>
          </svg>
        </button>
      </div>

      <!-- Actions -->
      <div class="actions">
        <button class="auth-btn" @click="$emit('toggle-auth')">
          <!-- User Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#e75480" viewBox="0 0 24 24">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
          </svg>
          <span>{{ isLoggedIn ? 'Sign Out' : 'Sign Up / Sign In' }}</span>
        </button>

        <!-- Cart -->
        <router-link to="/cart" class="cart-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#e75480" stroke="#e75480" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span class="cart-count">{{ cartStore.totalItems }}</span>
        </router-link>
      </div>
    </div>

    <!-- Categories Navigation -->
    <nav class="category-nav container">
      <a href="#">Electronics</a>
      <a href="#">Jewelery</a>
      <a href="#">Women's Clothing</a>
      <a href="#">Men's Clothing</a>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue"
import { useCartStore } from "../stores/cart"

// Props
defineProps({
  isLoggedIn: Boolean
})

// Pinia cart store
const cartStore = useCartStore()

// Search
const searchQuery = ref("")

const searchProducts = () => {
  alert("Searching for: " + searchQuery.value)
}
</script>

<style scoped>
* {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Topbar */
.topbar {
  background: #f9f9f9;
  font-size: 14px;
  color: #555;
  display: flex;
  justify-content: space-between;
  padding: 6px 20px;
  border-bottom: 1px solid #eee;
}
.topbar a {
  margin-left: 15px;
  text-decoration: none;
  color: #e75480;
  font-weight: 500;
}
.topbar a:hover {
  text-decoration: underline;
}

/* Main header */
.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
}

.logo {
  font-size: 28px;
  font-weight: 700;
  color: #e75480; 
}
.logo .highlight {
  font-style: italic;
  color: #d6336c; 
}

/* Search box */
.search-box {
  display: flex;
  flex: 1;
  max-width: 600px;
  margin: 0 30px;
}
.search-box input {
  flex: 1;
  padding: 8px 14px;
  border: 1px solid #e75480;
  border-radius: 4px 0 0 4px;
  font-size: 15px;
}
.search-btn {
  padding: 8px 14px;
  border: none;
  background: #e75480;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.search-btn:hover {
  background: #d6336c;
}

/* Actions */
.actions {
  display: flex;
  align-items: center;
  gap: 20px;
}
.auth-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  font-weight: 600;
  cursor: pointer;
  color: #e75480;
  font-size: 15px;
}
.auth-btn:hover {
  text-decoration: underline;
}
.cart-icon {
  position: relative;
  cursor: pointer;
  text-decoration: none;
}
.cart-count {
  position: absolute;
  top: -8px;
  right: -10px;
  background: #e75480;
  color: white;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Categories nav */
.category-nav {
  display: flex;
  gap: 25px;
  padding: 12px 20px;
  background: #f5f5f5;
  border-top: 1px solid #eee;
}
.category-nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 15px;
}
.category-nav a:hover {
  color: #e75480;
}
</style>
