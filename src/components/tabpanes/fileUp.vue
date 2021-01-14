<template>
  <div>
    <div style="width: 100%">
      <uploader
        :options="options"
        :autoStart="false"
        :fileStatusText="{
          success: '上传成功',
          error: '上传失败',
          uploading: '正在上传',
          paused: '暂停上传',
          waiting: '等待上传',
        }"
        @file-success="onFileSuccess"
        @file-added="fileAdded"
        @file-error="onFileError"
        class="uploader-example"
      >
        <uploader-unsupport></uploader-unsupport>
        <uploader-drop>
          <uploader-btn :attrs="attrs" single>上传</uploader-btn>
        </uploader-drop>
        <uploader-list></uploader-list>
      </uploader>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        target: "http://127.0.0.1:8080/bigFile/fileUpload", //上传地址
        chunkSize: 5 * 1024 * 1024,
        // changeOrigin: true,
        testChunks: false,
        headers: {
          //设置header
          xtoken: localStorage.token,
        },
        singleFile: true,
        query: {
          //传参,没有可以不传
          // module: 10
        },
      },
      attrs: {
        accept: "*", //接受文件类型
      },
    };
  },
  methods: {
    //大文件上传标签删除
    handleClose() {
      console.log("handleClose");
    },
    //大文件上传所需
    fileAdded(file) {
      //选择文件后暂停文件上传，上传时手动启动
      file.pause();
    },
    onFileError(file) {
      console.log("error", file);
    },
    onFileSuccess(rootFile, file, response, chunk) {
      console.log("上传成功");
    },
  },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}

.uploader-list > ul > li {
  width: 100%;
  color: red;
  margin-bottom: 0;
}

a {
  color: #42b983;
}

.fileupload {
  width: 50%;
  margin-left: 25%;
}
</style>
