const apiKey = "ec6efbb25da2451c8fe152440242309"; // Weather API Key
let numberOfDays = 5; // The number of days

export function getCurrentWeather() {
  let currentWeatherURL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Indianapolis&aqi=no`;

  // Test JSON data
  // Log
  //   console.log(currentWeatherURL);

  $.getJSON(currentWeatherURL, function (data) {
    // console.log(data);
    // console.log(data.current);
    let apiLocation = data.location; // Get the "location" group of data
    let apiCurrent = data.current; // The shorthand for getting the data in the "Current" group
    let apiCurrentCondition = apiCurrent.condition; // For geting information about Image

    // Current Weather Info
    let headerText = `<h3>Current Weather</h3><p>${apiLocation.localtime}</p>`;
    let weatherImage = `<div class="weatherIcon">
            <img
              src="${apiCurrentCondition.icon}"
              alt="${apiCurrentCondition.text}"
            />
            <h3>${apiCurrentCondition.text}</h3>
          </div>
          <div class="tempGroup">
            <h3>${apiCurrent.temp_f}&deg;</h3>
            <p>${apiCurrent.temp_c}&deg;</p>
          </div>`;

    $(".dateHeader").html(
      `<h2>Get the Current Weather in ${apiLocation.name}!</h2><h2>Date: <span class="blueText">${apiLocation.localtime}</span></h2>`
    );

    $(".weatherBox").html(
      `<div class="headerText">${headerText}</div><section class="imageSect">${weatherImage}</section>        <div class="weatherInfo">
          <p>Winds: ${apiCurrent.wind_mph} mph</p>
          <p>Winds Gust: ${apiCurrent.gust_mph} mph</p>
          <p>Humidity: ${apiCurrent.humidity}%</p>
        </div>`
    );
  });
}

export function getForecast() {
  let forecastURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Indianapolis&days=${numberOfDays}&aqi=yes&alerts=no`;

  // console.log(forecastURL);

  $.getJSON(forecastURL, function (data) {
    let forecastCollection = data.forecast.forecastday; // Gets the Arrays for each Forcast day
    let forecastLocation = data.location; // Get the "location" group of data
    let forecastCurrent = data.current; // The shorthand for getting the data in the "Current" group
    let forecastCondition = forecastCurrent.condition; // For geting information about Image

    console.log(data);
    console.log(forecastCollection);

    let forecastCount = numberOfDays; // set count to "Number of Days"

    $.each(forecastCollection, function (idx, day) {
      // console.log(idx);
      // console.log(day);
      let dayInfo = day.day;
      let dayWeatherIcon = day.day.condition;

      $(".dailyWeather").append(`
          <div class="dailyItem">
            <h3>${day.date}</h3>
            <div class="weatherIcon">
              <img src="${dayWeatherIcon.icon}" alt="${dayWeatherIcon.text}" />
              <div class="tempGroup">
                <h3>${dayInfo.avgtemp_f}&deg;</h3>
                <p>${dayInfo.avgtemp_c}&deg;</p>
              </div>
            </div>
            <div class="description">
              <h3>${dayWeatherIcon.text}</h3>
              <p>There is a ${dayInfo.daily_chance_of_rain}% chance of Rain</p>
              <p>There is a ${dayInfo.daily_chance_of_snow}% chance of Snow</p>
            </div>
          </div>
        `);
    });
  });
}
