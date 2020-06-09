<template>
  <div id="layout-global" :class="`${classPerfix}-layout-global`">
    <div id="main-wrapper" :class="`${classPerfix}-main-wrapper`">
      <slot></slot>
    </div>
    <Nav id="nav-global"></Nav>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Layout extends Vue {
  @Prop(String) readonly classPerfix!: string;
}
</script>

<style lang="scss" scoped>
#layout-global {
  height: 100vh;
  display: flex;
  flex-direction: column;
  #main-wrapper {
    flex-grow: 1;
    overflow: auto;
  }
  #nav-global {
  }
}
</style>
