import {defineStore} from "pinia";
import axios from "axios";
import {API_KEY, BASE_URL} from "@/const";
import {shallowRef} from "vue";
import useLocalStorage from "@/composables/useLocalStorage";

export const useRootStore = defineStore('root', {
    state: () => ({
        city_name: useLocalStorage('MyCity','MyCity'),
        weatherInfo: shallowRef([]),
        switchPage: shallowRef('City'),
        switchSecondPage: shallowRef(null),
        coordinates: shallowRef([Number,Number]),
        items:[],
        backgroundImage: "src/assets/img/wepik.jpeg"

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
        async getBackGround(){
            await this.getWeather()
            if (this.weatherInfo?.weather[0]?.icon === '01d' || this.weatherInfo?.weather[0]?.icon === '01n')
                this.backgroundImage = 'src/assets/img/ClearSky.jpg'
            else{
                if (this.weatherInfo?.weather[0]?.icon === '02d' || this.weatherInfo?.weather[0]?.icon === '02n')
                    this.backgroundImage = 'src/assets/img/FewClouds.jpg'
                else{
                    if (this.weatherInfo?.weather[0]?.icon === '03d' || this.weatherInfo?.weather[0]?.icon === '03n')
                        this.backgroundImage = 'src/assets/img/ScatteredClouds.jpg'
                    else{
                        if (this.weatherInfo?.weather[0]?.icon === '04d' || this.weatherInfo?.weather[0]?.icon === '04n')
                            this.backgroundImage = 'src/assets/img/BrokenClouds.jpeg'
                        else{
                            if (this.weatherInfo?.weather[0]?.icon === '09d' || this.weatherInfo?.weather[0]?.icon === '09n')
                                this.backgroundImage = 'src/assets/img/ShowedRain.jpg'
                            else{
                                if (this.weatherInfo?.weather[0]?.icon === '10d' || this.weatherInfo?.weather[0]?.icon === '10n')
                                    this.backgroundImage = 'src/assets/img/Rain.jpg'
                                else{
                                    if (this.weatherInfo?.weather[0]?.icon === '11d' || this.weatherInfo?.weather[0]?.icon === '11n')
                                        this.backgroundImage = 'src/assets/img/thunderstorm.jpg'
                                    else{
                                        if (this.weatherInfo?.weather[0]?.icon === '13d' || this.weatherInfo?.weather[0]?.icon === '13n')
                                            this.backgroundImage = 'src/assets/img/Show.jpg'
                                        else{
                                            if (this.weatherInfo?.weather[0]?.icon === '50d' || this.weatherInfo?.weather[0]?.icon === '50n')
                                                this.backgroundImage = 'src/assets/img/mist.jpg'
                                        }
                                    }

                                }

                            }
                        }
                    }
                }
            }
        }


    }
}
)


