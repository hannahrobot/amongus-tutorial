/** @type {import("../typings/phaser")} */
/* The above loads the phaser.d.ts file so that VSCode has autocomplete for the Phaser API.
If you experience problems with autocomplete, try opening the phaser.d.ts file and scrolling up and down in it.
That may fix the problem -- some weird quirk with VSCode. A new typing file is released with
every new release of Phaser. Make sure it's up-to-date!

At some point, the typings will
be officially added to the official release so that all you'll have to do is do:

npm install @types/phaser

But this hasn't happened yet!
*/

// Bring in all the scenes
import "phaser";
import config from "./config/config";
import WaitingRoom from "./scenes/WaitingRoom";
import MainScene from "./scenes/MainScene";
import TaskScene from "./scenes/TaskScene";

class Game extends Phaser.Game {
  constructor() {
    // Add the config file to the game
    super(config);
    // Add all the scenes
    // << ADD ALL SCENES HERE >>
    this.scene.add("MainScene", MainScene);
    this.scene.add("WaitingRoom", WaitingRoom);
    this.scene.add("TaskScene", TaskScene);
    // Start the game with the mainscene
    // << START GAME WITH MAIN SCENE HERE >>
    this.scene.start("MainScene");
  }
}
// Create new instance of game
window.onload = function () {
  window.game = new Game();
};
