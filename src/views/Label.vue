<template>
  <Layout>
    <div>
      <mt-header title="标签"></mt-header>
    </div>
    <ul>
      <li v-for="item in tags" :key="item.id" @click="edit(item.id)">{{item.name}}</li>
      <!-- <mt-button  icon="back" slot="left">返回</mt-button> -->
    </ul>
    <div>
      <!--这个待会儿将其封装成一个组件，
    这个其实和Money页面的新增是同一个功能，
      所以可以做成一个新增tag的组件，或者使用全局的数据管理去新增tag-->
      <mt-button class="addButton" @click.native="addTag">点击新增</mt-button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import tagModel from "@/model/tagModel";
import { MessageBox } from "mint-ui";

@Component
export default class Label extends Vue {
  // @Prop(Array) tags!: string[];
  // tags: tagType[] = tagModel.fetchTags(); //TODO,在这个地方有一个钩子获取不到数据
  tags: tagType[] = tagModel.tags;

  edit(id: string) {
    this.$router.push(`/label/${id}`);
  }

  created() {
    this.tags = tagModel.fetchTags();//现在是可以正常添加的
  }

  addTag() {
    console.log("新增");
    console.log(MessageBox);
    MessageBox.prompt("请输入新增标签名").then(({ value, action }) => {
      if(value !== '' && action === "confirm" ){
      const newTag = {id: 34,name: value};//要有一个createId的生成器
      tagModel.createTags(newTag);
      }
    })
  }
}
</script>

<style lang="scss" scoped>
ul {
  li {
    padding: 10px;
    margin: 2px 0;
    background-color: rgb(38, 162, 255);
  }
}
</style>