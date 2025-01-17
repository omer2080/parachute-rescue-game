import { Parachutist } from "./Parachutist";

export class Boat {
  private x: number;
  private y: number;
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

  moveLeft(): void {
    this.x = Math.max(0, this.x - this.speed);
  }

  moveRight(): void {
    this.x = Math.min(this.maxX, this.x + this.speed);
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }

  isCaught(parachutist: Parachutist): boolean {
    return (
      parachutist.getX() >= this.x &&
      parachutist.getX() <= this.x + this.width &&
      parachutist.getY() + parachutist.getHeight() >= this.y &&
      parachutist.getY() <= this.y + this.height
    );
  }
}
