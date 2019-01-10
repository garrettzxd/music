<template>
    <div>
        <!--<i-->
            <!--v-for="item in icon_list"-->
            <!--:title="item"-->
            <!--class="iconfont"-->
            <!--:class="item">-->
        <!--</i>-->
        <i class="iconfont">&#xe604</i>
        <table class="icon-table">
            <thead>
                <tr>
                    <th>类名</th>
                    <th>展示</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in icon_list">
                    <td>{{item}}</td>
                    <td>
                        <i class="iconfont" :class="item"></i>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "Icon",

        data() {
            return {
                icon_list: [
                    'icon-bofang',
                    'icon-iconrenwu',
                    'icon-shipin',
                    'icon-video',
                    'icon-leftarrow',
                    'icon-erji',
                    'icon-qqmusicgrey',
                    'icon-touxiang',
                    'icon-xiangyoujiantou',
                    'icon-bofang-copy',
                    'icon-leimupinleifenleileibie',
                    'icon-ziyuan',
                    'icon-paihang'
                ]
            }
        }
    }
</script>

<style scoped>
    .icon-table{
        font-size: 0.14rem;
    }
</style>
