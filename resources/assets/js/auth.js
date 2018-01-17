import Vue from './app.js';
import {router} from './app.js';

export default {
    user: {
        authenticated: false,
        profile: null
    },
    check() {
        let token = localStorage.getItem('id_token')
        alert(token);
        if (token !== null) {
            Vue.axios.get(
                'api/user?token=' + token,
            ).then(response => {
                this.user.authenticated = true
                this.user.profile = response.data.data
            })
        }
    },
    register(context, name, email, password) {
        Vue.axios.post(
            'api/register', 
            {name: name,email: email,password: password}
        ).then((response) => {
            console.log(response);
            context.success = true;
        });
    },
    signin(context, email, password) {
        Vue.axios.post(
            'api/signin',
            {
                email: email,
                password: password
            }
        ).then(response => {
            context.error = false
            localStorage.setItem('id_token', response.data.meta.token)
            Vue.axios.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token')

            this.user.authenticated = true
            this.user.profile = response.data.data

            router.push({
                name: 'dashboard'
            })
        }, response => {
            context.error = true
        })
    },
    signout() {
        localStorage.removeItem('id_token')
        this.user.authenticated = false
        this.user.profile = null

        router.push({
            name: 'Example'
        })
    }
}
