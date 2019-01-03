<template>
    <div class="index-con">
        <div class="index-top">
            <div class="tabs">
                <span
                    @click="changeTab('personal')"
                    :class="{active: tab_data === 'personal'}">
                    我的
                </span>
                <span
                    @click="changeTab('musicHall')"
                    class="tabs-main"
                    :class="{active: tab_data === 'musicHall'}">
                    音乐馆
                </span>
                <span
                    @click="changeTab('discovery')"
                    :class="{active: tab_data === 'discovery'}">
                    发现
                </span>
            </div>
            <p class="search-btn">
                <img class="search-img" src="http://music-garrett.oss-cn-hangzhou.aliyuncs.com/Common-icom/search.png"/>
                <span class="search-text">搜索</span>
            </p>
        </div>

        <keep-alive>
            <component :is="tab_data"></component>
        </keep-alive>
    </div>
</template>

<script>
    import axios from "../common/axios";
    import url from '../common/url'
    import personal from './Personal'
    import musicHall from './MusicHall'
    import discovery from './Discovery'
    export default {
        name: "Index",

        mounted() {},

        components: {
            personal,
            musicHall,
            discovery
        },

        data() {
            return {
                tab_data: 'musicHall'
            }
        },

        methods: {
            changeTab(type) {
                this.tab_data = type;
            }
        }
    }
</script>

<style scoped>
    .index-con{
        font-size: 0.16rem;
    }
    .index-top{
        height: 1.55rem;
        background: #61bf82;
    }
    .search-btn{
        width: 7.18rem;
        height: 0.68rem;
        line-height: 0.68rem;
        margin-left: 0.16rem;
        background: #55a872;
        text-align: center;
        color: #eaf7f0;
    }
    .search-text{
        font-size: 0.3rem;
    }
    .search-img{
        width: 0.32rem;
        height: 0.32rem;
    }
    .tabs{
        text-align: center;
        color: #ffffff;
        /*padding-top: 30px;*/
        padding-bottom: 0.1rem;
        font-size: 0.36rem;
    }
    .tabs-main{
        font-size: 0.4rem;
        display: inline-block;
        padding: 0 0.2rem;
    }
    .active{
        font-weight: bold;
    }
</style>