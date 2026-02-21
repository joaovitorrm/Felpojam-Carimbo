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
        private interaction: Function,
        private handleHover: Function = () => {},        
    ) {
        super(rect)

    }
    hover(): void {
        this.handleHover();
    }
    interact(): void {
        this.interaction();
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
}