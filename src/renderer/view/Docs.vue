<template>
    <div class="doc-layout">
        <div class="main-book-cover">
            <h1 class="main-book-cover-title">{{repos.name}}</h1>
            <div class="main-book-cover-meta">
                {{repos.description}}
            </div>
            <div class="main-book-cover-meta-user">
                <Avatar src="https://cdn.nlark.com/yuque/0/2018/png/89175/1537340263664-e4a3284a-1699-475b-8346-1521a65db0bd.png" />
            </div>
            <div>
                <Row type="flex" justify="center" align="middle" v-for="(item,index) of repos.docList">
                    <template v-if="item.type == 'TITLE'">
                        <Col :xs="{ span:22}" :lg="{ span:22}" class="main-book-cober-doc">
                            {{item.title}}
                        </Col>
                    </template>
                    <template v-else-if="item.type == 'DOC'">
                        <Col :xs="{ span:2}" :lg="{ span:2}" class="main-book-cober-doc">
                            {{item.title}}
                        </Col>
                        <Col :xs="{ span: 18}" :lg="{ span:18}"><Divider type="horizontal" orientation="center" dashed="true" /></Col>
                        <Col :xs="{ span: 2}" :lg="{ span:2}" class="main-book-cober-route">
                            {{item.url}}
                        </Col>
                    </template>
                </Row>
            </div>
        </div>
    </div>
</template>
<script>
import yaml from 'js-yaml'
import * as util from "@/common/utils";
import Constant from '@/common/constant'
import DB from'@/common/db'

export default {
    data () {
        return {
            repos: {
                name:'',
                description:'',
                docList:[],
                users:[]
            }
        }
    },
    created () {
        let reposId = this.$route.query.reposId
        const _this = this     
        let resData = {}
        const docsUrl = util.getDocListUrl(reposId);
        const userInfo = JSON.parse(this.$storage.getYuqueStorage(Constant.yuque.infoKey))
        const db = new DB(userInfo.name);
        db.findDocument('title_list', {id:reposId}).then(function (doc) {
            if (doc.length > 0) {
                resData = doc[0]
                _this.handleRepoInfo(_this,resData)  
            } else {
                _this.$http.get(docsUrl,{
                    headers:{
                        'User-Agent': userInfo.token
                    }
                }).then(function (res){
                    resData = res.data.data
                    db.insertDocument('title_list', resData)
                    _this.handleRepoInfo(_this,resData)  
                })
            }  
        },function(err){
            this.$Notice.error({
              title: err
            });
        })
    },
    methods:{
        /**
         * 处理仓库信息
         */
        handleRepoInfo(_this,reposData){
            if (reposData != null) {
                _this.repos.name = reposData.name
                _this.repos.description = reposData.description
                yaml.safeLoadAll(reposData.toc_yml, function (doc) {
                    _this.repos.docList.push(...doc)
                }); 
            }
        }
    }
}
</script>

<style>
    .doc-layout{
        /* max-width: 1056px; */
    }
    .main-book-cover {
        position: relative;
        border-radius: 5px;
        /* border: 1px solid #cab6b6; */
        padding: 60px;
        background: #fff;
    }
    .main-book-cover-title {
        padding-bottom: 12px;
        text-align: center;
        color: #262626;
        font-size: 24px;
    }
    .main-book-cover-meta {
        padding-bottom: 20px;
        text-align: center;
        font-size: 14px;
    }
    .main-book-cover-meta-user{
        padding-bottom: 20px;
        text-align: center;
    }
    .main-book-cober-doc{
        font-weight: bold;
        text-align: left;
        font-size: 14px;
    }
    .main-book-cober-route{
        text-align: right;
        color: #8c8c8c;
        font-size: 14px;
    }
</style>

