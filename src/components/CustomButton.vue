<template>
    <div>
      <button class="addButton" @click="$emit('click1',$event)"><slot/>点击操作</button>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from 'vue-property-decorator';
@Component
export default class CustomButton extends Vue{
  //这里面封装的是自定义的button
  //computed   

}
</script>

<style scoped>
</style>