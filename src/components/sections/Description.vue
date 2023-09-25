<script setup>

import {Plus} from "@element-plus/icons-vue";



const props = defineProps({
  weatherInfo:{
    type:[Object,null],
    required:true
  },
  item:{
    type:Object,
    required:true
  },
  addItem:{
    type:Function,
  },
  bal:{
    type:Boolean
  },
  removeItem:{
    type:Function,
  }
})



</script>


<template>
    <div class="description-main">
      <div v-if="bal === true || item.id === ''" class="description">
          <el-button :bal="bal" @click="bal = !bal;addItem(item)"  :icon="Plus" circle  />
        </div>
      <div v-else class="description">
        <el-button class="delete" :bal="bal" @click="bal = !bal;removeItem(item)"  :icon="Plus" circle/>
        <div v-if="bal === false" class="item" >
          <div class="img" :style="`background: url(https://openweathermap.org/img/wn/${item.img}@2x.png)`"></div>
          <div class="city">{{ item.city }}</div>
          <div class="temp">{{ Math.round(item.temp) }}C&deg</div>
          </div>
        </div>
      </div>
</template>



<style lang="sass" scoped>



.description-main
  display: flex
  align-items: center
  justify-content: center
  width: 200px
  height: 280px
  border: solid ivory 1.5px
  margin-left: 20px
  border-radius: 20px

.img
  width: 100px
  height: 100px


.delete
  position: absolute
  margin: -25px 105px

.item
  width: 100px
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column

.id
  font-size: 25px
  margin-bottom: 40px
  color: #2B3856

.city
  font-size: 35px
  margin-bottom: 25px
  color: #2B3856

.temp
  font-size: 35px
  color: #2B3856
</style>