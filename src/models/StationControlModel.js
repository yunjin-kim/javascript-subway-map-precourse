export default class StationControlModel {

  toLocalStationName(stationName) {
    const localStationName = JSON.parse(localStorage.getItem("STATION_NAME"));
    localStationName 
    ?localStorage.setItem("STATION_NAME", JSON.stringify(localStationName.concat(stationName)))
    : localStorage.setItem("STATION_NAME", JSON.stringify([stationName]));
  }

  fromLocalStationName() {
    const localStationName = JSON.parse(localStorage.getItem("STATION_NAME"));
    return localStationName;
  }

  handleDeleteStation(deleteStation) {
    const localStationName = JSON.parse(localStorage.getItem("STATION_NAME"));
    localStationName.map((v, i) => v === deleteStation ? localStationName.splice(i, 1) : "")
    localStorage.setItem("STATION_NAME", JSON.stringify(localStationName));
  }

}