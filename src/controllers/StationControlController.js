import StationControlModel from "../models/StationControlModel.js";
import { stationControlTemplete } from "../utils/templete/stationControlTemplete.js";

export default class StationControlController {
  constructor($app) {
    this.$app = $app;
    this.stationControlModel = new StationControlModel();
    this.stationControlField = document.createElement('div');
    this.stationControlField.innerHTML = stationControlTemplete;
    this.$app.append(this.stationControlField);
    this.render();
    this.inputEvent();
    this.deleteEvent();
  }

  render() {
    this.renderStationList();
  }

  setLocalStationName() {
    this.stationControlModel.toLocalStationName(this.stationName);
  }

  getLocalStationName() {
    this.stationNameList = this.stationControlModel.fromLocalStationName();
  }

  setLocalDeleteStation() {
    this.stationControlModel.handleDeleteStation(this.deleteStation);
  }

}