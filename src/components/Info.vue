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

const emit = defineEmits(['create'])

const item = ref(props.items)

function addItem(item){
    item.id = Date.now();
    item.city = props.weatherInfo?.name;
    item.temp = props.weatherInfo?.main?.temp;
    emit('create',item.value)
    item.value = {
      id:'',
      city:'',
      temp:'',
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