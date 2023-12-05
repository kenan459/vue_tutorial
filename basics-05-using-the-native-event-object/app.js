const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      mid: "e",
      lastname: "",
      fullName: "",
    };
  },

  watch: {
    counter(val) {
      if (val > 50 || val < -30 ) this.counter = 0;
    },

    // name(value) {
    //   if (value === "") {
    //     this.fullName = "";
    //   } else this.fullName = value + " " + "Serran";
    // },
  },

  computed: {
    fullname() {
      console.log('running computed');
      if (this.name === '' || this.lastname === '' ) {
        return '';
      }
      return this.name + ' ' + this.lastname;
    }
  },

  methods: {
    setMid(str) {
      this.mid = event.target.value;
    },

    // outputFullName() {
    //   console.log("running method");
    //   if (this.name === "") {
    //     return "";
    //   }
    //   return this.name + " " + "Serran";
    // },
    // setName(event, lastName) {
    //   this.name = event.target.value + " " + lastName;
    // },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetName() {
      this.name = "";
    },
  },
});

app.mount("#events");
