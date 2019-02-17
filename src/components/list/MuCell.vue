<template>
    <div class="mu-cell-content">
        <div v-if="showImg" class="cell-img">
            <img class="cell-img-item" :src="imgUrl"/>
        </div>

        <div class="cell-text">{{text}}</div>
    </div>
</template>

<script>
    export default {
        name: "MuCell",

        inject: ['muList'],

        props: {
            imgUrl: {
                type: String
            },
            text: {
                type: String
            }
        },

        computed: {
            showImg() {
                return this.muList.imgShow;
            }
        },

        created() {
            if (this.$parent.$options.name !== 'MuList') {
                throw new Error('MuCell parent must be MuList!');
            }
        }
    }
</script>

<style scoped>
    .mu-cell-content{
        height: 1.1rem;
        line-height: 1.1rem;
        display: flex;
        font-size: 0.35rem;
    }
    .cell-img{
        width: 1.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .cell-img-item{
        width: 0.84rem;
        border-radius: 50%;
    }
    .cell-text{
        box-sizing: border-box;
        border-bottom: 1px solid #eaeaea;
        flex-grow: 1;
        overflow: hidden;
    }
</style>
