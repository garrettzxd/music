<template>
    <div class="list-content">
        <div class="list-title">
            {{title}}
            <i class="iconfont icon-xiangyoujiantou title-icon"></i>
        </div>

        <div class="list-item">
            <show-list item-width="2.48rem">
                <show-item text1="内容1">
                    <template slot="top-left">
                        <i class="iconfont icon-erji"></i>112
                    </template>
                </show-item>
                <show-item text1="内容2"></show-item>
                <show-item text1="内容3"></show-item>
            </show-list>

            <show-list item-width="2.48rem">
                <show-item text1="内容4">
                    <template slot="top-left">
                        <i class="iconfont icon-erji"></i>112
                    </template>
                </show-item>
                <show-item text1="内容5"></show-item>
                <show-item text1="内容6"></show-item>
            </show-list>
        </div>
    </div>
</template>

<script>
    import ShowList from '../components/ShowList/ShowList'
    import ShowItem from '../components/ShowList/ShowItem'
    export default {
        name: "RecommendList",

        components: {
            ShowList,
            ShowItem
        },

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

    }
    .list-title{
        font-size: 0.35rem;
        text-align: center;
        position: relative;
    }
    .title-icon{
        position: absolute;
        right: 0.2rem;
        font-size: 0.45rem;
        color: #8a8a8b;
    }
    /*.list-item{*/
        /*width: 2.48rem;*/
        /*height: 2.48rem;*/
    /*}*/

</style>
