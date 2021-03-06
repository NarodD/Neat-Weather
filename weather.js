let now = new Date();
let day = now.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let week = days[day];
let current = document.querySelector("#week-day");
current.innerHTML = `${week}`;

let hours = now.getHours();
if (hours < 10) {
  let currenth = document.querySelector("#hour");
  currenth.innerHTML = `0${hours}`;
} else {
  let currenth = document.querySelector("#hour");
  currenth.innerHTML = `${hours}`;
}
let minute = now.getMinutes();
if (minute < 10) {
  let currentMinute = document.querySelector("#minute");
  currentMinute.innerHTML = `0${minute}`;
} else {
  let currentMinute = document.querySelector("#minute");
  currentMinute.innerHTML = `${minute}`;
}

function showTemp(response) {
  document.querySelector("#temp-in-unit").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#city").innerHTML = response.data.name;

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#weather-type").innerHTML =
    response.data.weather[0].main;
}

function currentInformation(city) {
  let apiKey = "b5e69e568d038c63ee6b2e9c5e877771";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(showTemp);
}

function currentCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-form").value;
  currentInformation(city);
}

let form = document.querySelector("form");
form.addEventListener("submit", currentCity);

let button = document.querySelector("#refresh");
button.addEventListener("click", function () {
  window.location.reload();
});
currentInformation("Paris");
