<template>
  <section class="category-section">
    <div class="container">
      <h2>Shop by Category</h2>
      <div class="categories">
        <div
          class="category"
          v-for="category in categories"
          :key="category"
          @click="selectCategory(category)"
          :class="{ active: selectedCategory === category }"
        >
          {{ formatCategoryName(category) }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
  selectedCategory: {
    type: String,
    default: null,
  },
})

const emit = defineEmits(["filter-category"])

const selectCategory = (category) => {
  emit("filter-category", category)
}

const formatCategoryName = (category) => {
  return category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}
</script>

<style scoped>
.category-section {
  padding: 40px 0;
  background: white;
}
.category-section h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}
.categories {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}
.category {
  background: #f1f3f5;
  padding: 15px 25px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
}
.category:hover {
  background: #667eea;
  color: white;
}
.category.active {
  background: #667eea;
  color: white;
}
</style>
