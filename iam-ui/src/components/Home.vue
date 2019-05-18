<!--<template>-->
<!--    <h1>欢迎使用统一身份认证服务，请尽情享用服务集</h1>-->
<!--</template>-->

<!--<script>-->
<!--    export default {-->
<!--        name: "Home"-->
<!--    }-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->

<template>
    <div>
        <b-jumbotron>
            <template slot="header">IAM</template>

            <template slot="lead">
                欢迎使用统一身份认证服务，请尽情享用服务集
            </template>

            <hr class="my-4">

            <p>
                你可以通过继承IAM实现自己的服务，从而减少处理成员、组织相关的业务处理，让你更集中精力去处理你的业务逻辑。
                你也可以通过IAM和更多服务集及时的实现成员相关的数据共享，实现与其他服务的无间隙耦合。
            </p>
        </b-jumbotron>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                showDetail: false,
                users: []
            }
        },
        methods: {

        }
    }
</script>