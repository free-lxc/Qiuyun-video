<template>
  <div class="hello">
    <div class="content">
      <div class="box" ref="box">
        <video class="video" src="../assets/video1.mp4"></video>
        <video ref="video" class="video" src="../assets/video1.mp4"></video>
        <video class="video" src="../assets/video1.mp4"></video>
      </div>
    </div>

    <div>
      <button class="btn" @click="start">播放视频</button>
      <button class="btn" @click="stop">停止视频</button>
      <button class="btn" @click="nextVideo">下一个视频</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {

    }
  },
  props: {
    msg: String
  },
  methods: {
    start() {
      let video = this.$refs.video
      // console.log(video.currentTime, video.duration)
      video.currentTime = 2.0
      video.play()
    },
    stop() {
      this.$refs.video.pause()
    },
    nextVideo() {
      let box = this.$refs.box
      let t = box.style.top.replace('px')
      t -= 10
      box.style.top = t + 'px'
      console.log(box.style.top, 111)

    }
  }
}
</script>

<style scoped>
.content {
  height: 300px;
  width: 300px;
  overflow: hidden;
  position: relative;
}

.box {
  position: absolute;
  top: 0px;
  left: 0;
}

.video {
  height: 300px;
  width: 300px;
}

.btn {
  width: 50px;
  height: 50px;
  border: 1px solid black;
  margin-left: 30px;
}
</style>
