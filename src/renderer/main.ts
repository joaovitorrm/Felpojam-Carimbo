import Game from "./core/Game";
import GameContext from "./core/GameContext";

// PEGA O GAME CANVAS DO HTML
const gameCanvas = document.getElementById('game-canvas') as HTMLCanvasElement;

// DEFINE O TAMANHO DO CANVAS
gameCanvas.width = 1280;
gameCanvas.height = 720;

// TRANSFORMA EM ELEMENTO QUE PODE DESENHAR
const ctx = gameCanvas.getContext('2d') as CanvasRenderingContext2D;

// ADICIONA LISTENER PARA QUANDO O DOCUMENTO TERMINA DE CARREGAR
document.addEventListener('DOMContentLoaded', async () => {

    const gameContext = new GameContext();

    await gameContext.assetManager.loadAll();

    // ADICIONA OS EVENTOS QUE LIDAM QUANDO O JOGADOR REALIZA ALGUMA AÇÃO COM MOUSE
    document.addEventListener('mousedown', (_) => gameContext.inputManager.onMouseDown());
    document.addEventListener('mouseup', (_) => gameContext.inputManager.onMouseUp());
    document.addEventListener('mousemove', (e) => {
        // GARANTE QUE A POSIÇÃO DO MOUSE FIQUE RELATIVA AO CANVAS E NÃO AO DOCUMENT
        const rect = gameCanvas.getBoundingClientRect();
        gameContext.inputManager.onMouseMove((e.clientX - rect.left), (e.clientY - rect.top))
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