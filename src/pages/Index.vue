<template>
    <div style="background: #ccc;">
        <el-button type="primary" @click="req">获取</el-button>
        <img src="../assets/classification.png"/>
    </div>
</template>

<script>
    import axios from "../common/axios";

    const BASE_URL = 'https://u.y.qq.com/cgi-bin/musicu.fcg?';
    const BASE_DATA = {
        callback: '',
        g_tk: 5381,
        jsonpCallback: '',
        loginUin: 0,
        hostUin: 0,
        format: 'jsonp',
        inCharset: 'utf8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'yqq',
        needNewCode: 0,
        data: ''
    }
    import url from '../common/url'
    export default {
        name: "Index",

        mounted() {},

        data() {
            return {
                table_data: [],
                form: {
                    area: '',
                    gender: '',
                    genre: ''
                }
            }
        },

        methods: {
            req() {
                let url = this.getSinger({
                    pageNumber: 1
                });
                axios({
                    url
                }).then((res) => {
                    console.log(res.data);
                }).catch((err) => {
                    console.error('occur error', err);
                })
            },
            getSinger({pageNumber, sex = -100, genre = -100}) {
                let result_url = BASE_URL;
                let son_data = {
                    "comm":{
                        "ct":24,
                        "cv":10000
                    },
                    "singerList":{
                        "module":"Music.SingerListServer",
                        "method":"get_singer_list",
                        "param":{
                            "area": -100,
                            "sex": sex,
                            "genre": genre,
                            "index": -100,
                            "sin": (pageNumber - 1)*80,
                            "cur_page": pageNumber
                        }
                    }
                };
                let name = "getUCGI" + (Math.random() + "").replace("0.", "");
                BASE_DATA.callback = name;
                BASE_DATA.jsonpCallback = name;
                BASE_DATA.data = encodeURIComponent(JSON.stringify(son_data));

                for(let key in BASE_DATA) {
                    result_url = result_url + `${key}=${BASE_DATA[key]}&`;
                }
                return result_url
            }
        }
    }
</script>

<style scoped>

</style>