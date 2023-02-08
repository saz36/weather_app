function showUser(response) {
  document.querySelector("#results-search").innerHTML = response.data.name;
  document.querySelector("#temp-result").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#speed").innerHTML = response.data.wind.speed;
  document.querySelector("#rain").innerHTML = response.data.weather[0].main;
  document.querySelector("#summary").innerHTML =
    response.data.weather[0].description;
  console.log(response.data);
}
function search(city) {
  let apiKey = "b95f179627c8dd37f41e1be6e3250e19";
  let units = "metric";
  let weathUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},&appid=${apiKey}&units=${units}`;
  axios.get(`${weathUrl}&appid=${apiKey}`).then(showUser);
}
function search1(event) {
  event.preventDefault();
  let city = document.querySelector("#data-input").value;
  search(city);
}

let form = document.querySelector("#user-input");
form.addEventListener("submit", search1);

search("hawaii");

function dateTime(nowDate) {
  let date = nowDate.getDate();
  let hour = nowDate.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let mins = nowDate.getMinutes();
  if (mins < 10) {
    mins = `0${mins}`;
  }
  let sec = nowDate.getSeconds();
  if (sec < 10) {
    sec = `0${sec}`;
  }
  let year = nowDate.getFullYear();
  let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  let day = days[nowDate.getDay()];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  let month = months[nowDate.getMonth()];
  return `${day} ${date} ${month} ${year}  ${hour}:${mins}:${sec} `;
}
let date = document.querySelector("#date-time");
let nowDate = new Date();
date.innerHTML = dateTime(nowDate);

function convertC(event) {
  event.preventDefault();
  let temphighC = document.querySelector("#high");
  temphighC.innerHTML = `20°C `;
  let templowC = document.querySelector("#low");
  templowC.innerHTML = `7°C`;
}
function convertF(event) {
  event.preventDefault();
  let temphigh = document.querySelector("#high");
  temphigh.innerHTML = `68°F`;

  let templow = document.querySelector("#low");
  templow.innerHTML = `44°F`;
}

let fahrenheitB = document.querySelector("#fahrenheitB");
fahrenheitB.addEventListener("click", convertF);

let celsiusB = document.querySelector("#celsiusB");
celsiusB.addEventListener("click", convertC);
