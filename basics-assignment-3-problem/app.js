const app = Vue.createApp({
  data() {
    return {
      count: 0,
      theState: "Awaiting Input",
      condition: 0,
    };
  },

  watch: {

    condition(str) {
      if (this.condition === 1) {
        console.log("gameOver");

        const that = this;
        setTimeout(function () {
          that.count = 0;
          that.condition = 0;
          that.theState = "Awaiting Input";
        }, 5000);
      }
    },

    //MyAnswer
    // condition(str) {
    //   if (this.condition === 1) {
    //     console.log("gameOver");

    //     const that = this;
    //     setTimeout(function () {
    //       that.count = 0;
    //       that.condition = 0;
    //       that.theState = "Awaiting Input";
    //     }, 5000);
    //   }
    // },
  },

  computed: {
    result() {
      console.log(this.count);
      if (this.count === 0) return (this.theState = "Awaiting Input");
      else if (this.count < 37) return (this.theState = "Not there yet...");
      else if (this.count > 37 && this.condition != 1) {
        this.condition = 1;
        return (this.theState = "You added too much!");
      } else if (this.count === 37) {
        this.condition = 1;
        return (this.theState = "You added just right!");
      }
    },
  },

  methods: {
    addFive() {
      this.count += 5;
    },

    addOne() {
      this.count++;
    },
  },
});

app.mount("#assignment");
