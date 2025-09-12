<template>
    <div class="cart-page container">
      <h2>Your Cart</h2>
  
      <!-- Empty state -->
      <div v-if="cartStore.items.length === 0" class="empty-cart">
        <p>Your cart is empty</p>
        <router-link to="/" class="back-home">Go back to shopping</router-link>
      </div>
  
      <!-- Cart items -->
      <div v-else class="cart-content">
        <div
          class="cart-item"
          v-for="item in cartStore.items"
          :key="item.id"
        >
          <img :src="item.image" :alt="item.title" />
          <div class="cart-item-details">
            <h3>{{ item.title }}</h3>
            <p class="price">$ {{ item.price.toFixed(2) }}</p>
  
            <div class="quantity-controls">
              <button @click="cartStore.decreaseQuantity(item.id)">-</button>
              <span>{{ item.quantity }}</span>
              <button @click="cartStore.increaseQuantity(item.id)">+</button>
            </div>
  
            <button class="remove-btn" @click="cartStore.removeFromCart(item.id)">
              Remove
            </button>
          </div>
        </div>
  
        <!-- Cart Summary -->
        <div class="cart-summary">
          <h3>Total: $ {{ cartStore.totalPrice.toFixed(2) }}</h3>
          <button class="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useCartStore } from "../stores/cart"
  
  const cartStore = useCartStore()
  </script>
  
  <style scoped>
  .cart-page {
    padding: 20px;
  }
  h2 {
    margin-bottom: 20px;
  }
  .empty-cart {
    text-align: center;
    margin-top: 50px;
  }
  .empty-cart p {
    font-size: 18px;
    margin-bottom: 15px;
  }
  .back-home {
    color: #e75480;
    text-decoration: none;
    font-weight: bold;
  }
  .cart-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .cart-item {
    display: flex;
    gap: 20px;
    padding: 15px;
    border: 1px solid #eee;
    border-radius: 8px;
    background: #fff;
  }
  .cart-item img {
    width: 100px;
    height: auto;
    border-radius: 6px;
  }
  .cart-item-details {
    flex: 1;
  }
  .price {
    font-weight: bold;
    color: #e75480;
  }
  .quantity-controls {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0;
  }
  .quantity-controls button {
    width: 28px;
    height: 28px;
    border: 1px solid #ddd;
    background: #f8f8f8;
    cursor: pointer;
    border-radius: 4px;
  }
  .remove-btn {
    background: none;
    border: none;
    color: #e75480;
    font-weight: bold;
    cursor: pointer;
    margin-top: 5px;
  }
  .cart-summary {
    text-align: right;
    margin-top: 20px;
  }
  .checkout-btn {
    background: #e75480;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
  }
  .checkout-btn:hover {
    background: #d6336c;
  }
  </style>
  