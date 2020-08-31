<template>
  <div class="user-avator-dropdown">
    <Dropdown @on-click="handleClick">
      <Avatar :src="userPhoto" />&nbsp;
      <span>{{userName}}</span>
      <Icon :size="18" type="md-arrow-dropdown"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
import "./user.less";
import minLogo from "@/assets/images/ico.png";
import { mapActions } from "vuex";
export default {
  name: "User",
  props: {
    userAvator: {
      type: String,
      default: minLogo,
    },
    userName: {
      type: String,
      default: "匿名",
    },
    userPhoto: {
      type: String,
      default: minLogo,
    },
  },
  methods: {
    ...mapActions(["handleLogOut"]),
    handleClick(name) {
      switch (name) {
        case "logout":
          this.handleLogOut().then(() => {
            this.$router.push({
              name: "login",
            });
          });
          break;
        case "updatePWD":
          this.createAttendTagQuery();
          break;
      }
    },
    //打开新的标签，显示修改密码页面
    // createAttendTagQuery() {
    //   const route = {
    //     path: 'personal',
    //     meta: {
    //       icon: 'md-person',
    //       title: '个人中心'
    //     },
    //     name: 'personal',
    //     component: () => import('@/view/system/personal')
    //   }
    //   this.$router.push(route)
    // }
  },
};
</script>
