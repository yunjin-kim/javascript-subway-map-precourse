import { tabButtonTemplete } from "./utils/templete/tabButtonTemplete.js";
import StationControlView from "./views/StationControlView.js";

export default class App {
  constructor($app) {
    this.$app = $app;
    this.tabButtonField = document.createElement('div');
    this.tabButtonField.innerHTML = tabButtonTemplete;
    $app.append(this.tabButtonField);
    new StationControlView($app);
  }
}