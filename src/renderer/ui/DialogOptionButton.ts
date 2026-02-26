import type InputManager from "../core/InputManager";
import type { Rect } from "../util/utils";
import { UiElement } from "./UiElement";

export default class DialogOptionButton extends UiElement {
    constructor(
        rect: Rect,
        private label: string,
        private fontSize: number,
        private color: string,
        private backgroundColor: string,
        private textBaseline: CanvasTextBaseline,
        private textAlign: CanvasTextAlign,
        private interact: Function,
        private hover: Function = () => {}
    ) {
        super(rect);
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.fillStyle = this.backgroundColor;
        ctx.roundRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height, 5);
        ctx.fill();

        if (this.hovered) {
            this.renderOutline(ctx);
        }

        ctx.font = `${this.fontSize}px Arial`;
        ctx.fillStyle = this.color;
        ctx.textBaseline = this.textBaseline;
        ctx.textAlign = this.textAlign;

        ctx.fillText(this.label, this.rect.x + (this.rect.width/2), this.rect.y + this.rect.height / 2, this.rect.width);
        ctx.closePath();
    }

    renderOutline(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        ctx.stroke();
    }

    update(input: InputManager) : void {
        super.update(input);

        if (this.hovered) {
            this.hover();
            if (input.isMouseDown() && !input.isMouseConsumed()) {
                input.consumeMouse();
                this.interact();
            }
        }
    }
}