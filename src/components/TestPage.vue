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

    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>



<script>
import One from "../components/tabpanes/one";
import Two from "../components/tabpanes/Two";
import Three from "../components/tabpanes/three";
import FileUp from "../components/tabpanes/fileUp";
export default {
  components: {
    One,
    Two,
    FileUp,
    Three
  },
  data() {
    return {
      activeName: "second",
    };
  },
  methods: {},
};
</script>