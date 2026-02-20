import type GameContext from "./GameContext";

// CLASSE GAME QUE RODA AS CLASSES PRINCIPAIS

export default class Game {

    public constructor(private ctx: GameContext) {
        this.ctx.eventBus.emit("scene:change", 'MainMenu');
    }

    render(ctx: CanvasRenderingContext2D) {
        this.ctx.sceneManager.render(ctx);
        this.ctx.uiManager.render(ctx);
    }

    update(deltaTime: number) {
        this.ctx.sceneManager.update(deltaTime);
        this.ctx.uiManager.update(deltaTime);
    }
}