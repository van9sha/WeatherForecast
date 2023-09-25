<script setup>
import {computed} from "vue";

const props = defineProps({
  weatherInfo:{
    type:[Object,null],
    required:true
  },
})
const today = new Date().toLocaleString('ru-RU',{weekday: 'short', year:'numeric', month:'long', day: 'numeric',hour:'numeric',minute:'numeric'})

function getDate(){
  return new Date().toLocaleString('ru-RU', {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  })
}



</script>

<template>
  <div class="city-main">
    <div class="city"><strong>{{ weatherInfo?.name }}</strong> ||  {{weatherInfo?.sys?.country }}</div>
    <div class="description">{{ weatherInfo?.weather[0]?.description }}</div>
    <div class="img" :style="`background: url(https://openweathermap.org/img/wn/${weatherInfo?.weather[0]?.icon}@2x.png)`"></div>
    <div class="data">{{ getDate(today)}}</div>
  </div>
</template>

<style scoped lang="sass">
.city-main
  display: flex
  flex-direction: column
  justify-content: space-around
  align-items: center
  height: 300px
  font-size: 20px
  background: rgba(#D1D0CE,0.5)

.description,.city,.data
  font-size: 30px
  color: #2B3856
.img
  width: 100px
  height: 100px


</style>