import { Boat } from "../components/Boat";
import { Parachutist } from "../components/Parachutist";

export class InputHandler {
  constructor(private boat: Boat) {
    window.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        this.boat.moveLeft();
      } else if (event.key === "ArrowRight") {
        this.boat.moveRight();
      }
    });
  }
}
