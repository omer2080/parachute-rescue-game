import { Parachutist } from "./Parachutist";

export class Boat {
  public x: number;
  public y: number;
  private width: number;
  private height: number;
  private speed: number;
  private maxX: number;

  constructor(x: number, y: number, canvasWidth: number) {
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = 20;
    this.speed = 5;
    this.maxX = canvasWidth - this.width;
  }

  update() {
    // Movement handled by InputHandler
  }

  moveLeft() {
    this.x = Math.max(0, this.x - this.speed);
  }

  moveRight() {
    this.x = Math.min(this.maxX, this.x + this.speed);
  }

  isCaught(parachutist: Parachutist): boolean {
    return (
      parachutist.x >= this.x &&
      parachutist.x <= this.x + this.width &&
      parachutist.y + parachutist.height >= this.y &&
      parachutist.y <= this.y + this.height
    );
  }
}
