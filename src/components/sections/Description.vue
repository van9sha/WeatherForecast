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
          <el-button :bal="bal" @click="bal = !bal;addItem()"  :icon="Plus" circle  />
        </div>
      <div v-else class="description">
        <el-button class="delete" :bal="bal" @click="bal = !bal"  :icon="Plus" circle/>
        <div v-if="bal === false" class="item" >
          {{ item.id }}
          {{ item.city }}
          {{ item.temp }}
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
    height: 300px
    border: solid ivory 1.5px
    border-radius: 20px

.delete
  position: absolute
  margin: -100px 80px
</style>