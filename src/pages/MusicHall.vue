<template>
    <div>
        <mu-carousel></mu-carousel>

        <div class="classification">
            <div class="class-item" v-for="item in classification_list">
                <img class="class-img" :src="item.src"/>
                <p class="class-text">{{item.tips}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {BASE_IMG_URL} from "../common/constans";
    import MuCarousel from '../components/MuCarousel'
    export default {
        name: "MusicHall",

        mounted() {
            //
        },

        components: {
            MuCarousel
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
        margin: auto;
        box-shadow: 0 0.01rem 0.05rem 0.01rem #cccccc;
    }
    .class-item{
        width: 1.44rem;
        float: left;
        text-align: center;
    }
    .class-img{

    }
</style>