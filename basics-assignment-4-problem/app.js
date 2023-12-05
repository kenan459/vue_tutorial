const app = Vue.createApp({
  data() {
    return {
      myClass: "",
      classVisible: true,
      colorStyle: "",
    };
  },

  computed: {
    classSet() {
      if (this.myClass === "user1") {
        return { user1: true };
      } else if (this.myClass === "user2") {
        return { user2: true };
      }
    },

    visibilitySet() {
      if (this.classVisible === false) {
        return { hidden: true };
      }
    },

    colorSet() {
        return { color: `${this.colorStyle}`};
    }
  },

  methods: {
    inputColor(str) {
    //   console.log(str.target.value);
      this.colorStyle = str.target.value;
    },

    userClassEntered(str) {
      this.myClass = str.target.value;
    },

    toggleVisibility() {
      console.log("toggle");
      if (this.classVisible === true) {
        this.classVisible = false;
      } else if (this.classVisible === false) {
        this.classVisible = true;
      }
    },
  },
});

app.mount("#assignment");
