import { Boat } from "./Boat";

export class Parachutist {
  private x: number;
  private y: number;
  private width: number;
  private height: number;
  private speed: number;

  constructor(x: number) {
    this.x = x;
    this.y = 0;
    this.width = 20;
    this.height = 20;
    this.speed = 2;
  }

  update(): void {
    this.y += this.speed;
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

  isCaughtBy(boat: Boat): boolean {
    return boat.isCaught(this);
  }
}
