<script setup>

import {Plus} from "@element-plus/icons-vue";
import {computed, onBeforeMount, onMounted, ref} from "vue";
import {useRootStore} from "@/stores/root";
import {storeToRefs} from "pinia";

const rootStore = useRootStore();

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
  }
})



</script>


<template>
    <div class="description-main">
      <div v-if="bal === true || item.id === ''" class="description">
          <el-button :bal="bal" @click="bal = !bal;addItem(item)"  :icon="Plus" circle  />
        </div>
      <div v-else class="description">
        <el-button class="delete" :bal="bal" @click="bal = !bal;"  :icon="Plus" circle/>
        <div v-if="bal === false" class="item" >
          <div>{{ item.id }}</div>
          <div>{{ item.city }}</div>
          <div>{{ item.temp }}</div>
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

.delete
  position: absolute
  margin: -75px 105px

.item
  width: 100px
  height: 100px
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
</style>