import { Boat } from "./Boat";

export class Parachutist {
  private x: number;
  private y: number;
  private width: number;
  private height: number;
  private speed: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;
    this.speed = 2;
  }

  update() {
    this.y += this.speed;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  isCaughtBy(boat: Boat): boolean {
    return boat.isCaught(this);
  }
}
