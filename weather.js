'use strict';

console.log('the script starts');

//function to fetch data from API
async function getData(city){
    try {
        var response = await fetch('http://127.0.0.1:5000/'+city);
        var data = await response.json();
        return data
    } catch (error) {
        console.log(error.message);
    } finally { 
    }
    
};


const imglocation = {
    0.24 : 0.40,  //US
    0.37 : 0.65,  //Brazil
    0.89 : 0.73,  //Australia
    0.74 : 0.40,  //China
    0.40 : 0.13,  //GreenLand
    0.15 : 0.25,  //Canada
    0.57 : 0.60,  //Congo
    0.56 : 0.24,  //Finland
    0.80 : 0.20   //Russia
}

var city1 = getData("Washington, D.C"); //Us
var city2 = getData('Brasilia'); //Brazil
var city3 = getData("Canberra"); //Australia
var city4 = getData('Beijing, CN'); //China
var city5 = getData("Nuuk"); //GreenLand
var city6 = getData('Ottawa'); //Canada
var city7 = getData("Kinshasa"); //Congo
var city8 = getData('helsinki'); //Finland
var city9 = getData("Moscow"); //Russia
//console.log(result)
city1.then(weatherData,show1);
city2.then(weatherData,show2);
city3.then(weatherData,show3);
city4.then(weatherData,show4);
city5.then(weatherData,show5);
city6.then(weatherData,show6);
city7.then(weatherData,show7);
city8.then(weatherData,show8);
city9.then(weatherData,show9);
function weatherData(a,b) {
    //console.log(a); // "Some User token" 
    var temp = JSON.parse(JSON.stringify(a));
    var city = temp['name'];
    var description = temp['weather'][0]['description'];
    var icon = "http://openweathermap.org/img/wn/" + temp['weather'][0]['icon'] + ".png";
    var temper = Math.round(temp['main']['temp'] -273.15);  // in F
    var humid = temp['main']['humidity'];
    var windSpeed = temp['wind']['speed'];
    //console.log(windSpeed); 
    document.getElementById('b').innerHTML += "Weather in " +city;
    document.getElementById('b').innerHTML += "<img src="+icon+" alt=''></img> <br>";
    document.getElementById('b').innerHTML += "Description: "+description+"<br>";
    document.getElementById('b').innerHTML += "Temperature: "+temper+"°C" +"<br>";
    document.getElementById('b').innerHTML += "Humidity: "+humid+ "%" + "<br>";
    document.getElementById('b').innerHTML += "Wind speed: " +windSpeed + "km/h"+"<br>";
}  



/*
// main function that creates this game
async function gameSetup(){
    try {
        const gameData = await getData('testdata/newgame.json');
        console.log(gameData);
        for(let airport of gameData.location) {
            //const marker = L.marker([airport.latitude,airport.longtude].add(map));
            if (airport.active === true){
            marker.bindPopup('...');
            marker.openPopup();
            }
        }
    } catch (error) {
      console.log(error);  
    }
}
gameSetup();

//Set user's position
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather(latitude, longitude);
}
// get weather from API 

let weather = {
   apikey : "b318472dc4571e2480bc555a091e5bb6",
   fetchWeather: function(city) {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&appid=b318472dc4571e2480bc555a091e5bb6"
    )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    
   },
   // Display weather
   displayWeather: function(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const {temp, humidity } = data.main;
    const {speed } = data.wind;
    console.log(name,icon,description,temp,humidity,speed)
    document.querySelector(".city").innerText = "Weather in" + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";   //https://openweathermap.org/img/wn/01n@2x.png
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp +  "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
    

   },
};

// C to F conversion
function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}

// Click 
const goButton = document.createElement('button')
goButton.classList.add('button')
goButton.innerHTML = ""

// WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENET
document.querySelector(".goButton").addEventListener("click", function(){
    if(weather.temperature.value === undefined) return;
    
    if(weather.temperature.unit == "celsius"){
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);
        
        temp.innerHTML = `${fahrenheit}°<span>F</span>`;
        weather.temperature.unit = "fahrenheit";
    }else{
        temp.innerHTML = `${weather.temperature.value}°<span>C</span>`;
        weather.temperature.unit = "celsius"
    }
});

*/