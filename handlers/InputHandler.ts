import { Boat } from "../components/Boat";

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
