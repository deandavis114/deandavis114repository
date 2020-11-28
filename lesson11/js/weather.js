
const apiKey = "de8e234434351321aacbcad506c213dd";
const baseurl = "https://api.openweathermap.org/data/2.5/weather";
let cityId = "5604473";
let units = "imperial";



//"https://api.openweathermap.org/data/2.5/forecast?id={city ID}&appid={API key}"

let requestUrl = baseurl + "?" +
    "id=" + cityId +
    "&appid=" + apiKey +
    "&units=" + units;

// let requestUrl = "https://"https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=de8e234434351321aacbcad506c213dd&units="imperial"
console.log(requestUrl);

fetch(requestUrl)
    .then(response => response.json())
    .then(data => {

        let real_description = data.weather[0].description;
        document.getElementById('description').innerText = real_description;

        let real_high_temp = data.main.temp_max;
        document.getElementById('temp_high').innerText = real_high_temp;

        let real_humidity = data.main.humidity;
        document.getElementById('humidity_now').innerText = real_humidity;

        let real_wind_speed = data.wind.speed;
        document.getElementById('speed_now').innerText = real_wind_speed;

        //Calculate the Windchill//
        let windChill = 'n/a';
        if (real_high_temp <= 50 && real_wind_speed > 3) {
            windChill = 35.74 + 0.6215 * real_high_temp - 35.75 * real_wind_speed ** 0.16 + 0.4275 * real_high_temp * real_wind_speed ** 0.16;
            windChill = windChill.toFixed(0);

        }
        document.getElementById('windchill_now').innerText = windChill;
    });




//const baseurl5day = "https://api.openweathermap.org/data/2.5/forecast";
//"https://api.openweathermap.org/data/2.5/forecast?id={city ID}&appid={API key}"

//let requestUrl5day = baseurl5day + "?" +
//"id=" + cityId +
// "&appid=" + apiKey +
// "&units=" + units;

let requestUrl5day = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=de8e234434351321aacbcad506c213dd&units=imperial"
console.log(requestUrl5day)

fetch(requestUrl5day)
    .then(response => response.json())
    .then(data => {
        // Parse the JASON stuff

        //5 day forecast//
        let forecast_temps = document.querySelectorAll('.forecast-day .temp');
        let forecast_dow = document.querySelectorAll('.forecast-day .dow');
        let list = data.list;
        const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let count = 1
        for (item of list) {
            if (item.dt_txt.includes('18:00:00')) {
                let date = new Date(item.dt * 1000);
                let dayNumber = date.getDay();
                let dayname = DOW[dayNumber];
                console.log(dayNumber, dayname);
                document.getElementById('DayOfWeek' + count).innerText = dayname;

                let tempurature = item.main.temp;
                document.getElementById('temp-' + count).innerText = tempurature;

                //"https://openweathermap.org/img/w/04d.png"
                const imageBase = "https://openweathermap.org/img/w/";
                let symbol = item.weather[0].icon + ".png";
                let imageSrcUrl = imageBase + symbol;

                document.getElementById('symbol-' + count).setAttribute('src', imageSrcUrl);

                count = count + 1;
            }
        }
    });


// Soda Springs Soda Springs Soda Springs Soda Springs Soda Springs//

// Soda Springs Soda Springs Soda Springs Soda Springs Soda Springs//

// Soda Springs Soda Springs Soda Springs Soda Springs Soda Springs//

// Soda Springs Soda Springs Soda Springs Soda Springs Soda Springs//

// Soda Springs Soda Springs Soda Springs Soda Springs Soda Springs//


const apiSodaKey = "de8e234434351321aacbcad506c213dd";
const basSodaeurl = "https://api.openweathermap.org/data/2.5/weather";
let citySodaId = "7535661";
let unitsSoda = "imperial";



//"https://api.openweathermap.org/data/2.5/forecast?id={city ID}&appid={API key}"

let requestSodaUrl = basSodaeurl + "?" +
    "id=" + citySodaId +
    "&appid=" + apiSodaKey +
    "&units=" + unitsSoda;

// let requestSodaUrl = "https://"https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=de8e234434351321aacbcad506c213dd&units="imperial"
console.log(requestSodaUrl);

fetch(requestSodaUrl)
    .then(response => response.json())
    .then(data => {

        let real_description_soda = data.weather[0].description;
        document.getElementById('description_soda').innerText = real_description_soda;

        let real_high_temp = data.main.temp_max;
        document.getElementById('temp_high_soda').innerText = real_high_temp;

        let real_humidity = data.main.humidity;
        document.getElementById('humidity_now_soda').innerText = real_humidity;

        let real_wind_speed = data.wind.speed;
        document.getElementById('speed_now_soda').innerText = real_wind_speed;

        //Calculate the Windchill//
        let windChill = 'n/a';
        if (real_high_temp <= 50 && real_wind_speed > 3) {
            windChill = 35.74 + 0.6215 * real_high_temp - 35.75 * real_wind_speed ** 0.16 + 0.4275 * real_high_temp * real_wind_speed ** 0.16;
            windChill = windChill.toFixed(0);

        }
        document.getElementById('windchill_now_soda').innerText = windChill;
    });




//const baseurl5day = "https://api.openweathermap.org/data/2.5/forecast";
//"https://api.openweathermap.org/data/2.5/forecast?id={city ID}&appid={API key}"

//let requestSodaUrl5day = baseurl5day + "?" +
//"id=" + cityId +
// "&appid=" + apiKey +
// "&units=" + units;

let requestSodaUrl5day = "https://api.openweathermap.org/data/2.5/forecast?id=7535661&appid=de8e234434351321aacbcad506c213dd&units=imperial"
console.log(requestSodaUrl5day)

fetch(requestSodaUrl5day)
    .then(response => response.json())
    .then(data => {
        // Parse the JASON stuff

        //5 day forecast//
        let forecast_temps = document.querySelectorAll('.forecast-day .temp');
        let forecast_dow = document.querySelectorAll('.forecast-day .dow');
        let list = data.list;
        const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let count = 1
        for (item of list) {
            if (item.dt_txt.includes('18:00:00')) {
                let date = new Date(item.dt * 1000);
                let dayNumber = date.getDay();
                let dayname = DOW[dayNumber];
                console.log(dayNumber, dayname);
                document.getElementById('DayOfWeek' + count).innerText = dayname;

                let tempurature = item.main.temp;
                document.getElementById('temp-' + count).innerText = tempurature;

                //"https://openweathermap.org/img/w/04d.png"
                const imageBase = "https://openweathermap.org/img/w/";
                let symbol = item.weather[0].icon + ".png";
                let imageSrcUrl = imageBase + symbol;

                document.getElementById('symbol-' + count).setAttribute('src', imageSrcUrl);

                count = count + 1;
            }
        }
    });


// //FISH HAVEN FISH HAVEN FISH HAVEN FISH HAVEN FISH HAVEN FISH HAVEN//

// //FISH HAVEN FISH HAVEN FISH HAVEN FISH HAVEN FISH HAVEN FISH HAVEN//

// //FISH HAVEN FISH HAVEN FISH HAVEN FISH HAVEN FISH HAVEN FISH HAVEN//

// //FISH HAVEN FISH HAVEN FISH HAVEN FISH HAVEN FISH HAVEN FISH HAVEN//

// //FISH HAVEN FISH HAVEN FISH HAVEN FISH HAVEN FISH HAVEN FISH HAVEN//

const apiFishKey = "de8e234434351321aacbcad506c213dd";
const basFisheurl = "https://api.openweathermap.org/data/2.5/weather";
let cityFishId = "3530597";
let unitsFish = "imperial";



//"https://api.openweathermap.org/data/2.5/forecast?id={city ID}&appid={API key}"

let requestfishUrl = basFisheurl + "?" +
    "id=" + cityFishId +
    "&appid=" + apiFishKey +
    "&units=" + unitsFish;

// let requestfishUrl = "https://"https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=de8e234434351321aacbcad506c213dd&units="imperial"
console.log(requestfishUrl);

fetch(requestfishUrl)
    .then(response => response.json())
    .then(data => {

        let real_description_soda = data.weather[0].description;
        document.getElementById('description_fish').innerText = real_description_soda;

        let real_high_temp_fish = data.main.temp_max;
        document.getElementById('temp_high_fish').innerText = real_high_temp_fish;

        let real_humidity = data.main.humidity;
        document.getElementById('humidity_now_fish').innerText = real_humidity;

        let real_wind_speed_fish = data.wind.speed;
        document.getElementById('speed_now_fish').innerText = real_wind_speed_fish;

        //Calculate the Windchill//
        let windChill_fish = 'n/a';
        if (real_high_temp_fish <= 50 && real_wind_speed_fish > 3) {
            windChill_fish = 35.74 + 0.6215 * real_high_temp_fish - 35.75 * real_wind_speed_fish ** 0.16 + 0.4275 * real_high_temp_fish * real_wind_speed_fish ** 0.16;
            windChill_fish = windChill_fish.toFixed(0);

        }
        document.getElementById('windchill_now_fish').innerText = windChill_fish;
    });




//const baseurl5day = "https://api.openweathermap.org/data/2.5/forecast";
//"https://api.openweathermap.org/data/2.5/forecast?id={city ID}&appid={API key}"

//let requestfishUrl5day = baseurl5day + "?" +
//"id=" + cityId +
// "&appid=" + apiKey +
// "&units=" + units;

let requestfishUrl5day = "https://api.openweathermap.org/data/2.5/forecast?id=3530597&appid=de8e234434351321aacbcad506c213dd&units=imperial"
console.log(requestfishUrl5day)

fetch(requestfishUrl5day)
    .then(response => response.json())
    .then(data => {
        // Parse the JASON stuff

        //5 day forecast//
        let forecast_temps = document.querySelectorAll('.forecast-day .temp');
        let forecast_dow = document.querySelectorAll('.forecast-day .dow');
        let list = data.list;
        const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let count = 1
        for (item of list) {
            if (item.dt_txt.includes('18:00:00')) {
                let date = new Date(item.dt * 1000);
                let dayNumber = date.getDay();
                let dayname = DOW[dayNumber];
                console.log(dayNumber, dayname);
                document.getElementById('DayOfWeek' + count).innerText = dayname;

                let tempurature = item.main.temp;
                document.getElementById('temp-' + count).innerText = tempurature;

                //"https://openweathermap.org/img/w/04d.png"
                const imageBase = "https://openweathermap.org/img/w/";
                let symbol = item.weather[0].icon + ".png";
                let imageSrcUrl = imageBase + symbol;

                document.getElementById('symbol-' + count).setAttribute('src', imageSrcUrl);

                count = count + 1;
            }
        }
    });