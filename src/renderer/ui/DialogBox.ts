import type { Rect } from "../util/utils";
import { UiElement } from "./UiElement";

export class DialogBox extends UiElement {

    private visible = false;
    private text = "";

    constructor(rect: Rect) {
        super(rect);
    }

    show(text: string) {
        this.text = text;
        this.visible = true;
    }

    hide() {
        this.visible = false;
    }

    render(ctx: CanvasRenderingContext2D) {
        if (!this.visible) return;
        
        ctx.fillStyle = "black";
        ctx.fillRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);

        ctx.fillStyle = "black";
        ctx.font = "24px Arial";
        ctx.fillText(this.text, 80, 450);
    }
    hover(): void {
        
    }
    interact(): void {
        
    }
}
