import StationControlModel from "../models/StationControlModel.js";
import { stationControlTemplete } from "../utils/templete/stationControlTemplete.js";

export default class StationControlController {
  constructor($app) {
    this.$app = $app;
    this.stationControlModel = new StationControlModel();
    this.stationControlField = document.createElement('div');
    this.stationControlField.innerHTML = stationControlTemplete;
    this.$app.append(this.stationControlField);
    this.inputEvent();
  }



}