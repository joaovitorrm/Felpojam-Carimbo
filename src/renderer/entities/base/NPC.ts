import type GameContext from "../../core/GameContext";
import type { DialogTree } from "../../types/DialogTypes";
import { Rect } from "../../util/utils";
import { InteractiveObject } from "./InteractiveObjects";

// DEFINE O QUE UM NPC DEVE TER

export default class NPC extends InteractiveObject {

    constructor(
        private id: string,
        rect: Rect,
        private dialogTree: DialogTree,
        private context: GameContext,
        sprite: HTMLImageElement,
        sprite_clip: [number, number, number, number]
    ) {
        super(rect, sprite, sprite_clip);
    }
    hover(): void {
        
    }
    interact(): void {
        this.context.dialogSystem.start(this.dialogTree, "start");
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
    update(deltaTime: number): void {
        if (this.context.inputManager.getMouseRect().collide(
            new Rect(this.rect.x, this.rect.y, this.rect.width, this.rect.height))) {
            this.hover();
            if (this.context.inputManager.isMouseDown() && !this.context.inputManager.isMouseConsumed()) {
                this.context.inputManager.consumeMouse();
                this.interact();
            }
        }
    }

    public getId() : string {
        return this.id;
    }
}