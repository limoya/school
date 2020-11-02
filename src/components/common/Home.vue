<template>
    <div class="home">
        <v-header class="top"></v-header>
        <el-container class="content" ref="middle">
            <div class=""></div>
            <v-slidebar class="slidebar"></v-slidebar>
            <router-view></router-view>
        </el-container>
    </div>
</template>

<script>
	import vHeader from './Header';
	import vSlidebar from './Slidebar';
	import canvasPlugin from '../../assets/canvas-nest.min.js';
	export default {
		name: 'Home',
		components: {vSlidebar, vHeader},
        mounted() {
			let _this = this;
			canvasPlugin(_this.$refs.middle);
		}
	};
</script>

<style scoped lang="scss">
    .home {
        display: flex;
        flex-direction: column;
        .top {
            flex-shrink: 0;
            flex-grow: 0;
        }
        .content {
            flex: 1;
            background: #898989;
        }
    }
</style>
