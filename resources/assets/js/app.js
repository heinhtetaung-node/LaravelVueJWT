// app.js
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);
import App from './components/App.vue';
import Example from './components/ExampleComponent.vue';
import Register from './components/Register.vue';
import Signin from './components/login.vue';
export default Vue;
const routes = [
  {
      name: 'Example',
      path: '/',
      component: Example
  },
  {
      name: 'Register',
      path: '/register',
      component: Register
  },
  {
      path: '/signin',
      name: 'signin',
      component: Signin
  }
];
export var router = new VueRouter({ mode: 'history', routes: routes});
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
