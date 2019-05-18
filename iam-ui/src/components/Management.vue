<template>
    <div>
        <b-tabs content-class="mt-3">
            <b-tab title="用户信息" active>
                <b-table striped hover :items="users" :fields="userFields"></b-table>
            </b-tab>
            <b-tab title="服务信息"><p>I'm the second tab</p></b-tab>
        </b-tabs>
    </div>
</template>

<script>
    import TokenService from "../service/TokenService";
    import Urls from "../config/Urls";

    export default {
        name: "Management",
        data: function () {
            return {
                users: [],
                userFields: {
                    name: {
                        label: '用户名',
                        sortable: true
                    },
                    email: {
                        label: '邮箱'
                    },
                    phone: {
                        label: '电话'
                    },
                    type: {
                        label: '类型'
                    },
                    loginDomain: {
                        label: '最后一次登录地址'
                    },
                    logged: {
                        label: '登陆状态'
                    }
                }
            }
        },
        created: function () {
            this.userList();
        },
        methods: {
            userList: function () {
                this.$http.post(Urls.urls.userListUrl, {
                    page: 0,
                    size: 10
                }, {headers: {'IAM-TOKEN': TokenService.getToken()}}).then(function (data) {
                    if (data.body.success) {
                        this.users = data.body.result.content;
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>