const app = Vue.createApp({
    data: function () {
        return {
            usernames: [{name:'', email:'', body:''}]
        }
    }
})

app.component('comment-profile', {
    data: function () {
    return {
        user:{}
    }
    },
    template: '#commentTemplate',
    props: ['username'],

    created() { axios.get(`https://jsonplaceholder.typicode.com/comments/${this.username}`)
        .then(response => {
        this.user = response.data
        })
    }
})

app.mount('#app')