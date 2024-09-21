// create vue app
let app = Vue.createApp({
  data() {
    return {
      num1: "",
      num2: "",
      result: "",
    };
  },
  methods: {
    getSum() {
      this.result = this.num1 + this.num2;
    },
    getSubtract() {
      this.result = this.num1 - this.num2;
    },
    getMultiply() {
      this.result = this.num1 * this.num2;
    },
    getDivision() {
      this.result = this.num1 / this.num2;
    },
    reset() {
      this.num1 = "";
      this.num2 = "";
      this.result = "";
    },
  },
});

// mount create app
app.mount("#app");
