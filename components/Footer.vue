<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Zinia.Flows</h3>
          <p>Your one-stop shop for all your needs</p>
        </div>
        <div class="footer-section">
          <h4>Most Popular Categories </h4>
          <a href="#">Jewelery</a>
          <a href="#">Electronics</a>
          <a href="#">Women's Clothing</a>
          <a href="#">Men's Clothing </a>
        </div>
        <div class="footer-section">
          <h4>Customer Service</h4>
          <a href="#"> About Us</a>
          <a href="#">FAQ</a>
          <a href="#">Returns & Refunds</a>
          <a href="#">Shipping Info</a>
        </div>
        <div class="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@ziniaflows.com</p>
          <p>Phone: +1 (800) 123-4567</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Zinia.Flows. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
defineOptions({
  name: 'Footer'
})
</script>

<style scoped>
.footer {
  background: #8b004b; 
  color: white;
  padding: 40px 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
}

.footer-section h3,
.footer-section h4 {
  margin-bottom: 15px;
  color: #fff;
}

.footer-section p {
  margin-bottom: 10px;
  color: #f8ddea;
}

.footer-section a {
  display: block;
  color: #f8ddea;
  text-decoration: none;
  margin-bottom: 8px;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: #ff69b4; 
}

.footer-bottom {
  border-top: 1px solid #a3005a;
  padding-top: 20px;
  text-align: center;
  color: #f8ddea;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style> 