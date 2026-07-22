import Phaser from "phaser";
import { BootScene } from "./scenes/BootScene";

export const GameConfig: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,

    width: 320,
    height: 180,

    pixelArt: true,

    physics: {
        default: "arcade",
        arcade: {
            debug: false,
        },
    },

    scene: [
        BootScene,
    ],
};
