<template>
    <div class="header">
        <div class="header_bg">练手</div>
        <el-menu :default-active="activeIndex" class="el-menu-demo header_tabs" mode="horizontal" @select="handleSelect">
            <el-menu-item :route="tab.path" v-for="(tab, $index) in tabs" :index="tab.index" :key="$index">{{tab.name}}</el-menu-item>
            <el-menu-item class="right" index="10">{{username}}</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
	export default {
		name: 'Header',
        data() {
			return {
				username: 'limo',
				activeIndex: '1',
				tabs: [{
					index: '1',
					path: '/main',
                    name: '首页'
                }, {
					index: '3',
					path: '/teacher',
                    name: '教师天地'
                }, {
					index: '4',
					path: '/student',
                    name: '学生天地'
                }, {
					index: '5',
					path: '/userCenter',
                    name: '个人中心'
                }, {
					index: '2',
					path: '/new',
					name: '最新资讯'
				}]
            }
        },
        methods: {
			handleSelect() {

            }
        }
	};
</script>

<style scoped lang="scss">
    .header {
        width: 100%;
        .header_bg {
            height: 2rem;
        }

    }
</style>
