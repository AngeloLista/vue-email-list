Vue.config.devtools = true;



const root = new Vue ({
    el: '#root',
    data: {
        emails: [],
        mailNum: 10
    },
    methods: {
        getRandomEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(res => {
                const email = res.data.response;
                if (!this.emails.includes(email)) this.emails.push(email);
                if (this.emails.length < this.mailNum) this.getRandomEmail();
            })
        },
        
    },
    mounted() {
        this.getRandomEmail(this.mailNum);
    },
    
})