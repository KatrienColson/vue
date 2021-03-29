const comments = {
    template: '#commentTemplate',
    data: function () {
        return {
            comments: null
        }
    },

    mounted() {
        axios.get(`https://jsonplaceholder.typicode.com/users/10/comments?&_limit=10`)
            .then(response => this.comments = response.data)
    }
}

