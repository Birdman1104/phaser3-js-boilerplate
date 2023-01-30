export class MainView extends Phaser.GameObjects.Container {
    constructor(scene) {
        super(scene);
        this._build();
    }

    _build() {
        this._buildEmitter();
        this._buildLogo();
    }

    _buildLogo() {
        const logo = this.scene.physics.add.image(100, 100, "logo.png");
        logo.setVelocity(200, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);
        this.logo = logo;
        this.emitter.startFollow(this.logo);
    }

    _buildEmitter() {
        const particles = this.scene.add.particles("particle.png");
        const emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            alpha: { start: 1, end: 0 },
            blendMode: "ADD",
        });
        this.emitter = emitter;
    }
}
