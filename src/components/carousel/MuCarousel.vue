<template>
    <div
        :style="{height: height}"
        class="mu-carousel">
        <div
            :style="{width: contentWidth, height: height}"
            class="carousel-content">
            <slot></slot>
        </div>

        <ul class="carousel-indexs">
            <li
                v-for="(item, index) in items"
                class="carousel-index"
                :class="{active: index === current_index}">
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Carousel",

        props: {
            width: {
                type: String,
                default: '7.5'
            },
            height: {
                type: String,
                default: '3.05rem'
            },
            duration: {
                type: String,
                default: '500ms'
            },
            interval: {
                type: String,
                default: '2500'
            }
        },

        provide() {
            return {
                carousel: this
            }
        },

        data() {
            return {
                items: [],
                current_index: 0
            }
        },

        computed: {
            //初始化宽
            contentWidth() {
                return this.width * this.items.length + 'rem';
            }
        },

        mounted() {
            let vm = this;
            this.updateItems();
            this.$nextTick(() => {
                let content = document.getElementsByClassName('carousel-content')[0];
                setInterval(() => {
                    if (vm.current_index < vm.items.length - 1) {
                        vm.current_index++;
                    } else {
                        vm.current_index = 0;
                    }
                    let margin_left = vm.current_index * vm.width;
                    content.style['margin-left'] = `-${margin_left}rem`;
                }, vm.interval)
            })
        },

        methods: {
            //获取目标子组件对象
            updateItems() {
                this.items = this.$children.filter(child => child.$options.name === 'CarouselItem');
            }
        }
    }
</script>

<style scoped>
    .mu-carousel{
        overflow: hidden;
        position: relative;
    }
    .carousel-content{
        display: flex;
        transition: margin-left 0.5s;
    }
    .carousel-indexs{
        position: absolute;
        bottom: 0.1rem;
        display: flex;
        width: 100%;
        justify-content: center;
        list-style: none;
    }
    .carousel-index{
        padding: 0.08rem;
        margin-right: 0.05rem;
        border-radius: 50%;
        background: #ffffff;
    }
    .active{
        background: #3a8ee6;
    }
</style>
