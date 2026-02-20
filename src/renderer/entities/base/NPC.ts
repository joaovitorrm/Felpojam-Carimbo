import type { DialogTree } from "../../types/DialogTypes";
import { Rect } from "../../util/utils";
import { InteractiveObject } from "./InteractiveObjects";

// DEFINE O QUE UM NPC DEVE TER

export default class NPC extends InteractiveObject {

    constructor(
        private id: string,
        rect: Rect,        
        sprite: HTMLImageElement,
        sprite_clip: [number, number, number, number],
        private dialogTree: DialogTree,
        private dialogStage: string,
        private interaction: Function
    ) {
        super(rect, sprite, sprite_clip);
    }
    hover(): void {
        
    }
    interact(): void {
        this.interaction(this.dialogTree, this.dialogStage);
    }

    render(ctx: CanvasRenderingContext2D): void {
        if (this.sprite === null) return;
        ctx.drawImage(this.sprite, ...this.sprite_clip!, this.rect.x, this.rect.y, this.rect.width, this.rect.height);
        //ctx.strokeRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);
        //ctx.strokeRect(...this.sprite_clip);
    }
    renderHitBox(ctx: CanvasRenderingContext2D): void {
        ctx.strokeRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);
    }

    public getId() : string {
        return this.id;
    }
}