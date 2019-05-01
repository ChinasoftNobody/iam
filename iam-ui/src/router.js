import VueRouter from "vue-router";
import Login from "./components/Login";

export const Router = new VueRouter({
    routes: [
        {path: '', redirect: '/login'},
        {path: '/login', component: Login}
    ]
});