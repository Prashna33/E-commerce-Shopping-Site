import { defineStore } from "pinia"

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: []
  }),
  getters: {
    itemCount: (state) => state.items.reduce((t, i) => t + i.quantity, 0),
    totalPrice: (state) =>
      state.items.reduce((t, i) => t + i.price * i.quantity, 0)
  },
  actions: {
    addToCart(product) {
      const existing = this.items.find((i) => i.id === product.id)
      if (existing) {
        existing.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
    },
    removeFromCart(id) {
      this.items = this.items.filter((i) => i.id !== id)
    },
    updateQuantity(id, qty) {
      const item = this.items.find((i) => i.id === id)
      if (item && qty > 0) item.quantity = qty
    },
    clearCart() {
      this.items = []
    }
  }
})
