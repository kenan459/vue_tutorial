const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            paragraphVisible: true,
            inputColor: '',
            myColor: '',
        }
    },

    watcher: {
        myColor() {
            console.log ('append')
        },
    },

    computed: {
        paraClasses() {
            return {
                user1: this.inputClass === 'user1',
                user2: this.inputClass === 'user2',
                visible: this.paragraphVisible,
                hidden: !this.paragraphVisible
            }
        },

        colorSet() {
            return { backgroundColor: `${this.myColor}`};
        },
    },

    methods: {
        toggleParagraphVisibilty() {
            this.paragraphVisible = !this.paragraphVisible;
        },

        getColor(str) {
            console.log('log')
              this.myColor = str.target.value;
            },
    }
});

app.mount('#assignment')