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
        private interaction: Function,
        private handleHover: Function = () => {}
    ) {
        super(rect);
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);

        ctx.font = `${this.fontSize}px Arial`;
        ctx.fillStyle = this.color;
        ctx.textBaseline = this.textBaseline;
        ctx.textAlign = this.textAlign;
        ctx.fillText(this.label, this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2, this.rect.width);
    }

    interact(): void {
        this.interaction();
    }

    hover(): void {
        this.handleHover();
    }


}