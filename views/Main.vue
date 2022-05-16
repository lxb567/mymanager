<template>
    <el-container style="height: 100%">
        <common-aside />
        <el-container>
            <el-header>
                <common-header />
            </el-header>
            <common-tag />
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import CommonAside from '../src/components/CommonAside.vue'
import CommonHeader from '../src/components/CommonHeader.vue'
import CommonTag from '../src/components/CommonTag.vue'
export default {
    name: 'Home',
    components: {
         CommonAside, 
         CommonHeader,
         CommonTag
    }
}
</script>
<style lang="less" scoped>
.el-header {
    background-color: rgb(19, 20, 20)
}
.el-main {
    padding-top: 0;
}
</style>