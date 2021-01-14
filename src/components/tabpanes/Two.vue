<template>
  <div>
    <span style="color: green">
      我是组件222222222222222222222222222222222222222222222</span
    >

    <el-button type="primary" @click="triggerWebsocket"
      >websocket请求</el-button
    >

     <el-button type="primary" @click="testDie"
      >测试死循环</el-button
    >
  </div>
</template>

<script>
import SockJS from "sockjs-client";
import Stomp from "stompjs";
export default {
  data() {
    return {};
  },
  created() {
    this.initWebsocket();
  },
  methods: {
    testDie(){
       this.$axios({
        url: "http://127.0.0.1:8080/testDie",
        method: "get",
        params: {},
      }).then((res) => {
        // console.log(res);
        console.log("发起了请求");
      });
    },
    initWebsocket() {
      const socket = new SockJS("http://127.0.0.1:8080/socket");
      const stompClient = Stomp.over(socket);
      stompClient.connect({}, () => {
        stompClient.subscribe("/topic/websocketInfo/csl", (msg) => {
          console.log(msg);
        //   this.$message.success(msg);
        //   this.$message.success(msg.body);
          this.$message.success(JSON.parse(msg.body).title);
        });
      });
    },
    triggerWebsocket() {
      this.$axios({
        url: "http://127.0.0.1:8080/triggerWebsocket",
        method: "get",
        params: {},
      }).then((res) => {
        // console.log(res);
        console.log("发起了请求");
      });
    },
  },
};
</script>