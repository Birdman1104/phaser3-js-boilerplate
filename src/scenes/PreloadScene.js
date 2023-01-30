import { Scenes } from "../constants";

export class PreloadScene extends Phaser.Scene {
    preload() {
        //
    }

    create() {
        this.load.image("logo.png", "src/assets/logo.png");
        this.load.image("particle.png", "src/assets/particle.png");

        this.load.on("progress", this._onFileLoadComplete, this);
        this.load.on("complete", this._onLoadComplete, this);
        this.load.start();
    }

    _onFileLoadComplete(progress) {
        console.log("LOAD_PROGRESS", progress);
    }

    _onLoadComplete() {
        this.game.scene.stop(Scenes.Preload);
        this.game.scene.start(Scenes.Boot);
    }
}
