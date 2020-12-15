import Phaser from "phaser";

export default class TaskScene extends Phaser.Scene {
  constructor() {
    super("TaskScene");
  }
  init(data) {
    this.roomKey = data.roomKey;
    this.players = data.players;
    this.numPlayers = data.numPlayers;
    this.socket = data.socket;
  }
  preload() {
    this.load.image("computer", "assets/backgrounds/computer.png");
  }
  create() {
    const scene = this;
    this.add.image(400, 320, "computer");
  }
}

// //RETURN BUTTON
// scene.returnContainer = scene.add.rexRoundRectangle(
//   175,
//   502,
//   80,
//   25,
//   5,
//   0xfa8128
// );
// scene.returnText = scene.add.text(148, 494, "Return", {
//   fill: "#000000",
//   fontSize: "15px",
//   fontStyle: "bold",
// });
// scene.returnContainer.setInteractive();
// scene.returnContainer.on("pointerdown", () => {
//   scene.click.play();
//   scene.socket.emit("resumePhysics");
//   scene.scene.stop("RegexScene");
// });
