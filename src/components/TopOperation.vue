<template>
    <div class="top-content">
        <div class="top-back">返回</div>

        <div class="top-center">
            <slot></slot>
        </div>

        <div class="top-option">
            <slot name="option"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopOperation",


    }
</script>

<style scoped>
    .top-content{
        width: 100%;
        height: 0.9rem;
        line-height: 0.9rem;
        position: fixed;
        top: 0;
        left: 0;
        font-size: 0.3rem;
        display: flex;
        justify-content: space-between;
        padding: 0 0.1rem;
    }
</style>
