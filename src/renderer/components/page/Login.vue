<style scoped>
    .layout {
        padding: 20% 25% 20% 25%;
    }
    .title {
        width: 100%;
        text-align: center;
        padding: 10px;
    }
</style>
<template>
    <div class="layout">
        <h3 class="title">设置语雀信息</h3>
        <Form ref="formCustom" :model="formCustom"  :label-width="80">
            <FormItem label="Token" prop="passwd">
                <Input type="password" v-model="formCustom.passwd"></Input>
            </FormItem>
            <FormItem label="Id/Name" prop="passwdCheck">
                <Input type="text" v-model="formCustom.passwdCheck"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary">设置</Button>
                <Button style="margin-left: 8px">重置</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                formCustom: {
                    passwd: '',
                    passwdCheck: '',
                    age: ''
                }
            };
        }
    }
</script>
