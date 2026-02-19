import { levels, type LevelsKey } from "../assets/data/levels/levels";
import type GameContext from "../core/GameContext";
import type { Entity } from "../entities/base/Entity";
import type { LevelData } from "../types/LevelData";
import { SceneType } from "../types/SceneType";

export default class GameScene extends SceneType {

    private background : HTMLImageElement | null = null;
    private entities : Entity[] = [];

    constructor(private context : GameContext, sceneId: LevelsKey) {
        super();
        const level = levels[sceneId];

        this.createBackground(level);
        this.createNPCs(level);
        this.createObjects(level);
    }

    private createBackground(data: LevelData) {
        this.background = 
            this.context.assetManager.get(data.background);
    }

    private createNPCs(data: LevelData) {
        for (const npcData of data.npcs) {
            const npc = this.context.npcFactory.createNPC(npcData);
            this.entities.push(npc);
        }
    }

    private createObjects(data: LevelData) {
        
    }

    render(ctx: CanvasRenderingContext2D): void {
        if (!this.background) return;
        ctx.drawImage(this.background, 0, 0, ctx.canvas.width, ctx.canvas.height);
        this.entities.forEach(e => e.render(ctx));
    }

    update(deltaTime: number): void {
        this.entities.forEach(e => e.update(deltaTime));
    }

    onEnter(): void {
        
    }

    onExit(): void {
        
    }
}