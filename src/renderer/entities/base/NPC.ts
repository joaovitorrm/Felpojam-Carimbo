import type GameContext from "../../core/GameContext";
import type { DialogTree } from "../../types/DialogTypes";
import { Rect } from "../../util/utils";
import { InteractiveObject } from "./InteractiveObjects";

// DEFINE O QUE UM NPC DEVE TER

export default class NPC extends InteractiveObject {

    constructor(
        private id: string,
        rect: Rect,
        private sprite: HTMLImageElement,
        private dialogTree: DialogTree,
        private context: GameContext
    ) {
        super(rect);
    }
    hover(): void {
        
    }
    interact(): void {
        this.context.dialogSystem.start(this.dialogTree, "start");
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.sprite, this.rect.x, this.rect.y, this.rect.width, this.rect.height);
    }
    update(deltaTime: number): void {
        if (this.context.inputManager.getMouseRect().collide(new Rect(this.rect.x, this.rect.y, this.rect.width, this.rect.height))) {
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