<template>
  <div>
    333
    <el-button type="primary" @click="handleGetList">拿数据</el-button>
    <el-button @click="handleToTree">转换</el-button>
    <el-button @click="handleOtherTree">其他人的树形数据</el-button>
    <el-tree :data="cateList" :props="defaultProps"></el-tree>
  </div>
</template>

<script>
import { listToTree } from "@/utils/treeUtil";
export default {
  data() {
    return {
      list: [],
      cateList: [],
      defaultProps: {
        children: "children",
        label: "cateName"
      }
    };
  },
  created() {},
  methods: {
    handleGetList() {
      const _this = this;
      this.$axios({
        url: "http://127.0.0.1:8877/tree/findAll",
        method: "get",
        params: {}
      }).then(res => {
        console.log(res);
        _this.cateList = res.data;
        _this.list = res.data;
        console.log("发起了请求");
      });
    },
    handleToTree() {
      let tree = listToTree(this.list);
      console.log(tree);
    },

    handleOtherTree() {
      const _this = this;
      this.$axios({
        url: "http://127.0.0.1:8877/tree/handleOtherTree",
        method: "get",
        params: {}
      }).then(res => {
        console.log(res);
        console.log(res.data);
        _this.cateList = res.data;
        console.log(_this.cateList);
        console.log("发起了请求");
      });
    }
  }
};
</script>
