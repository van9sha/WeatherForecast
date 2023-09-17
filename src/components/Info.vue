<script setup>
import Description from "@/components/sections/Description.vue";
import {useRootStore} from "@/stores/root";
import {storeToRefs} from "pinia";
import {computed, ref} from "vue";

const rootStore = useRootStore();




const props = defineProps({
  weatherInfo:{
    type:[Object,null],
    required:true
  },
  bal:{
    type:Boolean
  },
  items:{
    type:Object
  }
})



function addItem(){
    this.item.id = Date.now();
    this.item.city = props.weatherInfo?.name;
    this.item.temp = props.weatherInfo?.main?.temp;
    this.$emit('create',this.item)
    this.item = {
      id: '',
      city: '',
      temp: '',
    }
  }

</script>

<template>
  <form @submit.prevent>
  <div class="info-main">
    <Description
        v-for="item in items"
        :key="Date.now()"
        :item="item"
        :weatherInfo="weatherInfo"
        :addItem="addItem"
        :bal="bal"

    />
  </div>
  </form>
</template>

<style scoped lang="sass">
.info-main
  display: flex
  justify-content: space-around
</style>