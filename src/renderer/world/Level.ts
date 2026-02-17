import type { AssetKey } from "../assets/assets";
import { AssetManager } from "../core/AssetManager";
import type { Entity } from "../entities/base/Entity";

export default class Level {

    public background: HTMLImageElement;
    public entities: Entity[] = [];
    
    constructor(backgroundKey: AssetKey) {
        this.background = AssetManager.instance.get(backgroundKey);
    }

    public addEntity(entity: Entity) {
        this.entities.push(entity);
    }

    public render(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this.background, 0, 0, ctx.canvas.width, ctx.canvas.height);
        this.entities.forEach(entity => entity.render(ctx));
    }

    public update(deltaTime: number) {
        this.entities.forEach(entity => entity.update(deltaTime));
    }
}