// create vue app
let app = Vue.createApp({
  data() {
    return {
      inputText: "",
      count: 0,
      bgColor: "",

      msg: "Welcome to Vue-js World...",
      userInfo: {
        name: "Samsuddin",
        age: 35,
        github: "https://github.com/samhayder",
      },

      skills: ["HTML", "CSS", "JS"],
      newSkill: "",
    };
  },
  methods: {
    getCurrentTime() {
      let ct = new Date();
      return ct;
    },

    increment(amount, details) {
      this.count = this.count + amount;
      console.log(details);
    },
    decrement(amount, details) {
      if (this.count > 0) {
        this.count = this.count - amount;
      }
    },

    keyupModifier(e) {
      this.inputText = e.target.value;
    },

    addSkill() {
      this.skills.push(this.newSkill);
      this.newSkill = "";
    },
    removeSkill(index){
      this.skills.splice(index,1);
    }
  },
});

// mount create app
app.mount("#app");