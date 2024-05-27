import { Boat } from "../components/Boat";
import { Parachutist } from "../components/Parachutist";

export class InputHandler {
  constructor(private boat: Boat) {
    window.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowLeft":
          this.boat.moveLeft();
          break;
        case "ArrowRight":
          this.boat.moveRight();
          break;
      }
    });
  }
}

// handlers/Renderer.ts
class Renderer {
  constructor(private context: CanvasRenderingContext2D) {}

  renderBoat(boat: Boat) {
    this.context.fillStyle = "blue";
    this.context.fillRect(
      boat.getX(),
      boat.getY(),
      boat.getWidth(),
      boat.getHeight()
    );
  }

  renderParachutist(parachutist: Parachutist) {
    this.context.fillStyle = "red";
    this.context.fillRect(
      parachutist.getX(),
      parachutist.getY(),
      parachutist.getWidth(),
      parachutist.getHeight()
    );
  }

  renderScore(score: number) {
    this.context.font = "24px serif";
    this.context.fillText(`Score: ${score}`, 10, 30);
  }

  renderLives(lives: number) {
    this.context.font = "24px serif";
    this.context.fillText(`Lives: ${lives}`, 10, 60);
  }
}
