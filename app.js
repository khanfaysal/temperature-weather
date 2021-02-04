const button = document.querySelector('#searchButton');
const inputLocation = document.querySelector('#inputLocation');
const weatherImageUrl = `http://openweathermap.org/img/wn/`
const weatherImage = document.querySelector('#weatherImage');
const locationName = document.querySelector('#locationName');
const locationTemperature = document.querySelector('#locationTemperature');
const locationObserve = document.querySelector('#locationObserve'); 

button.addEventListener('click',function(){
    let cityName = inputLocation.value;
    //use API js code
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f75ab83bb1cb565647a4e6b0c8499e2c`  
    fetch(url)
    .then(res => res.json())
    .then(data => {
        
     locationName.innerText = data.name;
     locationTemperature.innerText = Math.round((data.main.temp) - 273.15)
     locationObserve.innerText = data.weather[0].main;
     weatherImage.setAttribute('src', `${weatherImageUrl}${data.weather[0].icon}.png`)
    })
.catch(error => alert('wrong city name !'))
})
const url = `https://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=f75ab83bb1cb565647a4e6b0c8499e2c`  
    fetch(url)
    .then(res => res.json())
    .then(data => {
        
     locationName.innerText = data.name;
     locationTemperature.innerText = Math.round((data.main.temp) - 273.15)
     locationObserve.innerText = data.weather[0].main;
     weatherImage.setAttribute('src', `${weatherImageUrl}${data.weather[0].icon}.png`)
    })
.catch(error => alert('wrong city name !'))