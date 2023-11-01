<template>
    <div>
        <h1>实现页面的无限滚动</h1>
        <div class="content">
            <div class="box" ref="box" @mousewheel="orderScroll">
                <div>
                    <video class="video" src="../assets/video1.mp4" controls></video>
                </div>
                <div>
                    <video class="video" src="../assets/video1.mp4" controls></video>
                </div>
                <div>
                    <video class="video" src="../assets/video1.mp4" controls></video>
                </div>
            </div>
        </div>

        <div>
            <button class="btn" @click="nextBox">下一个</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MySlider',
    data() {
        return {
            t: 0
        }
    },
    methods: {
        nextBox() {
            let box = this.$refs.box
            this.t--
            if (this.t < -2) this.t = 0
            box.style.top = this.t * 300 + 'px'
            console.log(box)
        },
        orderScroll(event) {
            let box = this.$refs.box
            if (event.deltaY > 0) {
                this.t--
                if (this.t < -2) this.t = 0
                box.style.top = this.t * 300 + 'px'
                console.log('向下滑动')
            }
            else {
                this.t++
                if (this.t > 0) this.t = -2
                box.style.top = this.t * 300 + 'px'
                console.log('向上滑动')
            }
        }
    }
}
</script>
<style scoped lang="less">
.content {
    width: 300px;
    height: 300px;
    border: 1px solid black;
    margin-left: 50px;
    overflow: hidden;
    position: relative;

    .box {
        position: absolute;
        height: 300px;
        top: 0;
        left: 0;

        div {
            width: 300px;
            height: 300px;

            .video {
                width: 100%;
                height: 100%;
            }
        }
    }

}

.btn {
    width: 30px;
    height: 30px;
    border: 1px solid black;
}
</style>