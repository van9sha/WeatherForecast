import {defineStore} from "pinia";
import axios from "axios";
import {API_KEY, BASE_URL} from "@/const";
import {markRaw, ref, shallowRef} from "vue";
import City from "@/components/sections/City.vue";
import SunRice from "@/components/sections/SunRice.vue";

export const useRootStore = defineStore('root', {
    state: () => ({
        city_name: 'Ufa',
        weatherInfo: shallowRef([]),
        switchPage: shallowRef('City'),
        switchSecondPage: shallowRef(null),
        coordinates: shallowRef([Number,Number]),
        items:[],

    }),
    actions: {
        async getWeather() {
            const data = await axios.get(`${BASE_URL}${this.city_name}${API_KEY}&units=metric`)
            this.weatherInfo = data?.data
        },
        async getCoordinates(){
            await this.getWeather()
            this.coordinates[0] = Number(this.weatherInfo?.coord?.lat)
            this.coordinates[1] = Number(this.weatherInfo?.coord?.lon)
        },

    }
}
)


