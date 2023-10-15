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
    <div>Wind</div>
    <div class="tempNow">Speed: <strong>{{ weatherInfo?.wind?.speed }}</strong> m/sec</div>
    <div class="tempMax">Direction: {{ weatherInfo?.wind?.deg }}&deg;</div>

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
  font-size: 45px
  color: #2B3856

.tempMax,.tempMin
  font-size: 30px
</style>