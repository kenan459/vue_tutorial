const app = Vue.createApp({
  data() {
    return {
      enteredTask: '',
      tasks: [],
      tasksVisible: true,
      visibleText: 'Hide',
    };
  },

  computed: {
    toggleShowTasks() {
        this.visibleText = this.tasksVisible ? "Hide" : "Show";
        return {
            visible: this.tasksVisible,
            hidden: !this.tasksVisible,
        }
    }
  },

  methods: {
    newTask() {
        this.tasks.push(this.enteredTask);
    },

    toggleVisible() {
        this.tasksVisible = !this.tasksVisible;
    }
  },
});
app.mount("#assignment");
