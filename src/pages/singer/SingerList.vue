<template>
    <div class="singer-list">
        <top-operation>
            <span>这里是标题</span>
            <span slot="option">操作</span>
        </top-operation>

        <mu-list>
            <mu-cell
                img-url="http://y.gtimg.cn/music/photo_new/T001R300x300M000002J4UUk29y8BY.jpg?max_age=2592000"
                text="测试文章">
            </mu-cell>
        </mu-list>
    </div>
</template>

<script>
    import MuList from '../../components/list/MuList'
    import MuCell from '../../components/list/MuCell'
    export default {
        name: "SingerList",

        components: {
            MuList,
            MuCell
        }
    }
</script>

<style scoped>
    .singer-list{
        padding-top: 0.9rem;
    }
</style>
