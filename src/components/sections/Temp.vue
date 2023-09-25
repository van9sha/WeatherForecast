<script setup>
const props = defineProps({
  weatherInfo:{
    type:[Object,null],
    required:true
  }
})
</script>

<template>
  <div class="temp">
    <div style="font-size: 45px">Temp</div>
    <div class="tempNow"><strong>{{ Math.round(weatherInfo?.main?.temp) }}C&deg</strong></div>
    <div class="tempMin">feels: {{ Math.round(weatherInfo?.main?.feels_like) }}C&deg</div>
  </div>
</template>

<style scoped lang="sass">
.temp
  display: flex
  flex-direction: column
  justify-content: space-between
  align-items: center
  height: 300px
  background: rgba(#D1D0CE,0.5)
  font-size: 55px
  color: #2B3856

.tempMax,.tempMin
  font-size: 30px
  padding-right: 50px
</style>