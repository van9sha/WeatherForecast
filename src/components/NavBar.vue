<script setup>

import {Document, Location, Setting, Sunny,} from "@element-plus/icons-vue";
import City from "@/components/sections/City.vue";
import Temp from "@/components/sections/Temp.vue";
import {useRootStore} from "@/stores/root";
import {storeToRefs} from "pinia";
import SunRice from "@/components/sections/SunRice.vue";
import Wind from "@/components/sections/Wind.vue";
import Description from "@/components/sections/Description.vue";
import {watch} from "vue";
import About from "@/components/sections/About.vue";


const rootStore = useRootStore();
const {switchSecondPage,switchPage } = storeToRefs(rootStore);


/*const props = defineProps({
  switchPage:{
    type:[String],
    required:true
  }
})*/

</script>

<template>
  <slot>
    <el-radio-group style="margin-bottom: 20px">
    </el-radio-group>
    <el-menu style="--el-menu-active-color: #f8ff1c;"
        default-active="2"
        class="el-menu-vertical-demo"
    >
      <el-menu-item  index="1" @click="switchPage=City; switchSecondPage=SunRice">
        <el-icon><Location/></el-icon>
        <template #title>City</template>
      </el-menu-item>

      <el-menu-item index="2" @click="switchPage=Temp; switchSecondPage=Wind">
        <el-icon><Sunny /></el-icon>
        <template #title>Temp</template>
      </el-menu-item>

      <el-menu-item index="3" @click="switchPage=Description">
        <el-icon><document/></el-icon>
        <template #title>Description</template>
      </el-menu-item>

      <el-menu-item index="4" @click="switchPage=About">
        <el-icon><setting/></el-icon>
        <template #title>About</template>
      </el-menu-item>
    </el-menu>
  </slot>

</template>

<style scoped lang="sass">
.el-menu-vertical-demo
  background: rgba(#D1D0CE,0.5)

.el-menu
  display: flex
  flex-direction: column
  justify-content: space-evenly
  height: 300px

.el-menu-item
  transition: var(--el-transition-duration)

.knock
  background: rgba(#D1D0CE,0.5)
</style>