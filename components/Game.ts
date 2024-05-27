import { Boat } from "./Boat";
import { Parachutist } from "./Parachutist";
import { InputHandler } from "../handlers/InputHandler";
import { Renderer } from "../handlers/Renderer";

export class Game {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private boat: Boat;
  private parachutists: Parachutist[];
  private inputHandler: InputHandler;
  private renderer: Renderer;
  private score: number;
  private lives: number;
  private lastDropTime: number;
  private dropInterval: number;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d")!;
    this.boat = new Boat(canvas.width / 2, canvas.height - 50, canvas.width);
    this.parachutists = [];
    this.inputHandler = new InputHandler(this.boat);
    this.renderer = new Renderer(this.context);
    this.score = 0;
    this.lives = 3;
    this.lastDropTime = 0;
    this.dropInterval = 2000; // 2 seconds
  }

  start(): void {
    requestAnimationFrame(this.gameLoop.bind(this));
  }

  private gameLoop(timestamp: number): void {
    this.update(timestamp);
    this.render();
    if (this.lives > 0) {
      requestAnimationFrame(this.gameLoop.bind(this)); // bind(this) ensures that the 'this' keyword inside gameLoop refers to the current instance of the Game class
    } else {
      this.endGame();
    }
  }

  private update(timestamp: number): void {
    if (timestamp - this.lastDropTime > this.dropInterval) {
      this.parachutists.push(
        new Parachutist(Math.random() * this.canvas.width)
      );
      this.lastDropTime = timestamp;
    }
    // Boat is being updated by the InputHandler
    this.parachutists.forEach((parachutist) => parachutist.update());
    this.checkCollisions();
  }

  private render(): void {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.renderer.renderBoat(this.boat);
    this.parachutists.forEach((parachutist) =>
      this.renderer.renderParachutist(parachutist)
    );
    this.renderer.renderScore(this.score);
    this.renderer.renderLives(this.lives);
  }

  private checkCollisions(): void {
    this.parachutists = this.parachutists.filter((parachutist) => {
      if (parachutist.getY() >= this.canvas.height) {
        this.lives -= 1;
        return false;
      }
      if (parachutist.isCaughtBy(this.boat)) {
        this.score += 10;
        return false;
      }
      return true;
    });
  }

  public endGame(): void {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.font = "48px serif";
    this.context.textAlign = "center";
    this.context.fillText(
      "Game Over",
      this.canvas.width / 2,
      this.canvas.height / 2
    );
    this.context.fillText(
      `Score: ${this.score}`,
      this.canvas.width / 2,
      this.canvas.height / 2 + 60
    );
  }
}
