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
</style>
