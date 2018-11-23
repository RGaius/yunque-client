<template>
    <div>
        <Row type="flex">
            <Col span="">
                <Button type="text" class="navicon_btn" @click="toggleMenu">
                    <!-- <Icon class="icon iconfont" :class="'icon-' + cos_key" size="20"></Icon> -->
                    <Icon type="ios-contact" size="20"></Icon>
                    <span>语雀客户端</span>
                </Button>
            </Col>
            <Menu ref='menu' width="auto" v-if="repository && repository.length > 0"
                      @on-select="onMenuSelect" :active-name="bucketName">
                    <Menu-group class="buckets-menu" title="知识库">
                        <Menu-item v-for="(item,index) of repository" :key="index" :name="item">
                            <template v-if="menuState">
                                <Icon :size="item.size ? item.icon : 25"
                                      :type="privatebucket.indexOf(item) !==  -1 ? 'md-lock' : 'md-folder'"></Icon>
                                <span class="layout-text">{{item}}</span>
                            </template>
                            <template v-else>
                                <span class="layout-icon">{{item.substring(0,1)}}</span>
                            </template>
                        </Menu-item>
                    </Menu-group>
            </Menu>
        </Row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            repository:[]
        }
    },
    methods:{
        toggleMenu() {
            this.$router.push('/')
        },
        onMenuSelect() {}
    },
    created () {
        this.$http.get('repos',{
            headers:{
                'User-Agent':'ZZ9YSINhlpOHYhwEhRNnNodSQeqGpOlIxgMH6dWW'
            }
        }).then(function (res){
            console.info(res)
        })
    }
}
</script>

