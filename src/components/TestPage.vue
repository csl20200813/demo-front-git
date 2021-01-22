<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="用户管理" name="first">
      <One></One>
    </el-tab-pane>

    <el-tab-pane label="配置管理" name="second">
      <Two></Two>
    </el-tab-pane>

    <el-tab-pane label="树形组件" name="five">
      <Three></Three>
    </el-tab-pane>

    <el-tab-pane label="分片上传" name="third">
      <FileUp></FileUp>
    </el-tab-pane>

    <el-tab-pane label="echarts部分" name="fourth">
      <Fourth></Fourth>
    </el-tab-pane>

    <el-tab-pane label="echarts" name="six">
      <Five></Five>
    </el-tab-pane>

    <el-tab-pane label="定时任务补偿" name="seven">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>



<script>
import One from "../components/tabpanes/one";
import Two from "../components/tabpanes/Two";
import Five from "../components/tabpanes/Five";
import Three from "../components/tabpanes/three";
import Fourth from "../components/tabpanes/Fourth";
import FileUp from "../components/tabpanes/fileUp";
export default {
  components: {
    One,
    Two,
    FileUp,
    Three,
    Five,
    Fourth,
  },
  data() {
    return {
      activeName: "six",
    };
  },
  methods: {},
};
</script>