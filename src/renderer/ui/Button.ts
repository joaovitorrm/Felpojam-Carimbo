import type InputManager from "../core/InputManager";
import { Rect } from "../util/utils";
import { UiElement } from "./UiElement";

export class Button extends UiElement {

    constructor(
        x: number, 
        y: number, 
        width: number, 
        height: number, 
        private text: string, 
        private fontSize: number, 
        private background: string,
        private color: string,
        private interaction: () => void,
        private textBaseline: CanvasTextBaseline = "middle",
        private textAlign: CanvasTextAlign = "center"
    ) {
        super(new Rect(x, y, width, height))

    }

    hover(): void {
        
    }
    interact(): void {
        this.interaction()
    }
    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.background;
        ctx.fillRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);

        ctx.textBaseline = this.textBaseline;
        ctx.textAlign = this.textAlign;
        ctx.font = `${this.fontSize}px Arial`;
        ctx.fillStyle = this.color;
        ctx.fillText(this.text, this.rect.x + this.rect.width/2, this.rect.y + this.rect.height/2, this.rect.width);

    }
    update(input: InputManager): void {
        if (input.getMouseRect().collide(this.rect)) {
            this.hover();
            if (input.isMouseDown() && !input.isMouseConsumed()) {
                input.consumeMouse();
                this.interact();
            }
        }
    }
}