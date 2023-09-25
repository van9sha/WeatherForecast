<script setup>
import {Search} from "@element-plus/icons-vue";

const props = defineProps({
  city_name:{
    type:String,
    required:true
  },
  getWeather:{
    type:Function,
    required:true
  },

})
</script>

<template>
  <el-input
      @keyup.enter="props.getWeather"
      class='input'
      type="text"
      placeholder=" "
  />

</template>

<style scoped lang="sass">
.input
  width: 450px
  height: 70px
  font-size: 30px
  margin-bottom: 30px
</style>