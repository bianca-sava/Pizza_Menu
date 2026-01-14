<template>
  <div class="container-fluid h-100">
    <div class="row h-100">
      <div class="col-9 p-4">
        <div class="text-center title-holder">
          <span class="subtitle">CHOOSE YOUR FLAVOR</span>
          <h1 class="title">THE BEST PIZZA MENU IN TOWN</h1>
          <p class="text">
            Alege pizza preferată!
          </p>
        </div>

        <div class="row row-cols-4 mt-4">
          <div v-for="item in menu" :key="item.id" class="col justify-content-center text-center mb-4">
            <div class="d-flex flex-column item">
              <img class="w-100" :src="`/images/${item.image}`" :alt="item.name">
              <div class="p-3">
                <h5 class="item-name">{{ item.name }}</h5>
                <h6 class="item-price">{{ item.price }} Lei</h6>
                <button type="button" class="add-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-3 cart p-4">
        <h3 class="title">Your Basket</h3>
        <div class="cart-empty">
          <p class="text-center">Your basket is empty</p>
        </div>
        <div class="total-section">
          <h6 class="total-title">Total payment:</h6>
          <span class="amount">0 Lei</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const menu = ref([
  { id: 1, image: "pizza-1.png", name: "Diavola", price: 30 },
  { id: 2, image: "pizza-2.png", name: "Savoarea Mării", price: 50 },
  { id: 3, image: "pizza-3.png", name: "Suprema", price: 55 },
  { id: 4, image: "pizza-4.png", name: "Pizza con Funghi", price: 45 },
  { id: 5, image: "pizza-5.png", name: "Quattro Formaggi", price: 25 },
  { id: 6, image: "pizza-6.png", name: "Pomodoro", price: 85 },
  { id: 7, image: "pizza-7.png", name: "Pizza Casei", price: 65 },
  { id: 8, image: "pizza-8.png", name: "Pizza Vegetariana", price: 95 }
]);
</script>

<style>
</style>