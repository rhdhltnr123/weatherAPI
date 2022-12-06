// app.js

const API_KEY = "d5d670347520db869cb3084c789eeaf9";
let city_name = "korea";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`;

console.log(API_URL);

let dsecEl = document.querySelector(".dsec");
let iconEl = document.querySelector(".img");
let tempEl = document.querySelector(".temp");
let citynameEl = document.querySelector(".cityname");

fetch(API_URL)
  .then(function (응답데이터) {
    return 응답데이터.json();
  })
  .then(function (data) {
    console.log(data);
    const desc = data.weather[0].main; // 날씨 상태 설명
    const icon = data.weather[0].icon; // 아이콘
    const temp = data.main.temp - 273.15; // 현재온도 정수변환 parseInt
    const city = data.name; // 도시명
    console.log(desc, icon, temp, city);
    dsecEl.innerHTML = desc;
    iconEl.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    tempEl.innerHTML = `${temp.toFixed(2)}&deg;`;
    citynameEl.innerHTML = city;
  });
