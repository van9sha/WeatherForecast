<script setup>
import Input from "@/components/Input.vue";
import WeatherSection from "@/components/WeatherSection.vue";
import {useRootStore} from "@/stores/root";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";
import {Moon, Search, Sunny} from "@element-plus/icons-vue";


const rootStore = useRootStore();
rootStore.getWeather();
rootStore.getCoordinates()

const { weatherInfo,city_name,coordinates,backgroundImage} = storeToRefs(rootStore);

function getCoordinate(coordinates){
  coordinates.value = [rootStore.weatherInfo?.coord?.lat,rootStore.weatherInfo?.coord?.lon]
  return coordinates.value
}

onMounted(rootStore.getWeather)
onMounted(rootStore.getCoordinates)
onMounted(rootStore.getBackGround)


</script>

<template>
  <div :style='`background-image:url(${backgroundImage})`' class="root" >
    <div class="wrapper" >
      <div class="main">
        <div class="header" >
          <div class="input_place">
            <Input
                :city_name="city_name"
                :getWeather="rootStore.getWeather"
                v-model="rootStore.city_name"
                :getBackGround="rootStore.getBackGround"
            />
            <el-button class="btn" :icon="Search" @click="rootStore.getWeather() ; rootStore.getBackGround()" circle />
          </div>
        </div>
        <WeatherSection

            :weatherInfo="weatherInfo"
            :coordinates="getCoordinate(coordinates)"
        />
<!--            :switchPage="switchPage"-->

      </div>
    </div>

  </div>
</template>

<style scoped lang="sass">
@import "../assets/styles/main"



.btn
  position: relative
  margin-bottom: 30px
  transform: translateX(-110%)
  border: none
  height: 65px
  width: 65px

.img
  background-size: cover
  background-repeat: no-repeat
  width: 100%
  background-position: center

.main
  width: 100%

.header
  display: flex
  justify-content: center
  align-items: center
  height: 350px

.info
  display: flex
  justify-content: space-between
  height: 100%
  flex-direction: column
  align-items: center

.el-switch
  position: absolute
  height: 50px
  width: 100px
  margin-top: 30px
  align-items: center
  justify-content: center

</style>