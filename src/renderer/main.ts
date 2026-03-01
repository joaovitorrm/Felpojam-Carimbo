import Game from "./core/Game";
import GameContext from "./core/GameContext";
import type { GameSettingsData } from "./core/SettingsManager";
import SettingsManager from "./core/SettingsManager";

// PEGA O GAME CANVAS DO HTML
const gameCanvas = document.getElementById('game-canvas') as HTMLCanvasElement;

const defaultSettings: GameSettingsData = {
    language: "pt-BR",
    masterVolume: 1,
    musicVolume: 0.8,
    sfxVolume: 0.8,
    textSpeed: 1,
    resolution: { width: 1280, height: 720 },
    fullscreen: false
}

// TRANSFORMA EM ELEMENTO QUE PODE DESENHAR
const ctx = gameCanvas.getContext('2d') as CanvasRenderingContext2D;

// ADICIONA LISTENER PARA QUANDO O DOCUMENTO TERMINA DE CARREGAR
document.addEventListener('DOMContentLoaded', async () => {

    const settingsManager = new SettingsManager();

    await settingsManager.load(defaultSettings);

    const gameContext = new GameContext(settingsManager)

    gameContext.eventBus.on("app:quit", () => {
        window.api.quit();
    })

    await gameContext.assetManager.loadAll();
    gameContext.audioManager.loadAll();

    // DEFINE O TAMANHO DO CANVAS
    gameCanvas.width = settingsManager.data.resolution.width;
    gameCanvas.height = settingsManager.data.resolution.height;

    // ADICIONA OS EVENTOS QUE LIDAM QUANDO O JOGADOR REALIZA ALGUMA AÇÃO COM MOUSE
    document.addEventListener('pointerdown', (_) => gameContext.inputManager.onMouseDown());
    document.addEventListener('pointerup', (_) => gameContext.inputManager.onMouseUp());
    document.addEventListener('pointermove', (e) => {
        // GARANTE QUE A POSIÇÃO DO MOUSE FIQUE RELATIVA AO CANVAS E NÃO AO DOCUMENT        
        gameContext.inputManager.onMouseMove(e, gameCanvas)
    });

    // INSTANCIA UMA CLASSE GAME
    const game = new Game(gameContext);

    // PEGA O TEMPO ATUAL
    let lastTime = performance.now();

    // FUNÇÃO DO LOOP PRINCIPAL
    const loop = () => {

        // PEGA O TEMPO NOVAMENTE
        const currentTime = performance.now();
        // CALCULA A DIFERENÇA PARA SABER QUANTO TEMPO (s) SE PASSOU DESDE O ÚLTIMO FRAME
        const deltaTime = (currentTime - lastTime) / 1000;
        lastTime = currentTime;

        // SE ACUMULAR MUITO TEMPO RETORNA PARA NÃO CONTINUAR O LOOP COM VALOR ELEVADO
        if (deltaTime > 0.1) {
            requestAnimationFrame(loop);
            return;
        };

        // CHAMA O METODO DE UPDATE E RENDER DO GAME
        game.update(deltaTime);
        game.render(ctx);

        // REINICIA O LOOP
        requestAnimationFrame(loop);
    }

    loop();

});