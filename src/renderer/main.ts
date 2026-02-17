import { AssetManager } from "./core/AssetManager";
import Game from "./core/Game";
import InputManager from "./core/InputManager";

const gameCanvas = document.getElementById('game-canvas') as HTMLCanvasElement;
const ctx = gameCanvas.getContext('2d') as CanvasRenderingContext2D;

document.addEventListener('DOMContentLoaded', async () => {

    await AssetManager.instance.loadAll();

    const inputManager = InputManager.instance;

    document.addEventListener('mousedown', (_) => inputManager.onMouseDown());
    document.addEventListener('mouseup', (_) => inputManager.onMouseUp());
    document.addEventListener('mousemove', (e) => inputManager.onMouseMove(e.clientX, e.clientY));

    const game = new Game();

    const loop = () => {
        game.update(16);
        game.render(ctx);
        requestAnimationFrame(loop);
    }

    loop();
    
});