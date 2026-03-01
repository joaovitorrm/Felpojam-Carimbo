import type InputManager from "../../core/InputManager";
import type { Rect } from "../../util/utils";
import { Entity } from "./Entity";

export default class InteractiveArea extends Entity{

    constructor(        
        rect: Rect,
        private handleInteraction: Function,
        private handleHover: Function,
    ) {
        super(rect);
    }

    interact(): void {
        this.handleInteraction();
    }
    hover(): void {
        this.handleHover();
    }    
    render(ctx: CanvasRenderingContext2D): void {}
    renderHitBox(ctx: CanvasRenderingContext2D): void {
        ctx.strokeRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);
    }
    update(input: InputManager) : void {
        if (input.getMouseRect().collide(this.rect)) {
            this.hover();
            if (input.isMouseDown() && !input.isMouseConsumed()) {
                input.consumeMouse();
                this.interact();
            }
        }
    }
}