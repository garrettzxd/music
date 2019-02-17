<template>
    <div class="singer-list">
        <top-operation>
            <span>这里是标题</span>
            <span slot="option">操作</span>
        </top-operation>

        <mu-radio-select v-model="area" style="background: #f4f4f4">
            <mu-radio-item label="全部" value=""></mu-radio-item>
            <mu-radio-item label="内地" value="a"></mu-radio-item>
            <mu-radio-item label="港台" value="b"></mu-radio-item>
            <mu-radio-item label="欧美" value="c"></mu-radio-item>
        </mu-radio-select>

        <mu-radio-select v-model="sex" style="background: #f4f4f4">
            <mu-radio-item label="全部" value=""></mu-radio-item>
            <mu-radio-item label="男" value="a"></mu-radio-item>
            <mu-radio-item label="女" value="b"></mu-radio-item>
            <mu-radio-item label="组合" value="c"></mu-radio-item>
        </mu-radio-select>

        <mu-list>
            <mu-cell
                img-url="http://y.gtimg.cn/music/photo_new/T001R300x300M000002J4UUk29y8BY.jpg?max_age=2592000"
                text="测试文章">
            </mu-cell>
        </mu-list>
    </div>
</template>

<script>
    import MuList from '../../components/list/MuList'
    import MuCell from '../../components/list/MuCell'
    import MuRadioSelect from "../../components/radioSelect/MuRadioSelect";
    import MuRadioItem from "../../components/radioSelect/MuRadioItem";
    export default {
        name: "SingerList",

        components: {
            MuRadioItem,
            MuRadioSelect,
            MuList,
            MuCell
        },

        data() {
            return{
                area: 'a',
                sex: ''
            }
        }
    }
</script>

<style scoped>
    .singer-list{
        padding-top: 0.9rem;
    }
</style>
