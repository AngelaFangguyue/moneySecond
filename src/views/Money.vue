<template>
  <Layout class="moneyWrapper">
    <!-- <div>要使用插槽了</div> -->
    <div class="moneyContent">
      <div class="tags">
        <ul>
          <li v-for="item in tags" :key="item">{{ item }}</li>
        </ul>
        <!-- <ul>
        <li v-for="item in  tagModel.tags" :key="item">{{ item }}</li>
      </ul> -->
        <!-- <Button @click="addTags">新加标签</Button> -->
        <mt-button
          class="addTagButton"
          type="default"
          size="normal"
          @click.native="addTags"
          >新增标签</mt-button
        >
      </div>
      <div class="notes">
        <InputForm></InputForm>
      </div>
      <div class="types">
        <span class="selected">支出</span>
        <span>收入</span>
      </div>
      <div class="numberpads clear-fix">
        <button
          v-for="(name, index) in numbers"
          :key="index"
          :class="
            (name === '清除' && 'clear') ||
              (name === '清零' && 'zero') ||
              (name === 'OK' && 'ok') ||
              (name === '.' && 'point')
          "
        >
          {{ name }}
        </button>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { MessageBox } from "mint-ui";
import tagModel from "@/model/tagModel.ts";

import InputForm from "@/components/InputForm.vue";

@Component({ components: { InputForm } })
export default class Money extends Vue {
  numbers = [
    "1",
    "2",
    "3",
    "清除",
    "4",
    "5",
    "6",
    "清零",
    "7",
    "8",
    "9",
    "OK",
    "0",
    ".",
  ];

  //tags = ["1w", "2w", "3w"];
  tags = tagModel.tags;
  addTags() {
    //TODO
    // MessageBox.prompt("请输入新增标签名").then(({ value, action }) => {
    //   //console.log(value);
    //   //console.log(action);
    //   // this.tags.push(value);
    //   //let newTags = JSON.parse(JSON.stringify(this.tags.push(value)));
    //   tagModel.createTags(value);
    // });
  }
}
</script>

<style lang="scss" scoped>
.moneyWrapper {
  ::deep #main-wrapper {
    display: flex;
    // flex-direction: column-reverse;
  }
}

.moneyWrapper {
  .moneyContent {
    display: flex;
    flex-direction: column;
    flex-flow: column-reverse;
  }
  .tags {
    border: 1px solid red;
    padding: 16px;
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      li {
        padding: 4px;
        background-color: wheat;
        min-width: 80px;
        text-align: center;
        margin: 5px 10px 5px 0;
      }
    }
    .addTagButton {
      margin-top: 4px;
      border: none;
    }
  }
  .notes {
    border: 1px solid green;
  }
  .types {
    border: 1px solid yellow;
    display: flex;
    span {
      border: 2px solid pink;
      padding: 5px 0;
      flex-grow: 1;
      text-align: center;
      position: relative;
      &.selected::after {
        // border-bottom:15px solid orangered;
        content: "";
        display: block;
        height: 4px;
        width: 100%;
        background-color: black;
        position: absolute;
        left: 0;
        bottom: -3px;
      }
    }
  }
  .numberpads {
    //display: flex;
    //flex-wrap: wrap;
    float: left;
    width: 100%;
    button {
      width: 25%;
      height: 30px;
      &.point {
        width: 50%;
      }
      &.ok {
        float: right;
        height: 60px;
      }
    }
  }
}
</style>
