import StationControlController from "../controllers/StationControlController.js";
import { stationListTemplete, stationNameTemplete } from "../utils/templete/stationControlTemplete.js";

export default class StationControlView extends StationControlController {

  inputEvent() {
    this.stationControlField.querySelector('#station-add-button').addEventListener('click', (e) => {
      this.stationName = this.stationControlField.querySelector('#station-name-input').value;
      e.preventDefault();
      this.setLocalStationName();
      this.renderStationList();
      this.deleteEvent();
    })
  }

  renderStationList() {
    const stationNameListField = this.stationControlField.querySelector('#station-field');
    stationNameListField.innerHTML = stationListTemplete;
    this.renderStationName();
  }

  renderStationName() {
    this.getLocalStationName();
    const stationNameList = this.stationControlField.querySelector('#station-list');
    this.stationTemplete = this.stationNameList.map(v => stationNameTemplete(v));
    this.stationTemplete.map(v => stationNameList.append(v));
  }

  deleteEvent() {
    [...this.stationControlField.querySelectorAll('.station-delete-button')].map(v => {
      v.addEventListener('click', ({ target }) => {
        this.deleteStation = target.parentNode.previousSibling.previousSibling.innerText;
        target.parentNode.parentNode.remove();
        this.setLocalDeleteStation();
      })
    })
  }

}