// const button = document.querySelector('#searchButton');
const inputLocation = document.querySelector('#inputLocation');
const weatherImage = document.querySelector('#weatherImage');
const locationName = document.querySelector('#locationName');
const locationTemperature = document.querySelector('#locationTemperature');
const locationObserve = document.querySelector('#locationObserve');

const button = document.querySelector('#searchButton').addEventListener('click',function(){
    fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=f75ab83bb1cb565647a4e6b0c8499e2c')
    .then(res => res.json())
    .then(data => {
    const weatherDetails = data.cod[0];

    })
.catch(error => alert('wrong city name !'))
})