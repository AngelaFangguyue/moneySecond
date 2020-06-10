<template>
  <div class="tags">
    <!-- <ul>
      <li @click="toggleSelectTags(item)" v-for="item in dataSource" :key="item.id">{{ item.name }}</li>
    </ul>-->
    <br />
    <ul>
      <li
        @click="toggleSelectTags(item)"
        v-for="item in $store.state.tags"
        :key="item.id"
      >{{ item.name }}</li>
    </ul>
    <br />
    <mt-button class="addTagButton" type="default" size="normal" @click.native="addTags">新增标签</mt-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
//import tagModel from "@/model/tagModel";
import { MessageBox } from "mint-ui";
import createdId from "../../library/createId";
import eventBus from "@/eventBus.ts";

//  TODO,如何给其定义类型
//MessageBox.prompt("请输入新增标签名").then(() => {});

@Component
export default class Tags extends Vue {
  //@Prop(Array) readonly dataSource: string[]|undefined;
  selectedTags: string[] = [];
  //TODO
  ////////////////////
  // //tags = tagModel.tags;
  // addTags() {//应该将其抽取成一个组件
  //   //TODO
  //   MessageBox.prompt("请输入新增标签名").then(({ value, action }) => {
  //     //console.log(value);
  //     //console.log(action);
  //     // this.tags.push(value);
  //     //let newTags = JSON.parse(JSON.stringify(this.tags.push(value)));
  //     //tagModel.createTags(value);
  //     if(value===''){
  //       //TODO  用Mint-ui去提醒
  //       console.log("标签名输入不能为空")
  //     }else{
  //       if(this.dataSource){
  //         const newTag = {id:createdId(),name:value};
  //         //this.dataSource.push(value);
  //         this.$emit("update:dataSource",[...this.dataSource,newTag]);//这个是更新父组件中的tag
  //       }
  //     }
  //   });
  // }
  // addTags() {
  //   MessageBox.prompt("请输入新增标签名").then(({ value, action }) => {
  //     if (value === "") {
  //       //TODO  用Mint-ui去提醒
  //       console.log("标签名输入不能为空");
  //     } else {
  //       // if(this.dataSource){
  //       const newTag = { id: createdId(), name: value };
  //       //this.dataSource.push(value);
  //       //   this.$emit("update:dataSource",[...this.dataSource,newTag]);//这个是更新父组件中的tag
  //       // }

  //       this.$store.commit("createTags", newTag);
  //     }
  //   });
  // }
  //////////////////////

  toggleSelectTags(tag: string) {
    //console.log((e.target as HTMLButtonElement).textContent);
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    console.log(this.selectedTags);
  }

  @Watch("selectedTags")
  onChildChanged(val: string[]) {
    this.$emit("updated:selectTags", val);
    //this.selectedTags = [];
  }

  ////////////////////////////////
  created() {
    this.$store.commit("fetchTags");
    this.$store.commit("getRecords");
    eventBus.$on("clearSelectedTag", () => {
      this.selectedTags = [];
    });
  }
}
</script>

<style lang="scss" scoped>
.tags {
  position: relative;
  border: 1px solid red;
  padding: 16px;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    li {
      padding: 4px;
      background-color: wheat;
      min-width: 70px;
      text-align: center;
      margin: 5px 10px 5px 0;
    }
  }
  .addTagButton {
    position: absolute;
    left: 16px;
    bottom: 16px;
  }
}
</style>