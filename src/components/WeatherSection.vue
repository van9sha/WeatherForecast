<script setup>

import NavBar from "@/components/NavBar.vue";
import Description from "./sections/Description.vue";
import {useRootStore} from "@/stores/root";
import {storeToRefs} from "pinia";
import {YandexMap} from "vue-yandex-maps";
import {ref} from "vue";
import Info from "@/components/Info.vue";
import useLocalStorage from "@/composables/useLocalStorage";
import About from "@/components/sections/About.vue";
import City from "@/components/sections/City.vue";
import Temp from "@/components/sections/Temp.vue";



const rootStore = useRootStore();
rootStore.getWeather()
rootStore.getCoordinates()
const { switchPage } = storeToRefs(rootStore);

const props = defineProps({
  weatherInfo:{
    type:[Object],
    required:true
  },
  coordinates:{
    type:Object,
    required:true
  },


  /*switchPage:{
    type:String,
    required:true
  }*/

})


const controls = ref(['fullscreenControl']);
const detailedControls = ref({ zoomControl: { position: { right: 10, top: 50 } } });
const bal = ref(false)

const items = useLocalStorage([
  {id:'',city:'',temp:'',img:''},
  {id:'',city:'',temp:'',img:''},
  {id:'',city:'',temp:'',img:''}
],'isDescriptionItem')



function getCoordinate(coordinates){
  this.coordinates = parseInt(rootStore.weatherInfo?.coord?.lat,rootStore.weatherInfo?.coord?.lon)
  return coordinates
}
</script>

<template>
  <div class="sections">
    <div class="section-main">
      <NavBar :switchPage="`${switchPage}`"/>
    </div>
    <div v-if="switchPage === (City) || switchPage === (Temp)" class="section-one" >
      <div class="section-center">
        <component :is=switchPage :weatherInfo="weatherInfo"></component>

      </div>
      <div class="section-right">
        <component :is="rootStore.switchSecondPage" :weatherInfo="weatherInfo"></component>
      </div>
      <div id="map" class="map">
        <YandexMap

            :coordinates="getCoordinate(coordinates)"
            :detailed-controls="detailedControls"
            :controls="controls"
            map-type="map"
        />
      </div>
    </div>

    <div v-else class="section-one">
      <div class="info">
        <div v-if="switchPage === Description" class="section-first">
          <Info :weatherInfo="weatherInfo" :bal="bal" :items="items"></Info>
        </div>
        <div v-else class="section-first">
          <About></About>
        </div>
      </div>

  </div>
  </div>


</template>

<style scoped lang="sass">
.yandex-container
  height: 300px
  padding-right: 20px

.map
  width: 30%
  height: 300px

.sections
  display: flex
  width: 100%
  position: relative
  justify-content: space-between
  align-items: flex-start
  background: rgba(#D1D0CE,0.3)
  height: 300px

.info
  width: 100%
  height: 300px
  background-color: rgba(209, 208, 206, 0.5)
  display: flex
  justify-content: space-around


.section-one
  display: flex
  width: 100%

.section-main
  height: 300px
  display: flex
  justify-content: center
  align-items: center

.section-first
  width: 100%
  display: flex
  align-items: center
  justify-content: space-around
  margin-right: 20%

.section-center,.section-right
  width: 35%
</style>