const app = Vue.createApp({
    data() {
        return {
        thealert: 'new alert',
        theOutput: 'Output..',
        theUpdate: 'Update'
        }
    },

    methods: {
        tweet() {
            alert(this.thealert);
            // alert('test');
        },
        setOutput(input) {
            this.theOutput = input.target.value;
        },
        setUpdate(input) {
            this.theUpdate = input.target.value;
        }
    }
})

app.mount("#assignment")