<template>
  <div>
    <!-- <span style="color: red"> 我是组件1</span> -->
    <br />
    <el-tag type="success" @dragstart.native="dragstart($event)"
      >hello world</el-tag
    >
    <div @dragstart="dragstart($event)">今天天气真好</div>

    <el-input
      v-model="value"
      type="textarea"
      style="width: 400px"
      placeholder="please writing..."
      @drop.native="drop($event)"
      @dragover.native="dragover($event)"
    ></el-input>

    <el-button type="primary" @click="seeVal">查看值</el-button>

    <input type="file" @change="handleInput1Change" />
    <input type="file" @change="handleInput2Change" />
    <el-button type="primary" @click="testTwoFile">测试两个</el-button>
  </div>
</template>


<script>
export default {
  data() {
    return { value: "", str: "", upFormData: new FormData() };
  },
  methods: {
    testTwoFile() {
      this.$axios({
        url: "http://127.0.0.1:8080/testTwoFile",
        method: "post",
        data: this.upFormData,
      }).then((res) => {
        // console.log(res);
        console.log("发起了请求");
      });
    },
    handleInput1Change(file) {
      console.log(11);
      this.upFormData.append("file1", file.srcElement.files[0]);
    },
    handleInput2Change(file) {
      console.log(22);
      this.upFormData.append("file2", file.srcElement.files[0]);
    },
    seeVal() {
      console.log(this.value);
    },
    dragstart(event) {
      console.log(event);
      this.str = event.toElement.innerText;
    },
    dragover(event) {
      event.preventDefault;
    },
    drop(event) {
      console.log(event);
      console.log(this.str);
      this.value += this.str;
    },
  },
};
</script>