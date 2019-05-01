import Vue from 'vue';
import VueRouter from "vue-router";
import Login from "./components/Login";

export function registerComponents() {
    register();
    Vue.use(VueRouter);
}

function register() {
    Vue.component('app-login', Login);
}
