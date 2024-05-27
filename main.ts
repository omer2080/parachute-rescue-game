import { Game } from "./components/Game.ts";

const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const game = new Game(canvas);
game.start();
