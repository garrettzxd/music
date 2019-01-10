<template>
    <div class="show-list">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ShowList",

        provide() {
            return {
                showList: this
            }
        },

        props: {
            itemWidth: {
                type: String,
                // default: '2.48rem'
            },
            itemHeight: {
                type: String,
                default: '2.48rem'
            }
        },

        mounted() {
            console.log('itemWidth', this.itemWidth);
        }
    }
</script>

<style scoped>
    .show-list{
        display: flex;
        margin-top: 0.3rem;
    }
</style>
