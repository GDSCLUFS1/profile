const { createApp } = Vue

createApp({
    data() {
        return {
            spinner:true,
            api: 'https://script.google.com/macros/s/AKfycbzAi8-666lI7ErYCoQXdksIuGDZXczn_J3wx0mxHBGoApCBfE5TzX9994DojwJ79WWL/exec',
            profile: ''
        }
    },
    mounted() {
        fetch(this.api).then(res => res.json()).then(res => {
            this.profile = res
            // console.log(this.profile)
            this.spinner = false;
        })
    }
}).mount('#app')