import Phaser from "phaser";

export class BootScene extends Phaser.Scene {
    constructor() {
        super("BootScene");
    }

    create() {
        this.add.text(20, 20, "Zelda-like Portfolio", {
            fontSize: "16px",
        });
    }
}
