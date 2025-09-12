// import { getCurrentWeather } from "../model/model.js";
import * as MODEL from "../model/model.js";

function initListeners() {
  // Test Function
  MODEL.getCurrentWeather();
}

$(document).ready(function () {
  initListeners();
});
