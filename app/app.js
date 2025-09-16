// import { getCurrentWeather } from "../model/model.js";
import * as MODEL from "../model/model.js";

function initListeners() {
  // Test Function
  MODEL.getCurrentWeather();
  MODEL.getForecast();
  $("#search").on("click", function () {
    MODEL.getUserLocation();
  });
}

$(document).ready(function () {
  initListeners();
});
