var GeoApiKey = "0d172580-bc12-11ec-bbc5-c3af7d486175";
var WeatherApiKey = "1697e0cf372f8362630d3ae9b16b4527"
let GeoURL = "https://api.ipbase.com/v2/info?apikey=" + GeoApiKey;
var lat;
var lon;



const app0 = Vue.createApp({
    data() {
        return {
                city: "",
                region: "",
                country: "",
                lat: "",
                lon: "",
                done: false,

                iserror: false,
                error: ""
        };
    },
});

const app1 = Vue.createApp({
    data() {
        return{
            date: "",
            temp: "",
            hi: "",
            low: "",
            weather: "",
            hum: "",
            pres: "",
            done: false,

            error: "",
            iserror: false,
        };
    },
});

const app2 = Vue.createApp({
    data() {
        return {
            data: {
                conditions: [],
                neutralTotal: 0,
                likelyTotal: 0,
                unlikelyTotal: 0,
                done: false,

                iserror: false,
                error: "",
            },
           
        };
    },

    methods: {
        forecastToggle(event) {
            // Get the index of this <div> from the DOM
            let div = event.currentTarget;
            let idx = div.getAttribute('data-index');
            if (this.data.conditions[idx].state === 'neutral') {
                this.data.conditions[idx].state = 'likely';
                this.data.neutralTotal--;
                this.data.likelyTotal++;
                div.setAttribute('class', 'green shadowed stuff-box');

            }
            else if (this.data.conditions[idx].state === 'likely') {
                this.data.conditions[idx].state = 'unlikely';
                this.data.likelyTotal--;
                this.data.unlikelyTotal++;
                div.setAttribute('class', 'red shadowed stuff-box');

            }
            else if (this.data.conditions[idx].state === 'unlikely') {
                this.data.conditions[idx].state = 'neutral';
                this.data.unlikelyTotal--;
                this.data.neutralTotal++
                div.setAttribute('class', 'black shadowed stuff-box');
            }
    
        },
    },
});

const vm0 = app0.mount('#current-location');
const vm1 = app1.mount('#current-conditions');
const vm2 = app2.mount('#fourtyday');
//Get from API and put in locationTest

    fetch(GeoURL)
    .then(response => response.json() )
    .then(json =>{
        let locationData = json;
        lat = locationData['data']['location']['latitude'];
        lon = locationData['data']['location']['longitude'];
        vm0.city = locationData['data']['location']['city']['name'];
        vm0.region = locationData['data']['location']['region']['name'];
        vm0.country = locationData['data']['location']['country']['name'];
        vm0.lat = lat;
        vm0.lon = lon;
        vm0.time = "today";
        vm0.done = true;
        let WeatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=" +lat + "&lon=" + lon + "&appid=" + WeatherApiKey + "&units=imperial&lang=en";
        return fetch(WeatherURL);
        })
        .catch(error =>
            {
                vm0.iserror = true;
                vm0.error = "Could not get location data due to error: " + error;
            })
        .then(response => response.json() )
        .then(json =>{
            let currentWeatherData = json;
            let date = new Date(currentWeatherData['dt'] *1000);
            vm1.date = date.toLocaleDateString()+ " "+date.toLocaleTimeString();
            vm1.temp = currentWeatherData['main']['temp'];
            vm1.hi = currentWeatherData['main']['temp_max'];
            vm1.low = currentWeatherData['main']['temp_min'];
            vm1.weather = currentWeatherData['weather'][0]['description'];
            vm1.hum = currentWeatherData['main']['humidity'];
            vm1.pres = currentWeatherData['main']['pressure'];
            vm1.done = true;
            let Weather40URL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + WeatherApiKey + "&units=imperial&lang=en";
            return fetch(Weather40URL);
        })
        .catch(error =>
            {
                vm1.iserror = true;
                vm1.error = "Could not get current weather data due to error: " + error;
            })
        .then(response => response.json() )
        .then(json =>{
            weatherData40 = json;
            for (let i = 0; i < weatherData40.list.length; i++) {
                let date = new Date(weatherData40.list[i]['dt']*1000);
                let temps = {
                    time: "",
                    temp: "",
                    hi: "",
                    low: "",
                    weather: "",
                    humidity: "",
                    pressure: "",
                    state: 'neutral',
                };
                
                temps.time = date.toLocaleDateString()+ " "+date.toLocaleTimeString();
                temps.temp = weatherData40.list[i]['main']['temp'];
                temps.hi = weatherData40.list[i]['main']['temp_max'];
                temps.low = weatherData40.list[i]['main']['temp_min'];
                temps.weather = weatherData40.list[i]['weather'][0]['description'];
                temps.humidity = weatherData40.list[i]['main']['humidity'];
                temps.pressure = weatherData40.list[i]['main']['pressure'];
                vm2.data.conditions[i] = temps;
              }
              vm2.data.neutralTotal = 40;
              vm2.done = true;
        })
        .catch(error =>
            {
                vm2.iserror = true;
                vm2.error = "Could not get 40 day weather data due to error: " + error;
            });
