<template>
  <div>
    <el-container>
      <el-header height="100px">
        <h1>欢迎来到七牛云-音视频大赛</h1>
      </el-header>
      <el-container>
        <el-aside width="100px">
          <MySlider />
        </el-aside>
        <el-main>
          <MyContent />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MyContent from './MyContent.vue';
import MySlider from './MySlider.vue';
import axios from 'axios'
export default {
  name: 'HelloWorld',
  components: {
    MyContent,
    MySlider
  },
  data() {
    return {};
  },
  mounted() {
    axios.get('/index').then(res => {
      console.log(res)
    })
  }
}
</script>

<style scoped>
.el-container {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.el-header {
  color: white;
  font-size: 25px;
  text-align: center;
  line-height: 100px;
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
}

.el-main {
  position: relative;
  overflow: hidden;
}

.el-aside {
  border-right: 1px solid rgb(67, 65, 65);
}
</style>
