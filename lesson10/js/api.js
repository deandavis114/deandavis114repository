const apiKey  = "de8e234434351321aacbcad506c213dd";
let url       = "https://api.openweathermap.org/data/2.5/";
let method    = "weather";
let cityId    = "5604473";
let units     = "imperial";



"http://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}"

let requestUrl = url + method + "?" + 
    "id=" + cityId +
    "&appid=" + apiKey +
    "&units=" + units;





console.log(requestUrl);

fetch(requestUrl)
    .then( response => response.json())
    .then( response => {
        // Parse the JASON stuff

        console.log(response);
        //console.log(data.weather[0].description);

        // Insert current temperature on the page
        let temperature = response.main.temp;
        document.getElementById('current-temp').innerText = temperature;

       
        // Insert the weather icon on the page
        //"https://openweathermap.org/img/w/04d.png"
        const imageBase= "https://openweathermap.org/img/w/";
        let icon = response.weather[0].icon + ".png";
        let imageSrcUrl = imageBase + icon; 

        console.log(imageSrcUrl);
        document.getElementById("icon").setAttribute('src', imageSrcUrl);
    });



//Five day forecast
   
method = "forecast"
requestUrl = url + method + "?" + 
    "id=" + cityId +
    "&appid=" + apiKey +
    "&units=" + units;

    console.log(requestUrl);

    fetch(requestUrl)
    .then( response => response.json())
    .then( response =>{

        //interprete forecast

        let forecast_temps = document.querySelectorAll('.forecast-day .temp');
        let forecast_dow = document.querySelectorAll('.forecast-day .dow');

        let list = response.list;

        for (item of list){
            if (item.dt_txt.includes('18:00:00')){
                let date = new Date(item.dt * 1000);


               
    }
}

});