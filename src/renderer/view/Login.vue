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
    <Form ref="formCustom" :model="yuque" :label-width="80" :rules="ruleItem">
      <FormItem label="Token" prop="token">
        <Input type="text" v-model="yuque.token" placeholder="输入你的语雀Token"></Input>
      </FormItem>
      <FormItem label="Name" prop="name">
        <Input type="text" v-model="yuque.name" placeholder="输入你的用户名"></Input>
      </FormItem>
      <FormItem>
        <Button type="success" @click="handleSubmit('formCustom')">保存</Button>
        <Button type="primary" style="margin-left: 8px" @click="reset">重置</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import * as util from "@/common/utils";
import Constant from '../common/constant'

export default {
  data() {
    return {
      yuque: {
        token: "ZZ9YSINhlpOHYhwEhRNnNodSQeqGpOlIxgMH6dWW",
        name: "Gaius"
      },
      ruleItem: {
        token: [{ required: true, message: "Token不能为空", trigger: "blur" }],
        name: [
          { required: true, message: "Name不能为空", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    /**
     * 输入框重置
     */
    reset() {
      this.yuque.token = "";
      this.yuque.name = "";
    },
    /**
     * 保存语雀信息
     */
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.validateYuQueInfo(this.yuque.token, this.yuque.name);
        } else {
          this.$Notice.warning({
            title: "请填入必要信息"
          });
        }
      });
    },

    /**
     * 验证语雀信息
     * @param token
     * @param name
     */
    validateYuQueInfo(token, name) {
      this.$Spin.show();
      const authUrl = util.getAuthUserUrl(name);
      const _this = this;
      this.$http
        .get(authUrl, {
          headers: {
            "User-Agent": token
          }
        }).then(function(res) {
            _this.$Spin.hide();
          if (res.status === 200) {
              _this.$storage.saveYuqueInfo(Constant.yuque.infoKey, JSON.stringify(_this.yuque), _this.toIndex())
              _this.$Notice.success({
                title: "认证成功"
            });
          } else {
            _this.$Notice.error({
              title: "认证失败"
            });
          }
        }).catch(function(error) {
          _this.$Spin.hide();
          let message = "请输入正确的语雀信息";
          if (error.response.status !== 404) {
            message = "系统异常";
          }
          _this.$Notice.error({
            title: message
          });
        });
    },
    toIndex() {
      this.$router.push("/index");
    }
  }
};
</script>
