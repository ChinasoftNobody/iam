<template>
    <div class="container">
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

            <b-button type="submit" variant="primary">登录</b-button>
        </b-form>
    </div>
</template>

<script>

    export default {
        name: 'Login',
        props: {},
        data() {
            return {
                userInfo: {
                    password: '',
                    name: ''
                },
                foods: [{text: 'Select One', value: null}, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
                show: true,
                message: '',
                showError: false
            }
        },
        methods: {
            onSubmit: function (evt) {
                evt.preventDefault();
                let url = this.$route.query.target;
                this.$http.post('http://localhost:8080/iam/public/user/login', {
                    name: this.userInfo.name,
                    password: this.userInfo.password,
                    target: url
                }, {
                    headers: {
                        "IAM-TOKEN": ""
                    }
                }).then(function (data) {
                    if (data.body.success) {
                        if (!url) {
                            url = data.body.result.loginDomain;
                        }
                        window.location = url;
                    } else {
                        this.message = data.body.error;
                        this.showError = true;
                    }
                });

            },
            onReset(evt) {
                evt.preventDefault();
                // Reset our form values
                this.form.email = '';
                this.form.name = '';
                this.form.food = null;
                this.form.checked = [];
                // Trick to reset/clear native browser form validation state
                this.show = false;
                this.$nextTick(() => {
                    this.show = true
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
