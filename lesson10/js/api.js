const apiKey  = "de8e234434351321aacbcad506c213dd";
let url       = "http://api.openweathermap.org/data/2.5/weather";
let cityId    = "5604473";
let units     = "imperial";



"http://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}"

let requestUrl = url + "?" + 
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
        let icon = response.weather.icon + ".png";
        let imageSrcUrl = imageBase + icon; 


    });