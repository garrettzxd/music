<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "MuList",

        props: {
            imgShow: {
                type: Boolean,
                default: true
            }
        },

        provide() {
            return {
                muList: this
            }
        }
    }
</script>

<style scoped>

</style>
