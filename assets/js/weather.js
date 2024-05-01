const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener("click", () => {
    const APIKey = '98740f4ebc0d63bc0f8ba70090e5a091'
    const city = document.querySelector('.search-box input').value
    if (city == '')
        return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {
        const image = document.querySelector('.weather-box img')
        const temperature = document.querySelector('.weather-box .temperature')
        const description = document.querySelector('.weather-box .description')
        const humidity = document.querySelector('.weather-details .humidity span')
        const wind = document.querySelector('.weather-details .wind span')
        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'https://cdn2.iconfinder.com/data/icons/weather-682/1024/sun_sunny-512.png'
                break;
            case 'Rain':
                image.src = 'https://i.pinimg.com/736x/a9/54/8b/a9548b0102a0606f56a643bdc43032d5.jpg'
                break;
            case 'Snow':
                image.src = 'https://img.freepik.com/premium-vector/cloud-with-snowflakes-3d-vector-illustration-snowy-weather-winter-day-weekend-cartoon-style-isolated-white-background-weather-forecast-meteorology-concept_778687-1711.jpg'
                break;
            case 'Clouds':
                image.src = 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png'
                break;
            case 'Mist':
                image.src = 'https://img.freepik.com/premium-vector/weather-meteorology-icon-cloud-fog-vector-illustration-weather-forecast-symbol-mobile-web_646072-163.jpg?w=360'
                break;
            case 'Haze':
                image.src = 'https://img.freepik.com/premium-vector/weather-meteorology-icon-cloud-fog-vector-illustration-weather-forecast-symbol-mobile-web_646072-163.jpg?w=360'
                break;

            default:
                image.src = 'https://img.freepik.com/premium-vector/weather-meteorology-icon-cloud-fog-vector-illustration-weather-forecast-symbol-mobile-web_646072-163.jpg?w=360'
        }
        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

    })
})