<template>
    <div class="list-content">
        <div class="list-title">
            <h5>{{title}}</h5>
            <router-link :to="{name: router}">》</router-link>
        </div>
        <div class="list-item"></div>
    </div>
</template>

<script>
    export default {
        name: "RecommendList",

        props: {
            title: {
                type: String,
                required: true
            },
            router: {
                type: String
            }
        }
    }
</script>

<style scoped>
    .list-content{
        display: flex;
        justify-content: space-between;
    }
    .list-title{
        text-align: center;
        position: relative;
    }
    .list-item{
        width: 2.48rem;
        height: 2.48rem;
    }

</style>
