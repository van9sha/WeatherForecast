<script setup>
import Description from "@/components/sections/Description.vue";
import {ref} from "vue";

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

const emit = defineEmits(['create'])

const item = ref(props.items)

function addItem(item){
    item.img = props.weatherInfo?.weather[0]?.icon
    item.id = Date.now()
    item.city = props.weatherInfo?.name;
    item.temp = props.weatherInfo?.main?.temp;
    emit('create',item.value)
    item.value = {
      id:'',
      city:'',
      temp:'',
      img:'',
    }
  }

function  removeItem(item){
  item.id = ''
  item.city = ''
  item.temp = ''
  item.img = ''
}


</script>

<template>
  <form @submit.prevent>
  <div class="info-main">
    <Description
        v-for="item in items"
        :key="item.id"
        :item="item"
        :weatherInfo="weatherInfo"
        :addItem="addItem"
        :removeItem="removeItem"
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