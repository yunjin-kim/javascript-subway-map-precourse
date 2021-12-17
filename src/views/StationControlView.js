import StationControlController from "../controllers/StationControlController.js";

export default class StationControlView extends StationControlController {

  inputEvent() {
    this.stationControlField.querySelector('#station-add-button').addEventListener('click', (e) => {
      this.stationName = this.stationControlField.querySelector('#station-name-input').value;
      e.preventDefault();
      this.setLocalStationName();
      this.renderStationName();
    })
  }


}