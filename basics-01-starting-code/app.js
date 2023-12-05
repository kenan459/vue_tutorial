const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish!',
            courseGoalB: 'Master!',
            h3: '<h3>H3H3!</h3>',
            vueLink: 'https://www.google.com',
            add: 3+4
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        },
        prntHTML() {
            
        }
    }
});

app.mount('#user-goal')