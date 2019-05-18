import Vue from 'vue';
import VueRouter from "vue-router";
import Login from "./components/Login";
import Register from "./components/Register";
import TitleHeader from "./components/TitleHeader";

export function registerComponents() {
    register();
    Vue.use(VueRouter);
}

function register() {
    Vue.component('app-login', Login);
    Vue.component('app-register', Register);
    Vue.component('app-title-header', TitleHeader);
}
