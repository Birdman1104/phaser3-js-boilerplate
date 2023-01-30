import { MainView } from "../views/MainView";

export class GameScene extends Phaser.Scene {
  create() {
    this._buildMainView();
  }

  _buildMainView() {
    const mainView = new MainView(this);
    this.add.existing(mainView);
  }
}
