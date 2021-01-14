<template>
  <div>
    <input type="file" @change="fileUpload" />
    <el-button type="primary" @click="testClick">点击</el-button>
    <el-button type="primary" @click="regexTest">正则表达式</el-button>
    <el-button type="primary" @click="handleTestThread">多线程</el-button>
    <el-button type="primary" @click="goOther">跳转</el-button>
    <el-button type="primary" @click="testNotity">提示</el-button>
    <br />
    <!-- <el-button type="primary" @click="regexTest1">1111</el-button>
    <el-button type="primary" @click="regexTest2">2222</el-button>
    <el-button type="primary" @click="regexTest3">3333</el-button>
    <el-button type="primary" @click="regexTest4">4444</el-button>
    <el-button type="primary" @click="testRegexHtml5">5555</el-button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: "hello",
    };
  },
  methods: {
    regexTest1() {
      var s =
        '软件地图,软件测1试你好<img src="xxx" alt="a测2试">ASDASD测3试<a href="">a测4试b</a>';
      //<[^>]+>?[^<]*> //<(\s|\S)+?>
      var ary = s.replace(/<(\s|\S)+?>/gim, "|$|").split("|$|");
      for (var i in ary) alert(ary[i]);
    },
    regexTest2() {
      var s =
        '软件地图,软件测1试你好<img src="xxx" alt="a测2试">ASDASD测3试<a href="">a测4试b</a>';
      alert(s.replace(/<([^ >])+[^>]*>(?:[\S\s]*?<\/\1>)?/gi, ""));
    },
    regexTest3() {
      var s =
        '软件地图,软件测1试你好<img src="xxx" alt="a测2试">ASDASD测3试<a href="">a测4试b</a>';
      alert(
        s
          .replace(/<([^ >])+[^>]*>(?:[\S\s]*?<\/\1>)?/gi, "-----------------")
          .match(/测\d试/g)
      );
      console.log(s);
    },

    regexTest4() {
      var s =
        '软件地图,软件img测1试你好<img src="xxx" alt="a测2试">ASDASD测3试<a href="">a测4试b</a>';

      // s.replace(/<([^ >])+[^>]*>(?:[\S\s]*?<\/\1>)?/gi, "").match(/测\d试/g)
      s = s.replace(
        s.replace(/<([^ >])+[^>]*>(?:[\S\s]*?<\/\1>)?/gi, "").match(/img/g),
        "6666666666"
      );

      console.log(s);
    },

    testRegexHtml5() {
      let str = "<p>你p好p啊</p>世界，好啊<p>hello people</p>";
      str = str.replace(
        str.replace(/<([^ >])+[^>]*>(?:[\S\s]*?<\/\1>)?/gi, "").match(/p/g),
        "---"
      );

      console.log(str);
    },

    testNotity() {
      this.$notify({
        title: "提示",
        message: `<a href='${this.hello}'>点击下载</a>`,
        dangerouslyUseHTMLString: true,
        duration: 0,
      });
    },

    goOther() {
      this.$router.push({ path: "/test" });
    },

    handleTestThread() {
      this.$axios({
        url: "http://127.0.0.1:8080/testThread",
        method: "get",
        params: {},
      }).then((res) => {
        console.log(res);
      });
    },
    regexTest() {
      var reg = new Regex("w+(?=ing)");
      var str = "muing";
      console.log(reg.Match(str).Value); //返回mu
    },
    testClick() {
      this.$axios({
        url: "http://127.0.0.1:8080/bigFileConvertTest",
        method: "post",
        params: {},
      }).then((res) => {
        console.log(res);
      });
    },
    fileUpload(file) {
      const formData = new FormData();
      const tmp = file.srcElement.files[0];
      formData.append("file", tmp);

      this.$axios({
        url: "http://127.0.0.1:8080/bigFileConvertTest",
        method: "post",
        data: file,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style  scoped>
</style>