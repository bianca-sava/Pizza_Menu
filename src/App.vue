<template>
  <div class="container-fluid h-100">
    <div class="row h-100">
      <div class="col-9 p-4">
        <div class="text-center title-holder">
          <span class="subtitle">Papa's Pizzeria</span>
          <h1 class="title">CEA MAI BUNA PIZZA DIN ORAS</h1>
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
                <button type="button" class="add-cart">Adauga in cos</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-3 cart p-4">
        <h3 class="title">Cosul tau</h3>
        <div class="order-items" v-if="cart.length > 0">
          <div class="order-item mb-4" v-for="(item,index) in cart" :key="index">

            <img class="order-item-image" :src="`/images/${item.image}`" :alt="item.name">
            <div class="order-item-content">
              <h5>
                {{ item.name }} - {{item.price.toFixed(2) }} Lei
              </h5>

              <p>
                <button type="button" class="add">+</button>
                <button type="button" class="remove">-</button>
              </p>

              <div class="order-item-details">
                <spam>
                  <strong>Calorii:</strong> {{item.calories}} kcal
                </spam>
              </div>
            </div>
            <button type = "button" clas="remove-item">X</button>
          </div>
        </div>
        <div class="cart-empty" v-else>
          <p class="text-center">Cosul este gol</p>
        </div>
        <div class="total-section">
          <h6 class="total-title">Total:</h6>
          <span class="amount">0 Lei</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const menu = ref([
  { id: 1, image: "pizza-1.png", name: "Diavola", price: 30, calories: 850 },
  { id: 2, image: "pizza-2.png", name: "Pizza Pollo", price: 50, calories: 920 },
  { id: 3, image: "pizza-3.png", name: "Suprema", price: 55, calories: 1050 },
  { id: 4, image: "pizza-4.png", name: "Pizza con Funghi", price: 45, calories: 780 },
  { id: 5, image: "pizza-5.png", name: "Quattro Formaggi", price: 55, calories: 1100 },
  { id: 6, image: "pizza-6.png", name: "Pomodoro", price: 45, calories: 720 },
  { id: 7, image: "pizza-7.png", name: "Pizza Casei", price: 45, calories: 980 },
  { id: 8, image: "pizza-8.png", name: "Pizza Vegetariana", price: 35, calories: 650 }
]);

const cart = ref([
]);

const addPizza = (item) => {
  const pizza = menu.find(p => p.id === item.id);
  console.log(pizza);
};

</script>

<style>
</style>