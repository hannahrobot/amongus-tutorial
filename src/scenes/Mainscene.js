import Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  preload() {
    this.load.spritesheet("astronaut", "assets/spritesheets/astronaut3.png", {
      frameWidth: 29,
      frameHeight: 37,
    });
    this.load.image("mainroom", "assets/backgrounds/mainroom.png");
  }

  create() {
    const scene = this;
    //BACKGROUND
    this.add.image(0, 0, "mainroom").setOrigin(0);

    //LAUNCH WAITING ROOM
    scene.scene.launch("WaitingRoom", { socket: scene.socket });

    //CREATE SOCKET
    this.socket = io();
  }

  update() {}
}
