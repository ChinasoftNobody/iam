<template>
    <div>
        <b-alert v-model="showMessage" v-bind:value="value" variant="danger" dismissible>
            {{message}}
        </b-alert>
    </div>
</template>

<script>
    export default {
        name: "ErrorInfo",
        props: [

        ],
        data: function () {
            return{
                message:'',
                showMessage: false
            }
        }
    }
</script>

<style scoped>

</style>