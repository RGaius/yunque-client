<template>
    <div class="layout">
        <Row type="flex">
            <Col span="" class="layout-menu-left">
                <Button type="text" class="navicon_btn" @click="toggleMenu">
                    <Icon type="ios-contact" size="20"></Icon>
                    <span>语雀客户端</span>
                </Button>
                <Menu ref='menu' width="auto" v-if="repository && repository.length > 0" @on-select="onMenuSelect">
                    <Menu-group class="buckets-menu" title="知识库">
                        <Menu-item v-for="(item,index) of repository" :key="index" :name="item">
                            <template v-if="menuState">
                                <Icon type="md-folder" size="25" />
                                <span class="layout-text">{{item.name}}</span>
                            </template>
                            <template v-else>
                                <span class="layout-icon">{{item.name.substring(0,1)}}</span>
                            </template>
                        </Menu-item>
                    </Menu-group>
                </Menu>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            repository:[],
            menuState:true,
            loading:{
                show:true
            }
        }
    },
    methods:{
        toggleMenu() {
            this.$router.push('/')
        },
        onMenuSelect() {}
    },
    created () {
        const _this = this
        this.$http.get('repos',{
            headers:{
                'User-Agent':'ZZ9YSINhlpOHYhwEhRNnNodSQeqGpOlIxgMH6dWW'
            }
        }).then(function (res){
            let resData = res.data
            _this.repository.push(...resData.data)
        })
    }
}
</script>
<style lang="scss" scoped>
    @import "../style/params";
    .layout {
        height: 100%;
        .ivu-row-flex {
            height: 100%;
        }
        .layout-menu-left {
            background: $menu-bg;
            color: $menu-color;
            display: flex;
            flex-direction: column;
            border-bottom-right-radius: 4px;
            padding-top: 20px;
            z-index: 1;
            box-shadow: 1px 0 3px 0 rgba(0, 0, 0, 0.1);
            -webkit-app-region: drag;
            .navicon_btn {
                font-weight: bold;
                text-align: left;
                padding-left: 22px;
                color: $menu-color;
                &:hover {
                    color: $primary;
                }
                & > span {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }
            }
            .buckets-menu {
                overflow-y: scroll;
                max-height: 400px;
            }
            .ivu-menu-vertical {
                flex-grow: 1;
                .ivu-menu-item {
                    padding: 8px 24px;
                    display: flex;
                    align-items: center;
                    .layout-text {
                        margin-left: 0;
                        line-height: 25px;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                    .layout-icon {
                        margin-left: 0;
                        line-height: 25px;
                        background: rgba(255, 255, 255, .7);
                        width: 25px;
                        color: $fontColor;
                        text-align: center;
                        text-transform: capitalize;
                    }
                }
            }
            .version {
                padding: 10px 20px;
                /*color: #c5c5c5;*/
                &-new {
                    color: #ff3605;
                    cursor: pointer;
                }
                &-new-info {
                    color: #555;
                }
            }
        }
    }
    .choice-cos {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        .choice-view {
            text-align: center;
            display: flex;
            flex-direction: column;
            .name {
                font-size: 13px;
                margin-top: 5px;
            }
        }
    }
    .status-view {
        opacity: 1;
        position: fixed;
        bottom: 0;
        width: 100%;
        left: 0;
        text-align: left;
        background-color: rgba(0, 0, 0, 0.51);
        color: #FFFFFF;
        padding: 10px;
        font-size: 12px;
        z-index: 901;
        transition: opacity 1s;
    }
    .status-view-none {
        opacity: 0;
        transition: opacity 2s;
    }
</style>
<style lang="scss">
    @import "../style/params";
    .navicon_btn {
        & > span {
            display: flex;
            flex-direction: row;
            align-items: center;
            & > span {
                margin-left: 6px;
            }
        }
    }
    .vertical-center-modal {
        display: flex;
        align-items: center;
        justify-content: center;
        .ivu-modal {
            top: 0;
        }
    }
    .ivu-modal-footer {
        border-top: 0;
        /*padding: 0;*/
    }
    .cosModel {
        .ivu-modal-footer {
            padding: 0;
            border-top: 0;
        }
    }
</style>

