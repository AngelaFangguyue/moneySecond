<template>
  <div>
    <mt-header title="编辑标签页面">
      <router-link to="/label" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div>
      <input type="text" v-model="tagName" />
    </div>
    <div>
      <!--这个待会儿将其封装成一个组件-->
      <mt-button class="deleteButton" @click.native="deleteTag">点击删除</mt-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import tagModel from "@/model/tagModel";
@Component
export default class EditLabel extends Vue {
  // tagId = this.$route.params;
  tagId = "";
  tagIndex = -1;
  tagName = "";
  //tag = { id: 0, name: "" };
  // tag = {};
  //这两种写法也可以，只不过需要在watch的时候，watch的是tag.name,如果只watch tag的话，会报错。
  //[Vue warn]: Error in callback for watcher "tag": 
  //"TypeError: Converting circular structure to JSON-->
  //starting at object with constructor 'Object'--- property 'name' closes the circle"
  created() {
    //找到id对应的tag对象
    //console.log("this.tagId111");
    this.tagId = this.$route.params.id;
    this.tagIndex = tagModel.findTagId(this.tagId);
    this.tagName = tagModel.tags[this.tagIndex].name;
    //this.tag = tagModel.tags[this.tagIndex];
    //console.log(this.$route.params, this.tagId, this.tagIndex, this.tagName);//{id:"2"} "2"  -1  undefined
  }
  //当tag变化的时候，去保存，也就是修改tag的时候
  @Watch("tagName")
  onTagChanged(val: string) {
    //根据id去找到内容，修改保存，同样也要调用model里的保存tag的方法
    //tagModel.tags.indexOf;
    //const tag = { id: this.tagId, name: val };
    //找到对应tag的index下标，删除，将新的tag放进去，所以将找到tag的下标的方法也写到model中
    // tagModel.tags.find(item => {
    //   item.id === parseInt(this.tagId);
    // });
    console.log(val);
    tagModel.tags[this.tagIndex].name = val;
    JSON.stringify(tagModel.tags);
    tagModel.saveTags();
  }

  deleteTag() {
    //console.log("删除"); //这个方法也要写到model中
    tagModel.deleteTags(this.tagIndex);
    //tagModel.saveTags();
    this.$router.push("/label");
  }
}
</script>

<style scoped>
.deleteButton {
  margin-top: 20px;
}
</style>