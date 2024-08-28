<template lang="">
  <div class="w-[80vw] mx-auto my-5">
   
    <Forms></Forms>

    <!-- <nav>
      <ul class="flex">
        <li
          v-for="menu in menus"
          :key="menu"
          class="px-3 py-1 border cursor-pointer rounded-"
          :class="{ 'bg-purple-500 text-white': activeMenu === menu }"
          @click="activeMenu = menu">
          {{ menu }}
        </li>
      </ul>
    </nav>

    <div class="content mt-8">
      <keep-alive>
        <component :is="activeMenu" />
      </keep-alive>
    </div> -->

    <!-- <div class="credit_card_wrap">
      <h2 class="text-lg font-bold mb-3">Credit Card Input</h2>
    <Card 
      v-model:nameOnCard = "nameOnCard"
      v-model:cardNumber = "cardNumber"
      v-model:expiry = "expiry"
      v-model:cvv = "cvv"
    ></Card>

    <hr>

    <div class="card_output mt-3">
      <p>Name: {{nameOnCard}}</p>
      <p>Card Number: {{cardNumber}}</p>
      <p>Expiry: {{expiry}}</p>
      <p>CVV: {{cvv}}</p>
    </div>
    </div> -->
    <!-- end of credit card wrapper -->
  </div>
</template>
<script>
import Card from "./components/Card.vue";
import Forms from "./components/Forms.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";

export default {
  data() {
    return {
      nameOnCard: "Mr.",
      cardNumber: "",
      expiry: "",
      cvv: "",
      menus: ["Login", "Register", "Card"],
      activeMenu: "Login",
    };
  },
  components: {
    Card,
    Login,
    Register,
    Forms
  },
};
</script>
<style lang=""></style>
