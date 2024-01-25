const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "Jonez",
          name: "Jonez Garcia",
          phone: "09995557777",
          email: "jonez@localhost.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
    <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails()">{{ detailsVisible ? 'Hide' : 'Show'}} Details</button>
          <ul v-if="detailsVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
    </li>
    `,
  data() {
    return {
      detailsVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "09993335555",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
  },
});

app.mount("#app");
