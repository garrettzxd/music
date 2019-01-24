<template>
    <div class="show-item">
        <div
            @click="toDetail"
            class="show-item-img"
            :style="{height: height, width: width}">

            <div class="top-left">
                <slot name="top-left"></slot>
            </div>

            <div class="top-right">
                <slot name="top-right"></slot>
            </div>

            <div class="bottom-left">
                <slot name="bottom-left"></slot>
            </div>

            <div class="bottom-right">
                <slot name="bottom-right"></slot>
            </div>
        </div>

        <p class="show-text">{{text}}</p>
    </div>
</template>

<script>
    export default {
        name: "ShowItem",

        created() {
            if (this.$parent.$options.name !== 'ShowList') {
                throw new Error('ShowItem parent must be ShowList!');
            }
        },

        inject: ['showList'],

        props: {
            text: {
                type: String
            }
        },

        mounted() {
            // console.log('showList',this.showList);
        },

        computed: {
            width() {
                return this.showList.itemWidth;
            },

            height() {
                return this.showList.itemHeight;
            }
        },

        methods: {
            toDetail() {
                console.log(this.width);
            }
        }
    }
</script>

<style scoped>
    .show-item{
        /*flex-grow: 1;*/
        padding-bottom: 0.3rem;
    }
    .show-item:not(:last-child) {
        /*margin-right: 0.05rem;*/
    }
    .show-item-img{
        background: #cccccc;
        position: relative;
    }
    .top-left, .top-right{
        position: absolute;
        top: 0.05rem;
    }
    .top-left, .bottom-left{
        left: 0.05rem;
    }
    .top-right, .bottom-right{
        right: 0.05rem;
    }
    .bottom-left, .bottom-right{
        position: absolute;
        bottom: 0.05rem;
    }
    .show-text{
        padding: 0 0.1rem;
    }
</style>
