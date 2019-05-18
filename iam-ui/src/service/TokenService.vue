<template>
    <div></div>
</template>

<script>
    export default {
        name: "TokenService",
        tokenKey: 'iam-token',
        getToken: function () {
            return $cookies.get(this.tokenKey);
        },
        setToken: function (token) {
            $cookies.set(this.tokenKey, token);
        }
    }
</script>

<style scoped>

</style>