const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: ''
    };
  },
  methods: {
    newName(){
      this.confirmedName = this.name
    },
    submitForm(event) {
      // event.preventDefault();
    },
    setName(event, lastname) {
      this.name = event.target.value + " " + lastname;
    },

    add(num) {
      this.counter += num;
    },

    minus(num) {
      this.counter -= num;
    },
  },
});

app.mount("#events");
