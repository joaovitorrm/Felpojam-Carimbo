import type GameContext from "./GameContext";

// CLASSE GAME QUE RODA AS CLASSES PRINCIPAIS

export default class Game {

    public constructor(private ctx: GameContext) {
        this.ctx.eventBus.emit("scene:change", 'MainMenu');

        this.ctx.eventBus.on("game:start", () => {
            this.ctx.sceneManager.clear();
            this.ctx.worldState.reset();
            this.ctx.dialogState.clear();
        })
    }

    render(ctx: CanvasRenderingContext2D) {
        this.ctx.sceneManager.render(ctx);
        this.ctx.uiManager.render(ctx, this.ctx.sceneManager.getCurrentScene());
    }

    update(deltaTime: number) {
        this.ctx.uiManager.update(deltaTime, this.ctx.sceneManager.getCurrentScene());
        this.ctx.sceneManager.update(deltaTime);        
    }
}