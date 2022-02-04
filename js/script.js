Vue.config.devtools = true;



const root = new Vue ({
    el: '#root',
    data: {
        emails: [],
    },
    methods: {
        getRandomEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(res => {
                console.log(res);
                this.emails.push(res.data.response);
            })
        },
        getRandomEmails(number){
            for(let i = 0; i < number; i++) {
                this.getRandomEmail();
        }
        }
    },
    mounted() {
        this.getRandomEmails(10);
    },
    
})