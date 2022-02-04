Vue.config.devtools = true;

axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {console.log(res.data.response);})

const root = new Vue ({
    el: '#root',
    data: {

    }
})