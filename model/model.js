const apiKey = "ec6efbb25da2451c8fe152440242309"; // Weather API Key

export function getCurrentWeather() {
  let currentWeatherURL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Indianapolis&aqi=no`;

  // Test JSON data
  // Log
  //   console.log(currentWeatherURL);

  $.getJSON(currentWeatherURL, function (data) {
    console.log(data);
    console.log(data.current);
    let apiLocation = data.location; // Get the "location" group of data
    let apiCurrent = data.current; // The shorthand for getting the data in the "Current" group
    let apiCurrentCondition = apiCurrent.condition;

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
            <h3>${apiCurrent.temp_f} &deg;F</h3>
            <p>${apiCurrent.temp_c} &deg;C</p>
          </div>`;

    $(".dateHeader").html(
      `<h2>Get the Current Weather in ${apiLocation.name}!</h2><h2>Date: <span class="blueText">${apiLocation.localtime}</span></h2>`
    );

    $(".weatherBox").html(
      `<div class="headerText">${headerText}</div><section class="imageSect">${weatherImage}</section>        <div class="weatherInfo">
          <p>Winds</p>
          <p>Winds Gust</p>
          <p>Humidity</p>
        </div>`
    );
  });
}
