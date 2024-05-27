import { Game } from "./components/Game";

const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const game = new Game(canvas);

game.start();

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    game.endGame();
  }
});
