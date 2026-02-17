import { AssetManager } from "./core/AssetManager";
import Game from "./core/Game";
import InputManager from "./core/InputManager";

const gameCanvas = document.getElementById('game-canvas') as HTMLCanvasElement;

gameCanvas.width = 1280;
gameCanvas.height = 720;

const ctx = gameCanvas.getContext('2d') as CanvasRenderingContext2D;

document.addEventListener('DOMContentLoaded', async () => {

    await AssetManager.instance.loadAll();

    const inputManager = InputManager.instance;

    document.addEventListener('mousedown', (_) => inputManager.onMouseDown());
    document.addEventListener('mouseup', (_) => inputManager.onMouseUp());
    document.addEventListener('mousemove', (e) => {
        const rect = gameCanvas.getBoundingClientRect();
        inputManager.onMouseMove((e.clientX - rect.left), (e.clientY - rect.top))
    });

    const game = new Game();

    let lastTime = performance.now();

    const loop = () => {

        const currentTime = performance.now();
        const deltaTime = (currentTime - lastTime) / 1000;
        lastTime = currentTime;

        if (deltaTime > 0.1) {
            requestAnimationFrame(loop);
            return;
        };

        game.update(deltaTime);
        game.render(ctx);

        requestAnimationFrame(loop);
    }

    loop();

});