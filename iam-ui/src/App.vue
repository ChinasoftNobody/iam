<template>
    <div id="app">
        <!-- 导航头 -->
        <div>
            <b-navbar toggleable="lg" type="dark" variant="dark">
                <b-navbar-brand href="#">IAM</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item v-on:click="goManagement()">管理</b-nav-item>
                        <b-nav-item href="#" disabled>扩展</b-nav-item>
                    </b-navbar-nav>

                    <!-- Right aligned nav users -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-form>
                            <b-form-input size="sm" class="mr-sm-2" placeholder="搜索"></b-form-input>
                            <b-button size="sm" class="my-2 my-sm-0" type="submit">搜索</b-button>
                        </b-nav-form>

                        <b-nav-item-dropdown text="语言" right>
                            <b-dropdown-item href="#">中文</b-dropdown-item>
                            <b-dropdown-item href="#" disabled>ES</b-dropdown-item>
                            <b-dropdown-item href="#" disabled>RU</b-dropdown-item>
                            <b-dropdown-item href="#" disabled>FA</b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item-dropdown right>
                            <!-- Using 'button-content' slot -->
                            <template slot="button-content"><em>个人中心</em></template>
                            <b-dropdown-item href="#">我的信息</b-dropdown-item>
                            <b-dropdown-item href="#">退出登录</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'app',
        components: {},
        data: function () {
            return {}
        },
        methods: {
            goManagement:function () {
                this.$router.push("/management");
            }
        }

    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
