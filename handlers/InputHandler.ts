import { Boat } from "../components/Boat";
import { Game } from "../components/Game";
import { Parachutist } from "../components/Parachutist";

export class InputHandler {
  constructor(private boat: Boat, private game: Game) {
    window.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        this.boat.moveLeft();
      } else if (event.key === "ArrowRight") {
        this.boat.moveRight();
      } else if (event.key === "Escape") {
        this.game.endGame();
      }
    });
  }
}
