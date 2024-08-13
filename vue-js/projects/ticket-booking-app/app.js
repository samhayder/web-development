const app = Vue.createApp({
  data() {
    return {
      name: "",
      mobile: "",
      ticketConfirm: false,

      appliedCoupon: null,
      couponCode: "",
      coupons: [
        { code: "100TAKAOFF", discount: 100 },
        { code: "200TAKAOFF", discount: 200 },
      ],

      seatStatus: {
        sold: {
          text: "sold",
          color: "#ff0000",
        },
        available: {
          text: "Available",
          color: "#fff",
        },
        booked: {
          text: "Booked",
          color: "#333333",
        },
        selected: {
          text: "Selected",
          color: "#00ff00",
        },
      },

      seats: [
        {
          name: "A1",
          type: "available",
          price: 500,
        },
        {
          name: "A2",
          type: "sold",
          price: 500,
        },
        {
          name: "A3",
          type: "booked",
          price: 500,
        },
        {
          name: "A4",
          type: "available",
          price: 500,
        },
        {
          name: "B1",
          type: "available",
          price: 500,
        },
        {
          name: "B2",
          type: "available",
          price: 500,
        },
        {
          name: "B3",
          type: "available",
          price: 500,
        },
        {
          name: "B4",
          type: "available",
          price: 500,
        },
        {
          name: "C1",
          type: "available",
          price: 500,
        },
        {
          name: "C2",
          type: "available",
          price: 500,
        },
        {
          name: "C3",
          type: "available",
          price: 500,
        },
        {
          name: "C4",
          type: "available",
          price: 500,
        },
        {
          name: "D1",
          type: "available",
          price: 500,
        },
        {
          name: "D2",
          type: "available",
          price: 500,
        },
        {
          name: "D3",
          type: "available",
          price: 500,
        },
        {
          name: "D4",
          type: "available",
          price: 500,
        },
        {
          name: "E1",
          type: "available",
          price: 400,
        },
        {
          name: "E2",
          type: "sold",
          price: 400,
        },
        {
          name: "E3",
          type: "sold",
          price: 400,
        },
        {
          name: "E4",
          type: "sold",
          price: 400,
        },
        {
          name: "F1",
          type: "available",
          price: 350,
        },
        {
          name: "F2",
          type: "available",
          price: 350,
        },
        {
          name: "F3",
          type: "available",
          price: 350,
        },
        {
          name: "F4",
          type: "available",
          price: 350,
        },
        {
          name: "G1",
          type: "available",
          price: 300,
        },
        {
          name: "G2",
          type: "available",
          price: 300,
        },
        {
          name: "G3",
          type: "available",
          price: 300,
        },
        {
          name: "G4",
          type: "available",
          price: 300,
        },
        {
          name: "H1",
          type: "available",
          price: 300,
        },
        {
          name: "H2",
          type: "available",
          price: 300,
        },
        {
          name: "H3",
          type: "available",
          price: 300,
        },
        {
          name: "H4",
          type: "available",
          price: 300,
        },
      ],
    };
  },

  computed: {
    selectedSeats() {
      let sc = this.seats.filter((item) => item.type === "selected");

      return sc;
    },

    totalPrice() {
      let tp = 0;
      this.selectedSeats.forEach((item) => {
        tp += item.price;
      });

      if (this.appliedCoupon !== null) {
        tp = tp - this.appliedCoupon.discount;
      }
      return tp;
    },
  },

  methods: {
    targetedSeatHandler(i) {
      let targetSeat = this.seats[i];

      if (targetSeat.type === "sold" || targetSeat.type === "booked") {
        alert("Not select this seat");
        return;
      }

      if (targetSeat.type === "available" && this.selectedSeats.length > 2) {
        alert("You can select 3 seats");
        return;
      }

      targetSeat.type =
        targetSeat.type === "selected" ? "available" : "selected";

      return targetSeat;
    },

    confirmTicket() {
      if (this.name === "" || this.mobile === "") {
        alert("Please provide name and mobile number");
      } else {
        this.ticketConfirm = true;
      }
    },

    resetTicket() {
      this.ticketConfirm = false;
      this.name = "";
      this.mobile = "";
      this.appliedCoupon = null;

      this.seats.forEach(seat => {
        if (seat.type === "selected") {
          seat.type = "sold";
        }
      })
    }
  },

  watch: {
    couponCode(newValue) {
      if (newValue.length === 10) {
        let searchCoupon = this.coupons.filter(
          (item) => item.code === newValue
        );

        if (searchCoupon.length === 1) {
          this.appliedCoupon = searchCoupon[0];
          this.couponCode = "";
        } else {
          alert("Invalid coupon code");
        }
      }
    },
  },
});

app.mount('#app')