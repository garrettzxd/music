<template>
    <div
        :class="{active: currentVal === value}"
        class="mu-radio-item"
        @click="commitCurrentVal">
        {{label}}
    </div>
</template>

<script>
    export default {
        name: "MuRadioItem",

        inject: ['radioSelect'],

        computed: {
            currentVal() {
                return this.radioSelect.value;
            }
        },

        props: {
            value: {
                type: [String, Number, Boolean]
            },
            label: {
                type: String
            }
        },

        methods: {
            commitCurrentVal() {
                this.radioSelect.changeSelected(this.value);
            }
        }
    }
</script>

<style scoped>
    .mu-radio-item{
        min-width: 0.9rem;
        padding: 0 0.3rem;
        text-align: center;
    }
    .active{
        color: #7dcd9b;
    }
</style>
