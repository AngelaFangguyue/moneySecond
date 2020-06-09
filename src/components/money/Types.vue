<template>
  <div class="types">
    <span :class="value==='-'&& 'selected'" @click="select('-')">支出</span>
    <span :class="value==='+'&& 'selected'" @click="select('+')">收入</span>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';

  @Component
  export default class Types extends Vue {

    @Prop(String) readonly value!: string;

   // type = '-';

    select(type: string){
      if(type==="-"||type==="+"){
        //this.type = type;
        this.$emit("update:value",type);
          console.log(this.value);
      }else{
        throw new Error("类型有错");
      }
    }
    @Watch('type')
    onTypeChanged(val: string){
      this.$emit("update:value",val);
    }
  }
</script>

<style lang="scss" scoped>
  .types {
    border: 1px solid yellow;
    display: flex;
    span {
      border: 2px solid pink;
      padding: 5px 0;
      flex-grow: 1;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      &.selected {
        // border-bottom:15px solid orangered;
        &::after {
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
  }
</style>