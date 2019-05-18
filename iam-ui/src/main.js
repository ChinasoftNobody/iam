import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueResource from 'vue-resource'
import {Router} from "./router";
import {registerComponents} from "./components";
import App from "./App";
import VueCookies from 'vue-cookies';
import VueRouter from "vue-router";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueCookies);
registerComponents();
new Vue({
    render: h => h(App),
    router: Router
}).$mount('#app');
