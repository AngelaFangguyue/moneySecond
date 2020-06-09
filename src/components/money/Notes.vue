<template>
  <div class="notes">
    {{sayings}}
<!--    <InputForm></InputForm>-->
<!--    <input placeholder="请输入备注" :value="sayings"-->
<!--    @input="sayings=$event.target.value"    v-model="sayings">-->
    <input placeholder="请输入备注"    v-model="sayings" >
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  //import InputForm from "@/components/InputForm.vue";

  // @Component({components:{InputForm}})
  @Component
  export default class Notes extends Vue {
    sayings = '';
    // onInput(e:InputEvent){
    //   this.sayings = (e.target as HTMLInputElement).value;
    // }
    @Watch('sayings')
    onSayingsChanged(val: string){
      this.$emit("update:value",val)
    }
  }
</script>

<style lang="scss" scoped>
  .notes {
    border: 1px solid green;
  }
</style>