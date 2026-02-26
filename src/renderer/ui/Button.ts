import type InputManager from "../core/InputManager";
import { Rect } from "../util/utils";
import { UiElement } from "./UiElement";

export class Button extends UiElement {

    constructor(
        rect: Rect, 
        private text: string, 
        private fontSize: number, 
        private color: string,
        private background: string,
        private textBaseline: CanvasTextBaseline,
        private textAlign: CanvasTextAlign,
        private borderRadius: number,
        private interact: Function,
        private hover: Function = () => {},        
    ) {
        super(rect)

    }

    update(input: InputManager) {
        super.update(input);

        if (this.hovered) {
            this.hover();
            if (input.isMouseDown() && !input.isMouseConsumed()) {
                input.consumeMouse();
                this.interact();
            }
        }

    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.fillStyle = this.background;
        ctx.roundRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height, this.borderRadius);
        ctx.fill();

        ctx.textBaseline = this.textBaseline;
        ctx.textAlign = this.textAlign;
        ctx.font = `${this.fontSize}px Arial`;
        ctx.fillStyle = this.color;
        ctx.fillText(this.text, this.rect.x + this.rect.width/2, this.rect.y + this.rect.height/2, this.rect.width);
        ctx.closePath();
    }
}