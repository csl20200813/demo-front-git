<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="width:25%"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <!-- <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group> -->
        <!-- <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu> -->
      </el-submenu>

      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" >
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>

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
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
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