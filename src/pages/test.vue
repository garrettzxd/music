<template>
    <div>
        <carousel>
            <carousel-item>
                <img class="c-img" src="http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1121987.jpg"/>
            </carousel-item>
            <carousel-item>
                <img class="c-img" src="http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1122985.jpg"/>
            </carousel-item>
        </carousel>

        <div class="test">
            <div class="test-item"></div>
            <div class="test-item"></div>
            <div class="test-item"></div>
            <div class="test-item"></div>
            <div class="test-item"></div>
            <div class="test-item"></div>
            <div class="test-item"></div>
        </div>
    </div>
</template>

<script>
    import Carousel from '../components/carousel/MuCarousel'
    import CarouselItem from '../components/carousel/CarouselItem'
    export default {
        name: "test",

        components: {
            Carousel,
            CarouselItem
        }
    }
</script>

<style scoped>
    .c-img{
        width: 100%;
    }
    .test{
        display: flex;
        flex-wrap: wrap;
        background: #8c939d;
    }
    .test-item{
        width: 2rem;
        height: 2rem;
        background: #3a8ee6;
        margin-right: 0.1rem;
        margin-top: 0.1rem;
    }
</style>
