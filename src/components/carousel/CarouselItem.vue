<template>
    <div
        class="carousel-item"
        :style="{width: width, height: height}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "CarouselItem",

        created() {
            if (this.$parent.$options.name !== 'Carousel') {
                throw new Error('CarouselItem parent must be Carousel!');
            }
        },

        inject: ['carousel'],

        computed: {
            width() {
                return this.carousel.width;
            },

            height() {
                return this.carousel.height;
            }
        }
    }
</script>

<style scoped>

</style>
