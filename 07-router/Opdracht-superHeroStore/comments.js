const comments = {
    template: '#commentsTemplate',
    data: function () {
        return {
            info: null
        }
    },
mounted(){
    axios.get('https://jsonplaceholder.typicode.com/comments').then(response =>(this.info = response))
}
}
Vue.createApp(app).mount('#app')