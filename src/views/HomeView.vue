<template>
  <div class="home-page">
    <header class="header">
      <h1 class="logo">صيدلية شفاء</h1>
      <p class="tagline">صحتك تهمنا</p>
    </header>

    <main class="main-content">
      <h2 class="section-title">أحدث المنتجات</h2>
      <div v-if="loading" class="loading-message">
        جاري تحميل المنتجات...
      </div>
      <div v-else-if="error" class="error-message">
        حدث خطأ أثناء تحميل المنتجات.
      </div>
      <div v-else class="product-grid">
        <div v-for="product in products" :key="product.id" class="product-card">
          <img :src="product.image || 'https://via.placeholder.com/300'" :alt="product.name" class="product-image">
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-price">{{ product.price }} ريال</p>
          <button class="add-to-cart-button">أضف إلى السلة</button>
        </div>
      </div>
    </main>

    <footer class="footer">
      <p>© 2025 صيدلية شفاء. جميع الحقوق محفوظة.</p>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomeView',
  data() {
    return {
      products: [], // مصفوفة لتخزين المنتجات
      loading: true, // مؤشر للتحميل
      error: null,   // متغير لتخزين رسائل الأخطاء
    };
  },
  // دالة تُنفذ تلقائيًا عند تحميل المكون
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get('http://192.168.1.119:8055/items/products');
        this.products = response.data.data;
        this.loading = false;
      } catch (error) {
        this.error = 'تعذر الاتصال بالخادم.';
        this.loading = false;
        console.error('Error fetching products:', error);
      }
    }
  }
};
</script>

<style scoped>
/*
  ... الكود الخاص بالـ CSS لا يزال كما هو
*/
.home-page {
  text-align: center;
  font-family: Arial, sans-serif;
  color: #333;
  direction: rtl; /* لجعل الاتجاه من اليمين لليسار */
}

.header {
  background-color: #007bff;
  color: white;
  padding: 40px 20px;
}

.logo {
  font-size: 2.5em;
  margin: 0;
}

.tagline {
  font-size: 1.2em;
  margin: 5px 0 0;
  color: #e9ecef;
}

.main-content {
  padding: 40px 20px;
}

.section-title {
  font-size: 2em;
  margin-bottom: 30px;
  color: #007bff;
  border-bottom: 2px solid #007bff;
  display: inline-block;
  padding-bottom: 5px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center;
}

.product-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 300px;
}

.product-image {
  width: 100%;
  border-radius: 4px;
  margin-bottom: 15px;
}

.product-name {
  font-size: 1.5em;
  color: #333;
  margin: 0 0 10px;
}

.product-price {
  font-size: 1.2em;
  color: #28a745;
  margin: 0 0 15px;
  font-weight: bold;
}

.add-to-cart-button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s;
}

.add-to-cart-button:hover {
  background-color: #218838;
}

.footer {
  background-color: #333;
  color: white;
  padding: 20px;
  margin-top: 40px;
}
.loading-message, .error-message {
  font-size: 1.5em;
  margin: 50px 0;
  color: #555;
}
</style>