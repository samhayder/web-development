<template lang="">
  <div class="card w-[300px] h-fit border rounded-lg p-4 mb-5 bg-pink-50">
    <div class="mb-4">
      <label>Name On Card</label>
      <input
        type="text"
        class="border w-full p-1 mt-1"
        :value="nameOnCard"
        @input="handleInput('update:nameOnCard', $event)" />
    </div>
    <div class="mb-4">
      <label>Card Number</label>
      <input
        type="text"
        class="border w-full p-1 mt-1"
        :value="cardNumber"
        @input="handleInput('update:cardNumber', $event)" />
    </div>
    <div class="mb-4">
      <label>Expiry Date</label>
      <input
        type="text"
        class="border w-full p-1 mt-1"
        :value="expiry"
        @input="handleInput('update:expiry', $event)" />
    </div>
    <div class="mb-4">
      <label>CVV</label>
      <input
        type="text"
        class="border w-full p-1 mt-1"
        :value="cvv"
        @input="handleInput('update:cvv', $event)" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    nameOnCard: {
      type: String,
      default: "",
    },
    cardNumber: {
      type: String,
      default: "",
    },
    expiry: {
      type: String,
      default: "",
    },
    cvv: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  methods: {
    handleInput(eventName, e) {
      this.$emit(eventName, e.target.value);
    },
  },
};
</script>
<style lang=""></style>
