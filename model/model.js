const apiKey = "ec6efbb25da2451c8fe152440242309"; // Weather API Key

export function getCurrentWeather() {
  let currentWeatherURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Indianapolis&aqi=no`;

  // Test JSON data
  // Log
  //   console.log(currentWeatherURL);

  $.getJSON(currentWeatherURL, function (data) {
    console.log(data);
    console.log(data.current);
    let apiLocation = data.location; // Get the "location" group of data
    let apiCurrent = data.current; // The shorthand for getting the data in the "Current" group

    $(".dateHeader").html(
      `<h2>Get the Current Weather in ${apiLocation.name}!</h2><h2>Date: <span class="blueText">${apiLocation.localtime}</span></h2>`
    );
  });
}
