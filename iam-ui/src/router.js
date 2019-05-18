import VueRouter from "vue-router";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Management from "./components/Management";

export const Router = new VueRouter({
    routes: [
        {path: '', component: Home},
        {path: '/login', component: Login},
        {path: '/register', component: Register},
        {path:'/management',component: Management}
    ]
});