<template>
  <div class="login">
    <Row class="login-model">
      <Col span="24">
        <Card>
          <div style="text-align:center;padding:10px">
            <h2>用户登录</h2>
            <br />
            <Form
              @submit.native.prevent="handleSubmit"
              ref="formItem"
              :model="formItem"
              :rules="FromRule"
            >
              <FormItem prop="userAccount">
                <Input
                  :disabled="isValidate"
                  v-model.trim="formItem.userAccount"
                  type="text"
                  placeholder="用户名"
                >
                  <Icon type="md-person" slot="prepend" />
                </Input>
              </FormItem>
              <FormItem prop="userPsw">
                <Input
                  :disabled="isValidate"
                  v-model.trim="formItem.userPsw"
                  type="password"
                  placeholder="密码"
                >
                  <Icon type="ios-lock" slot="prepend" />
                </Input>
              </FormItem>
              <FormItem>
                <!-- <Checkbox :disabled="isValidate" v-model="formItem.agree">下次登录记住我的身份</Checkbox><br> -->
                <Button
                  :loading="isSubmit"
                  :disabled="isValidate"
                  html-type="submit"
                  long
                  type="primary"
                >{{isValidate ? '登录验证中':'立即登录'}}</Button>
              </FormItem>
            </Form>
            <!-- <div id="qqLogin"></div> -->
            <a href="http://basecontrolapi.longhua.i4city.cn/qqlogin/loginByQQ?state=1"><img src="@/assets/images/Connect_logo_7.png" /></a>
          </div>
        </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
import md5 from "js-md5";
import store from "store";
import { post } from "@/libs/axios-cfg";
export default {
  data() {
    return {
      isSubmit: false,
      formItem: {
        userAccount: "",
        userPsw: "",
        agree: true
      },
      isValidate: false,
      FromRule: {
        userAccount: [{ required: true, message: "账号不能为空" }],
        userPsw: [
          { required: true, message: "请填写密码" },
          { type: "string", min: 6, message: "密码长度不能小于6位" }
        ]
      }
    };
  },
  mounted() {
    // window.QC.Login({
    //   btnId: "qqLogin"
    // });
  },
  created(){
  },
  methods: {
    handleSubmit() {
      if (this.isValidate) {
        return false;
      }
      this.$refs.formItem.validate(valid => {
        if (valid) {
          this.login();
        }
      });
    },
    async login() {
      this.isValidate = true;
      const loadings = this.$Message.loading({
        content: "用户信息验证中...",
        duration: 0
      });
      try {
        let res = await post("/login", {
          userAccount: this.formItem.userAccount,
          userPsw: this.formItem.userPsw
        });
        this.$Message.success("登录成功");
        sessionStorage.setItem("X-Auth-Token", res.data.token);
        sessionStorage.setItem("userId", res.data.user.id);
        sessionStorage.setItem("appId", res.data.user.appId);
        localStorage.setItem("userInfo", res.data.user);
        this.$store.commit("setToken", res.data.token);
        this.$router.push({ name: "home" });
      } catch (error) {
        this.$throw(error);
      }
      setTimeout(loadings, 0);
      this.isValidate = false;
    }
  }
};
</script>
<style>
body {
  background-image: url("../../../assets/images/login-bg.jpg");
  height: 100%;
}
.login-model {
  width: 340px;
  margin-top: 10%;
  float: right;
  margin-right: 200px;
}
</style>
