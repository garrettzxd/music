<template>
    <div class="mu-carousel">
        <div class="carousel-content" @click="swap">
            <img class="carousel-img" src="http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1121987.jpg"/>
            <!--<div class="carousel-item" :style="{'background-image': img1}">1</div>-->
            <!--<div class="carousel-item" :style="{'background-image': img2}">2</div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "MuCarousel",

        props: {
            data: {
                type: Array
            },
        },

        mounted() {
            this.scrollListener();
        },

        data() {
            return {
                img1: 'url("http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1121987.jpg")',
                img2: 'url("http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1122985.jpg")'
            }
        },

        methods: {
            scrollListener() {
                document.addEventListener('scroll', (event) => {
                    let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                    // console.log(scrollTop);
                    let carousel = document.getElementsByClassName('mu-carousel')[0];
                    carousel.style.height = (3.05 - scrollTop/100) + 'rem';
                    console.log(carousel.style.height, scrollTop);
                },false)
            },

            swap() {
                let content = document.getElementsByClassName('carousel-content')[0];
                content.style['margin-left'] = '-7.5rem';
            }
        }
    }
</script>

<style scoped>
    .mu-carousel{
        width: 7.5rem;
        height: 3.05rem;
        background: #cccccc;
        position: fixed;
        top: 1.55rem;
        left: 0;
        /*display: flex;*/
        overflow: hidden;
    }
    .carousel-content{
        width: 37.5rem;
        height: 100%;
        display: flex;
        transition: margin-left 0.5s;
    }
    .carousel-item{
        width: 7.5rem;
        height: 100%;
        /*background-image: url("http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1122985.jpg");*/
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .carousel-img{
        width: 7.5rem;
    }
</style>
