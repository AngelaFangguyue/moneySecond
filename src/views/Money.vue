<template>
  <Layout class="moneyWrapper" classPerfix="money">
    <!-- <Tags class="num4" :dataSource.sync="tags" @updated:selectTags="onUpdated"></Tags> -->
    <Tags class="num4" @updated:selectTags="onUpdated"></Tags>
    <Notes class="num3" @update:value="onNotes"></Notes>
    <!--    <Types class="num2" :value="recordList.type1" @update:value="onTypes"></Types>-->
    <Types class="num2" :value.sync="recordList.type1"></Types>
    <!--    <Numberpads class="num1" :value="recordList.number1" @update:value="onNumberpads"></Numberpads>-->
    <Numberpads class="num1" :value.sync="recordList.number1" @submit="addRecords"></Numberpads>
    {{$store.state.records}}
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

import Numberpads from "@/components/money/Numberpads.vue";
import Tags from "@/components/money/Tags.vue";
import Notes from "@/components/money/Notes.vue";
import Types from "@/components/money/Types.vue";
import recordListsModel from "@/model/recordListsModel";
//import tagModel from "@/model/tagModel";
//import createId from "@/library/createId";

@Component({ components: { Types, Notes, Tags, Numberpads } })
export default class Money extends Vue {
  // //tags = tagModel.fetchTags();//先用tagModel.tags尝试一下
  // tags = tagModel.tags;
  // created() {
  //   this.tags = tagModel.fetchTags();
  // }

  // @Watch("tags")
  // onTagsChanged(val: tagType[]) {
  //   tagModel.tags = val;
  //   tagModel.saveTags();
  //   //const newtag = {id: createId(),name:val};
  //   //tagModel.createTags(newtag);
  // }

  recordList: recordType = {
    tag1: [],
    note1: "",
    type1: "-",
    number1: "0",
    createtime: new Date(),
  };
  recordLists: recordType[] = recordListsModel.getRecords();

  //使用.sync修饰符的例子
  onUpdated(e: string[]) {
    this.recordList.tag1 = JSON.parse(JSON.stringify(e));
    console.log(e);
    
  }
  onNotes(e: string) {
    this.recordList.note1 = e;
    console.log(e);
  }
  // onTypes(e){
  //   this.recordList.type1 = e;
  //   console.log(e);
  // }//使用.sync修饰符
  // onNumberpads(e){
  //   this.recordList.number1 = e;
  //   console.log(e);
  // }//使用.sync修饰符

  addRecords(){
    this.recordList.createtime = new Date();
    this.$store.commit("createRecords",JSON.parse(JSON.stringify(this.recordList)));
    //this.recordList = {};
  }




  // //先将记录push进数组
  // saveRecordsIm() {
  //   //解决每条数据都一样的问题
  //   const newRecordList: recordType = JSON.parse(
  //     JSON.stringify(this.recordList)
  //   );
  //   this.recordLists.push(newRecordList);
  //   //this.recordLists.push(this.recordList);//对象数组，所以要改成上面两句话，才不会使得每条数据都一样
  //   //window.localStorage.setItem("tags",JSON.stringify(this.recordLists));
  //   //this.recordList.number1 = '0';//这句话不应该写在这里，而是要写在number组件中
  // }

  // //watch的时候去调用model中的存储方法
  // @Watch("recordLists")
  // onRecordListsChanged(val: recordType[]) {
  //   //window.localStorage.setItem("tags", JSON.stringify(this.recordLists));
  //   recordListsModel.saveRecords(val);
  // }

  // getRecords() {
  //   return (this.recordLists = JSON.parse(
  //     window.localStorage.getItem("tags") || "[]"
  //   ));
  // }//将其放入model中，mvc
}
</script>

<style lang="scss" scoped>
.moneyWrapper ::v-deep #main-wrapper {
  display: flex;
  flex-direction: column;
  /*.num1{flex-grow: 3}*/
  .num2 {
    flex-grow: 1;
  }
  .num3 {
    flex-grow: 1;
  }
  .num4 {
    flex-grow: 3;
  }
}
</style>
