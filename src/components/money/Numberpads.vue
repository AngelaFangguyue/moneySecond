<template>
  <div class="numberpadswrapper">
    <div class="output">{{output}}</div>
    <div class="numberpads clear-fix">
      <button
        @click="addNumberpad"
        v-for="(name, index) in numbers"
        :key="index"
        :class="
            (name === '删除' && 'clear') ||
              (name === '清零' && 'zero') ||
              (name === 'OK' && 'ok') ||
              (name === '.' && 'point')
          "
      >{{ name }}</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import eventBus from '@/eventBus';
@Component
export default class Numberpads extends Vue {
  @Prop(String) value!: string;

  output = this.value;
  numbers = [
    "1",
    "2",
    "3",
    "删除",
    "4",
    "5",
    "6",
    "清零",
    "7",
    "8",
    "9",
    "OK",
    "0",
    "."
  ];
  addNumberpad(event: MouseEvent) {
    if (event.target) {
      const button = event.target as HTMLButtonElement;
      const input = (button.textContent as string).trim();
      if (input === "OK") {
        //TODO OK事件
        console.log("1", input);

        this.$emit("update:value", this.output);
        this.$emit("submit", this.output);
        eventBus.$emit("clearSelectedTag");
        this.output = "0"; //注意这句话要写在Money.vue组件中，若写成下面这句话，由于.sync,使得value会及时改变
        //this.output = this.value;//其实这个时候，value早就不是最开始的0了
      } else if (input === "删除") {
        if (this.output.length === 1) {
          this.output = "0";
        } else {
          this.output = this.output.slice(0, -1);
        }
      } else if (input === "清零") {
        this.output = "0";
      } else {
        //TODO
        //1：一些具体的逻辑先不写了,比如第一个字符是.,或者已经有一个小数点了，又点击了怎么办
        this.output += input;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.numberpadswrapper {
  .output {
    height: 60px;
  }
  .numberpads {
    float: left;
    width: 100%;
    button {
      width: 25%;
      height: 60px;
      &.point {
        width: 50%;
      }
      &.ok {
        float: right;
        height: 120px;
      }
    }
  }
}
</style>