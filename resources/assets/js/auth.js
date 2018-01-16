import Vue from './app.js';
import {router} from './app.js';

export default {
    user: {
        authenticated: false,
        profile: null
    },
    register(context, name, email, password) {
        Vue.axios.post(
            'api/register', 
            {name: name,email: email,password: password}
        ).then((response) => {
            console.log(response);
            context.success = true;
        });
    }
}
