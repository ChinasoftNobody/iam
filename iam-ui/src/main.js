import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueResource from 'vue-resource'
import {Router} from "./router";
import {registerComponents} from "./components";
import App from "./App";
import VueRouter from "vue-router";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueResource);
registerComponents();
new Vue({
    router: Router,
    render: h => h(App)
}).$mount('#app');
