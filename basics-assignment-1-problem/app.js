// const date = new Date();

const app = Vue.createApp({
  data() {
    return {
      myName: "Kenan",
      birthYear: 1997,
    //   image: `<img src="https://images.theconversation.com/files/393210/original/file-20210401-13-z6rl6z.jpg?ixlib=rb-1.1.0&rect=0%2C292%2C3008%2C1504&q=45&auto=format&w=1356&h=668&fit=crop" />`
      image: `https://images.theconversation.com/files/393210/original/file-20210401-13-z6rl6z.jpg?ixlib=rb-1.1.0&rect=0%2C292%2C3008%2C1504&q=45&auto=format&w=1356&h=668&fit=crop`
    };
  },

  methods: {
    getAge() {
      date = new Date();
      age = date.getFullYear() - this.birthYear;
      return age;
    },

    randNum() {
        num = Math.floor(Math.random() * 2);
        return num
    },

  },
});

app.mount("#assignment");
