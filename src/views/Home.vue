<template>
    <div class="all-main">
      <div class="main-area">
        <div class="menu-area">
          <el-row class="menu-row">
            <el-col style="width: 100%">
              <h5 style="width: 100%; font-size:22px; text-align:center;">后台管理</h5>
              <el-menu
                active-text-color="#1a303d"
                background-color="#545c64"
                class="el-menu-vertical-demo"
                text-color="#fff"
                @select="handleMenuSelect"
                @close="handleMenuClose"
              >
                <el-sub-menu index="1">
                  <template #title>
                    <el-icon><Location /></el-icon>
                    <span>用户管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">会员列表</el-menu-item>
                    <el-menu-item index="1-2">会员认证</el-menu-item>
                    <el-menu-item index="1-3">创建会员</el-menu-item>
                    <el-menu-item index="1-4">客户管理</el-menu-item>
                    <el-menu-item index="1-5">约会信息</el-menu-item>
                    <el-menu-item index="1-6">账号管理</el-menu-item>
                  </el-menu-item-group>
                </el-sub-menu>
                
                <el-menu-item index="2">
                  <el-icon><Document /></el-icon>
                  <span>安全认证</span>
                </el-menu-item>
                
                <el-sub-menu index="3">
                  <template #title>
                    <el-icon><Location /></el-icon>
                    <span>员工资料</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="3-1">登录员工</el-menu-item>
                    <el-menu-item index="3-2">员工列表</el-menu-item>
                    <el-menu-item index="3-3">员工权限</el-menu-item>
                  </el-menu-item-group>
                </el-sub-menu>

                <el-sub-menu index="4">
                  <template #title>
                    <el-icon><Location /></el-icon>
                    <span>支付管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="4-1">收款记录</el-menu-item>
                    <el-menu-item index="4-2">支出记录</el-menu-item>
                    <el-menu-item index="4-3">账单列表</el-menu-item>
                    <el-menu-item index="4-4">公司账目</el-menu-item>
                  </el-menu-item-group>
                </el-sub-menu>

                <el-sub-menu index="5">
                  <template #title>
                    <el-icon><Location /></el-icon>
                    <span>功能管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="5-1">创建特点</el-menu-item>
                    <el-menu-item index="5-2">创建爱好</el-menu-item>
                    <el-menu-item index="5-3">匹配机制</el-menu-item>
                    <el-menu-item index="5-4">会员等级</el-menu-item>
                  </el-menu-item-group>
                </el-sub-menu>
                
                <el-menu-item index="6">
                  <el-icon><Setting /></el-icon>
                  <span>数据管理</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </div>

        <div class="main-router-view-area">
          <div class="amdin-staff-header-bar">

          </div>
          <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
export default {
  setup() {
        const menuRoute = {
        '1-1': '/',
        '1-2': '',
        '1-3': '',
        '1-4': '',
        '1-5': '',
        '1-6': '',
        '2': '',
        '3-1': '',
        '3-2': '',
        '3-3': '',
        '4-1': '',
        '4-2': '',
        '4-3': '',
        '4-4': '',
        '5-1': '/functions/feature',
        '5-2': '',
        '5-3': '',
        '5-4': '',
        '6': ''
      }

      const router = useRouter()

      function handleMenuSelect(index) {
          const url = menuRoute[index]
          router.push(url)
      }

      return {
        handleMenuSelect
      }
  }
}
</script>

<style lang="scss" scoped>
.all-main {
  width: 100%;
  height: 100vh;
}
.main-area {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  .main-router-view-area {
    width: 100%;

    .amdin-staff-header-bar {
      width: 100%;
      height: 58px;
    }
  }
}

.menu-area {
  width: 248px;
  height: 100%;
  background-color: #1a303d;
}

.menu-row {
  width: 100%;
  height: 100%;
}

.el-menu--vertical {
  --el-menu-bg-color: #1a303d!important
}

.el-menu {
  border-right: unset!important;
}
</style>