const apiKey = "76c95ded617fadc83508ad3969276fd1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector("#c");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clear") {
            weatherIcon.src = `images/${data.weather[0].main}.png`;
        }
        else if (data.weather[0].main == "Clouds") {
            weatherIcon.src = `images/${data.weather[0].main}.png`;
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = `images/${data.weather[0].main}.png`;
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = `images/${data.weather[0].main}.png`;
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = `images/${data.weather[0].main}.png`;
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

checkWeather();
