<template>
    <div class="mu-list-select">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "MuRadioSelect",

        provide() {
            return{
                radioSelect: this
            }
        },

        props: {
            value: {
                type: [String, Number, Boolean],
                required: true
            }
        },

        methods: {
            changeSelected(val) {
                this.$emit('input', val);
            }
        }
    }
</script>

<style scoped>
    .mu-list-select{
        font-size: 0.3rem;
        height: 0.8rem;
        line-height: 0.8rem;
        display: flex;
        border-bottom: 1px solid #eaeaea;
    }
</style>
