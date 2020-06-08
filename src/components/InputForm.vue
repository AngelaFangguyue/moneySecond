<template>
  <div>
    <mt-field
     :attr="{ maxlength: 100 }"
      placeholder="请输入备注"
      type="textarea"
      rows="2"
      v-model="notesInputForm"
    ></mt-field>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class InputForm extends Vue {
  notesInputForm = "";
}
</script>

<style scoped></style>
