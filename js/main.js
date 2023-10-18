const button = document.querySelector("#button");
const city = document.querySelector("#search");
const Name = document.querySelector("#cityi");
const temp = document.querySelector("#temp");
const details = document.querySelector("#details");
const icon = document.querySelector("#ic1");
const Humidity = document.querySelector("#Humidity");
const wind = document.querySelector("#wind");

button.addEventListener("click", () => {
  weather(city.value);
});

function weather(city) {
  const api_key = "75c1392a4d080822c2d92bd764771ac7";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  fetch(url)
    .then((res, req) => res.json())
    .then((data) => {
      //   console.log(data.weather[0].description);

      Name.innerText = `Weather In  ${data.name}`;
      temp.innerText = Math.floor(data.main.temp - 273.15);
      details.innerHTML = data.weather[0].description;
      const iconCode = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
      icon.src = iconUrl;
      Humidity.innerHTML = `Humidity:  ${data.main.humidity}%`;
      wind.innerHTML = `Wind Speed: ${data.wind.speed} km/h`;
      document.querySelector("#w-info").classList.remove("w-info");
      // const displayElement = document.querySelector("#w-info");
      // displayElement.style.display =
      //   displayElement.style.display === "none" ? "block" : "none";
    })
    .catch((error) => {
      alert("Pls enter Correct City Name ");
    });
}
