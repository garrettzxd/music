<template>
    <div class="hall-content">
        <mu-carousel></mu-carousel>

        <div class="classification">
            <div class="class-item" v-for="item in classification_list">
                <i :class="item.icon" class="iconfont classification-icon"></i>
                <p class="class-text">{{item.tips}}</p>
            </div>
        </div>

        <div class="recommend">
            <div class="personal-radio">个性电台</div>
            <div class="new-rec">
                <div class="new-song">新歌新碟</div>
                <div class="new-album">数字专辑·票务</div>
            </div>
        </div>

        <recommend-list title="新歌推荐"></recommend-list>
    </div>
</template>

<script>
    import {BASE_IMG_URL} from "../common/constans";
    import MuCarousel from '../components/MuCarousel'
    import RecommendList from '../components/RecommendList'
    export default {
        name: "MusicHall",

        mounted() {
            //
        },

        components: {
            MuCarousel,
            RecommendList
        },

        data() {
            return {
                base_img_url: BASE_IMG_URL,
                classification_list: [{
                    icon: 'icon-iconrenwu',
                    tips: '歌手'
                },{
                    icon: 'icon-paihang',
                    tips: '排行'
                },{
                    icon: 'icon-leimupinleifenleileibie',
                    tips: '分类'
                },{
                    icon: 'icon-ziyuan',
                    tips: '电台'
                },{
                    icon: 'icon-shipin',
                    tips: '视频'
                }],
                carousel_list: [{
                    img: 'url("http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1121987.jpg")'
                }]
            }
        }
    }
</script>

<style scoped>
    .hall-content{
        padding-top: 4.5rem;
    }
    .classification{
        height: 1.7rem;
        width: 7.2rem;
        margin-left: auto;
        margin-right: auto;
        box-shadow: 0 0.01rem 0.05rem 0.01rem #cccccc;
        display: flex;
        align-items: center;
    }
    .class-item{
        height: 0.9rem;
        flex-grow: 1;
        text-align: center;
    }
    .classification-icon{
        color: #61bf82;
        font-size: 0.5rem;
    }
    .class-text{
        font-size: 0.28rem;
    }
    .recommend{
        width: 7.2rem;
        margin: 0.4rem auto;
        display: flex;
        justify-content: space-between;
    }
    .personal-radio{
        width: 2.5rem;
        height: 2.5rem;
        background: #002d44;
    }
    .new-rec{
        display: flex;
        flex-wrap: wrap;
        width: 4.4rem;
    }
    .new-song, .new-album{
        width: 4.4rem;
        height: 1.2rem;
        background: #f5f5f5;
    }
</style>
