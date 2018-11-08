<style scoped>
    .layout {
        padding: 15% 25% 20% 25%;
    }
    .title {
        width: 100%;
        text-align: center;
        padding: 10px;
    }
</style>
<template>
    <div class="layout">
        <h3 class="title">语雀信息</h3>
        <Form ref="formCustom" :model="yuque"  :label-width="80">
            <FormItem label="Token" prop="passwd">
                <Input type="text" v-model="yuque.token" placeholder="输入你的语雀Token" ></Input>
            </FormItem>
            <FormItem label="Name" prop="passwdCheck">
                <Input type="text" v-model="yuque.authParam" placeholder="输入你的用户名" ></Input>
            </FormItem>
            <FormItem>
                <Button type="success">保存</Button>
                <Button type="primary" style="margin-left: 8px" @click="reset">重置</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                yuque: {
                    token: '',
                    authParam: ''
                }
            };
        },
        methods: {
            /**
             * 输入框重置
             */
            reset() {
                this.yuque.token = '';
                this.yuque.authParam = '';
            },
            /**
             * 保存语雀信息
             */
            saveYuQueInfo() {
                
            }
        }
    }
</script>
