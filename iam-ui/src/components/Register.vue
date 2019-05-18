<template>
    <div class="container">
        <app-title-header></app-title-header>
        <b-alert v-if="showError" variant="warning" show>{{message}}</b-alert>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
                    id="input-group-1">
                <b-form-input
                        id="input-1"
                        v-model="userInfo.name"
                        type="text"
                        required
                        placeholder="用户名"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2">
                <b-form-input
                        id="input-2"
                        v-model="userInfo.password"
                        required
                        type="password"
                        placeholder="密码"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3">
                <b-form-input
                        id="input-3"
                        v-model="userInfo.passwordConfirm"
                        required
                        type="password"
                        placeholder="确认密码"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4">
                <b-form-input
                        id="input-4"
                        v-model="userInfo.phone"
                        required
                        type="text"
                        placeholder="电话"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-5">
                <b-form-input
                        id="input-5"
                        v-model="userInfo.email"
                        required
                        type="email"
                        placeholder="邮箱"
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">注册</b-button>
            <router-link to="/login">登录</router-link>
        </b-form>
    </div>
</template>

<script>
    import Urls from "../config/Urls";

    export default {
        name: "Register",
        data() {
            return {
                userInfo: {
                    name: '',
                    password: '',
                    passwordConfirm: '',
                    email: '',
                    phone: '',
                    type: 'INNER'
                },
                message: '',
                showError: false,
                show: true
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                if (this.userInfo.password !== this.userInfo.passwordConfirm) {
                    this.showMessage('密码不一致');
                } else {
                    this.$http.post(Urls.urls.registerUrl, this.userInfo, {headers: {"IAM-TOKEN": ""}}).then(function (data) {
                        if (data.body.success) {
                            this.$router.push('login');
                        } else {
                            this.showMessage("注册失败：" + data.body.error);
                        }
                    })
                }
            },
            onReset(evt) {
                evt.preventDefault();
            },
            showMessage(msg) {
                this.showError = true;
                this.message = msg;
            }
        }
    }
</script>

<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .container {
        text-align: left;
        width: 30%;
    }
</style>