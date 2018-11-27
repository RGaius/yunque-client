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
        this.$http.get('repos/' + reposId,{
            headers:{
                'User-Agent':'ZZ9YSINhlpOHYhwEhRNnNodSQeqGpOlIxgMH6dWW'
            }
        }).then(function (res){
            let resData = res.data.data
            _this.repos.name = resData.name
            _this.repos.description = resData.description
            yaml.safeLoadAll(resData.toc_yml, function (doc) {
                _this.repos.docList.push(...doc)
            });
        })
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

