let app = Vue.createApp({
  data() {
    return {
      review: "",
      newSkill:{name:"", experience: 0},
      skills: [
        { name: "HTML", experience: 5 },
        { name: "CSS", experience: 4 },
        { name: "JS", experience: 7 },
        { name: "PHP", experience: 11 },
        { name: "Node js", experience: 6 },
        { name: "Vue js", experience: 9 },
        { name: "Go", experience: 10 },
        { name: "Java", experience: 15 },
      ],
    };
  },

  computed: {
    totalSkill() {
      return this.skills.length;
    },

    experiencedSkill() {
      this.skills.filter(item => ({}))
    }
  },

  methods: {
    addSkill() {
      this.skills.push(this.newSkill);      
    },

    removeItem(i) {
      this.skills.splice(i,1);
    }
    /* totalSkill(){
      return this.skills.length;
    } */
  },
});

app.mount("#app");
