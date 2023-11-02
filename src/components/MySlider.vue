<template>
    <div>
        <el-row class="aside">
            <el-menu default-active="1">
                <el-menu-item index="1">
                    <i class="el-icon-menu"></i>
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-document"></i>
                    <span slot="title">收藏</span>
                </el-menu-item>
            </el-menu>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'MySlider',

}
</script>
<style scoped>
.aside {
    width: 100%;
}

.el-menu-item {
    width: 100%;
}
</style>