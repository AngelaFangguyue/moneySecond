<template>
  <Layout class="moneyWrapper" classPerfix="money">
    <Tags class="num4" :dataSource.sync="tags" @updated:selectTags="onUpdated"></Tags>
    <Notes class="num3" @update:value="onNotes"></Notes>
<!--    <Types class="num2" :value="tagList.type1" @update:value="onTypes"></Types>-->
    <Types class="num2" :value.sync="tagList.type1" ></Types>
<!--    <Numberpads class="num1" :value="tagList.number1" @update:value="onNumberpads"></Numberpads>-->
    <Numberpads class="num1" :value.sync="tagList.number1"
    @submit="saveRecords"></Numberpads>
    {{tagLists}}
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Watch} from 'vue-property-decorator';



import Numberpads from '@/components/money/Numberpads.vue';
import Tags from '@/components/money/Tags.vue';
import Notes from '@/components/money/Notes.vue';
import Types from '@/components/money/Types.vue';

type tagRecord = {
  tag1: string[];
  note1: string;
  type1: string;
  number1: string;
}


@Component({ components: {Types, Notes, Tags, Numberpads } })
export default class Money extends Vue {
  tags = ["衣","食","住","行"];
  tagList: tagRecord = {
    tag1:[],
    note1:'',
    type1:'-',
    number1:'0'
  };

   //tagLists:tagRecord[] = [];
  tagLists: tagRecord[] = this.getRecords();

  onUpdated(e){
    this.tagList.tag1 = e;
    console.log(e);
  }
  onNotes(e){
    this.tagList.note1 = e;
    console.log(e);
  }
  // onTypes(e){
  //   this.tagList.type1 = e;
  //   console.log(e);
  // }//使用.sync修饰符
  // onNumberpads(e){
  //   this.tagList.number1 = e;
  //   console.log(e);
  // }//使用.sync修饰符


  //在本地存储记录
  saveRecords(){
    this.tagLists.push(this.tagList);
    //window.localStorage.setItem("tags",JSON.stringify(this.tagLists));
    //this.tagList.number1 = '0';//这句话不应该写在这里，而是要写在number组件中
  }

  //watch的时候去存储
  @Watch ("tagLists")
  onTagsListChanged(){
    window.localStorage.setItem("tags",JSON.stringify(this.tagLists));
  }


  getRecords(){
    return this.tagLists = JSON.parse(window.localStorage.getItem("tags")||'[]');
  }

}
</script>

<style lang="scss" scoped>
.moneyWrapper ::v-deep #main-wrapper {
    display: flex;
    flex-direction: column;
  /*.num1{flex-grow: 3}*/
  .num2{flex-grow:1}
  .num3{flex-grow: 1}
  .num4{flex-grow: 3}
}

</style>
