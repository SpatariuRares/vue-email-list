Vue.config.devtools = true;

const app =new Vue({
    el: '#root',
    data: {
        mails: [],
    },
    mounted(){
        let mail=[];
        for (let i = 0; i <10;i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                mail.push(response.data.response);
                console.log(mail)
                if(mail.length==10){
                    this.mails=mail;
                }
            })
        }
    }

})