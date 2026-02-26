import type { Rect } from "../util/utils";
import { UiElement } from "./UiElement";

export class Label extends UiElement {

    constructor(
        rect: Rect,
        private text: string,
        private color: string,
        private fontSize: number,
        private textAlign: CanvasTextAlign,
        private textBaseline: CanvasTextBaseline,
    ) {
        super(rect);
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.font = `${this.fontSize}px Arial`;
        ctx.fillStyle = this.color;

        ctx.textAlign = this.textAlign;
        ctx.textBaseline = this.textBaseline;

        ctx.fillText(this.text, this.rect.x, this.rect.y, this.rect.width);
        ctx.closePath();
    }
}