<template>
  <nav id="nav-global">
    <router-link to="/money" class="nav-part">money</router-link>
    <router-link to="/label" class="nav-part">label</router-link>
    <router-link to="/statistics" class="nav-part">statistics</router-link>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Nav extends Vue {}
</script>

<style lang="scss" scoped >
#nav-global {
  display: flex;
  flex-direction: row;
  .nav-part {
    flex-grow: 1;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>