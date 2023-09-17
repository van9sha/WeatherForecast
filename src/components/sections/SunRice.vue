<script setup>
import {computed} from "vue";
import {Sunrise, Sunset} from "@element-plus/icons-vue";

const props = defineProps({
  weatherInfo:{
    type:[Object,null],
    required:true
  },
})
const getTime = (seconds) => {
  return new Date(seconds * 1000).toLocaleTimeString('ru-RU',{ timeZone:('Atlantic/Reykjavik') })
}

const sunRiseTime = computed(() => {
  return getTime(props.weatherInfo?.sys?.sunrise + timeZone.value)
})

const sunSetTime = computed(() => {
  return getTime(props.weatherInfo?.sys?.sunset + timeZone.value)
});

const timeZone = computed(() => props.weatherInfo?.timezone)
</script>

<template>
<div class="RiceSet">
  <el-icon class="icon-sun"><Sunrise/></el-icon>
  <div class="SunRice">Восход: {{ sunRiseTime }}</div>
  <el-icon class="icon-sun"><Sunset /></el-icon>
  <div class="SunSet">Закат: {{ sunSetTime }}</div>
</div>
</template>

<style scoped lang="sass">
.RiceSet
  display: flex
  flex-direction: column
  justify-content: space-around
  align-items: center
  height: 300px
  background: rgba(#D1D0CE,0.5)
  border-radius: 20px
  font-size: 30px
  color: #2B3856

.el-icon,.el-icon svg
  width: 3em
  height: 3em
  font-size: 30px
  color: #2B3856

</style>