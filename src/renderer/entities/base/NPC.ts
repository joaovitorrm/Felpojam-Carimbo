import InputManager from "../../core/InputManager";
import type { Interaction } from "../../interactions/Interaction";
import { Rect } from "../../util/utils";
import { InteractiveObject } from "./InteractiveObjects";

export default class NPC extends InteractiveObject {

    constructor(
        x: number, 
        y: number, 
        width: number, 
        height: number, 
        private sprite: HTMLImageElement,
        private handleInteraction: Interaction
    ) {
        super(x, y, width, height);
    }
    hover(): void {
        
    }
    interact(): void {
        this.handleInteraction.interact();
    }
    render(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    }
    update(deltaTime: number): void {
        const input = InputManager.instance;

        if (input.getMouseRect().collide(new Rect(this.x, this.y, this.width, this.height))) {
            this.hover();
            if (input.isMouseDown() && !input.isMouseConsumed()) {
                input.consumeMouse();
                this.interact();
            }
        }
    }
}