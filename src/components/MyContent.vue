<template>
    <div>
        <div class="content">
            <div class="box" ref="box" @mousewheel="orderScroll">
                <div>
                    <video class="video" src="../assets/video1.mp4" controls></video>
                </div>
                <div>
                    <video class="video" src="../assets/video2.mp4" controls></video>
                </div>
                <div>
                    <video class="video" src="../assets/video3.mp4" controls></video>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MyContent',
    data() {
        return {
            t: 0
        }
    },
    methods: {
        orderScroll(event) {
            let box = this.$refs.box
            let len = box.clientHeight
            console.log(box.clientHeight)
            if (event.deltaY > 0) {
                this.t--
                if (this.t < -2) this.t = 0
                box.style.top = this.t * len + 'px'
                console.log('向下滑动')
            }
            else {
                this.t++
                if (this.t > 0) this.t = -2
                box.style.top = this.t * len + 'px'
                console.log('向上滑动')
            }
        }
    }
}
</script>
<style scoped lang="less">
@height: 600px;

.content {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;

    .box {
        position: absolute;
        height: 100%;
        width: 50%;
        // top: 0;
        left: 0;
        // bottom: 0;
        right: 0;
        margin: 0 auto;

        div {
            height: 100%;
            // width: 100%;
            margin: 0 auto;

            .video {
                height: 100%;
                width: auto;

            }
        }
    }

}
</style>