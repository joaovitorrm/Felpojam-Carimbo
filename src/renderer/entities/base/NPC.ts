import type InputManager from "../../core/InputManager";
import { Rect } from "../../util/utils";
import { InteractiveObject } from "./InteractiveObjects";

// DEFINE O QUE UM NPC DEVE TER

export default class NPC extends InteractiveObject {

    constructor(
        private id: string,
        rect: Rect,        
        sprite: HTMLImageElement,
        sprite_clip: [number, number, number, number],
        private interact: Function,
        private hover: Function = () => {}
    ) {
        super(rect, sprite, sprite_clip);
    }

    update(input: InputManager): void {
        super.update(input);
        if (this.hovered) {
            this.hover();
            if (input.isMouseDown() && !input.isMouseConsumed()) {
                input.consumeMouse();
                this.interact();
            }
        };
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