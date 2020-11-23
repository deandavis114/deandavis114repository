const apiKey = "de8e234434351321aacbcad506c213dd";
const baseurl = "https://api.openweathermap.org/data/2.5/forecast";
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
        // Parse the JASON stuff


        let real_description = data.list[1].weather[0].description;
        document.getElementById('description').innerText = real_description;

        let real_high = data.list[0].main.temp_max;
        document.getElementById('temp_high').innerText = real_high;

        let real_windchill = data.list[3].wind.deg;
        document.getElementById('windchill_now').innerText = real_windchill;

        let real_humidity = data.list[0].main.humidity;
        document.getElementById('humidity_now').innerText = real_humidity;


        let real_wind_speed = data.list[3].wind.speed;
        document.getElementById('speed_now').innerText = real_wind_speed;

        console.log('data');


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