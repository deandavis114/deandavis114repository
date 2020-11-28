

if(const == "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=de8e234434351321aacbcad506c213dd&units=imperial" || const == "https://api.openweathermap.org/data/2.5/forecast?id=5861897&appid=de8e234434351321aacbcad506c213dd&units=imperial" || const == "https://api.openweathermap.org/data/2.5/forecast?id=3530597&appid=de8e234434351321aacbcad506c213dd&units=imperial") {

}

// const apiSodaKey = "de8e234434351321aacbcad506c213dd";
//     const basSodaeurl = "https://api.openweathermap.org/data/2.5/weather";
//     let citySodaId = "5861897";
//     let unitsSoda = "imperial";



//     //"https://api.openweathermap.org/data/2.5/forecast?id={city ID}&appid={API key}"

//     let requestSodaUrl = basSodaeurl + "?" +
//         "id=" + citySodaId +
//         "&appid=" + apiSodaKey +
//         "&units=" + unitsSoda;

//     // let requestSodaUrl = "https://"https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=de8e234434351321aacbcad506c213dd&units="imperial"
//     console.log(requestSodaUrl);

//     fetch(requestSodaUrl)
//         .then(response => response.json())
//         .then(data => {

//             let real_description = data.weather[0].description;
//             document.getElementById('description').innerText = real_description;

//             let real_high_temp = data.main.temp_max;
//             document.getElementById('temp_high').innerText = real_high_temp;

//             let real_humidity = data.main.humidity;
//             document.getElementById('humidity_now').innerText = real_humidity;

//             let real_wind_speed = data.wind.speed;
//             document.getElementById('speed_now').innerText = real_wind_speed;

//             //Calculate the Windchill//
//             let windChill = 'n/a';
//             if (real_high_temp <= 50 && real_wind_speed > 3) {
//                 windChill = 35.74 + 0.6215 * real_high_temp - 35.75 * real_wind_speed ** 0.16 + 0.4275 * real_high_temp * real_wind_speed ** 0.16;
//                 windChill = windChill.toFixed(0);

//             }
//             document.getElementById('windchill_now').innerText = windChill;
//         });




// //const baseurl5day = "https://api.openweathermap.org/data/2.5/forecast";
// //"https://api.openweathermap.org/data/2.5/forecast?id={city ID}&appid={API key}"

// //let requestSodaUrl5day = baseurl5day + "?" +
// //"id=" + cityId +
// // "&appid=" + apiKey +
// // "&units=" + units;

// let requestSodaUrl5day = "https://api.openweathermap.org/data/2.5/forecast?id=5861897&appid=de8e234434351321aacbcad506c213dd&units=imperial"
// console.log(requestSodaUrl5day)

// fetch(requestSodaUrl5day)
//     .then(response_soda => response_soda.json())
//     .then(data_soda => {
//         // Parse the JASON stuff

//         //5 day forecast//
//         let forecast_temps_soda = document.querySelectorAll('.forecast-day .temp');
//         let forecast_dow_soda = document.querySelectorAll('.forecast-day .dow');
//         let list = data_soda.list;
//         const DOW_soda = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//         let count = 1
//         for (item of list) {
//             if (item.dt_txt.includes('18:00:00')) {
//                 let date_soda = new Date(item.dt * 1000);
//                 let dayNumber_soda = date_soda.getDay();
//                 let dayname_soda = DOW_soda[dayNumber_soda];
//                 console.log(dayNumber_soda, dayname_soda);
//                 document.getElementById('DayOfWeek_soda' + count).innerText = dayname_soda;

//                 let tempurature_soda = item.main.temp;
//                 document.getElementById('temp_soda-' + count).innerText = tempurature_soda;

//                 console.log(tempurature_soda)

//                 //"https://openweathermap.org/img/w/04d.png"
//                 const imageBase_soda = "https://openweathermap.org/img/w/";
//                 let symbol_soda = item.weather[0].icon + ".png";
//                 let imageSrcUrl_soda = imageBase_soda + symbol_soda;

//                 document.getElementById('symbol_soda-' + count).setAttribute('src', imageSrcUrl_soda);

//                 count = count + 1;
//             }
//         }
//     });