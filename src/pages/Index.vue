<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>地区</th>
                    <th>名字</th>
                    <th>图片</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in table_data" :key="item.singer_mid">
                    <td>{{item.country || '未知'}}</td>
                    <td>{{item.singer_name || '未知'}}</td>
                    <td>
                        <img style="width: 100px;height: 100px" :src="item.singer_pic"/>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import url from '../common/url'
    import axios from '../common/axios'
    export default {
        name: "Index",

        mounted() {
            // this.getTableData();
            this.getData();
        },

        data() {
            return {
                table_data: [],
                key: '0404f628c12b465faaf860bd9454a023',
                url: 'https://free-api.heweather.com/s6/weather/now'
            }
        },

        methods: {
            getTableData() {
                // this.axios(`${this.url}?location=hangzhou&key=${this.key}`).then((res) => {
                //     console.log(res.data);
                // }).catch((err) => {
                //     console.log(err);
                // })
            },

            getData() {
                axios({
                    url: url.getSingerList,
                    params: {
                        testParam: 'nothingSay!'
                    }
                })
                .then((res) => {
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
                // axios(url.getSingerList, {
                //     params: {
                //         testParam: 'nothingSay!'
                //     }
                // }).then((res) => {
                //     this.table_data = res.data;
                //     for (let item of this.table_data) {
                //         item.singer_pic = item.singer_pic.replace(/.webp/,'.jpg');
                //     }
                // }).catch((err) => {
                //     console.log(err);
                // })
            }
        }
    }
</script>

<style scoped>

</style>