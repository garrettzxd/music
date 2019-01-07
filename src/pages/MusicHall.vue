<template>
    <div>
        <mu-carousel></mu-carousel>

        <div class="classification">
            <div class="class-item" v-for="item in classification_list">
                <img class="class-img" :src="item.src"/>
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
                    src: `${BASE_IMG_URL}singer.png`,
                    tips: '歌手'
                },{
                    src: `${BASE_IMG_URL}ranking.png`,
                    tips: '排行'
                },{
                    src: `${BASE_IMG_URL}classification.png`,
                    tips: '分类'
                },{
                    src: `${BASE_IMG_URL}radio.png`,
                    tips: '电台'
                },{
                    src: `${BASE_IMG_URL}mv.png`,
                    tips: '视频'
                }]
            }
        }
    }
</script>

<style scoped>
    .classification{
        height: 1.7rem;
        width: 7.2rem;
        margin-left: auto;
        margin-right: auto;
        box-shadow: 0 0.01rem 0.05rem 0.01rem #cccccc;
    }
    .class-item{
        width: 1.44rem;
        float: left;
        text-align: center;
    }
    .class-img{

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
        /*align-content: space-between;*/
    }
    .new-song, .new-album{
        width: 4.4rem;
        height: 1.2rem;
        background: #f5f5f5;
    }
</style>
