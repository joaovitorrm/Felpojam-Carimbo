import type { Rect } from "../util/utils";
import { UiElement } from "./UiElement";

export class DialogBox extends UiElement {

    private visible : boolean = false;
    private text : string = "";
    private speaker : string = ""

    constructor(rect: Rect, private interaction: Function) {
        super(rect);
    }

    show(text: string, speaker: string = "") {
        this.text = text;
        this.speaker = speaker
        this.visible = true;        
    }

    hide() {
        this.visible = false;
    }

    getIsVisible() {
        return this.visible;
    }

    render(ctx: CanvasRenderingContext2D) {
        if (!this.visible) return;

        ctx.fillStyle = "hsla(0, 0%, 10%, 0.8)";
        ctx.fillRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);

        if (this.speaker !== "") {
            ctx.fillStyle = "hsla(0, 0%, 10%, 0.5)";
            ctx.fillRect(this.rect.x, this.rect.y - 50, 200, 50);

            ctx.fillStyle = "white";
            ctx.textAlign = "left";
            ctx.textBaseline = "top";
            ctx.font = "26px Arial";
            ctx.fillText(this.speaker, this.rect.x + 15, this.rect.y - 50 + 15);
        }

        ctx.fillStyle = "white";
        ctx.font = "24px Arial";
        ctx.fillText(this.text, 80, 450);
    }
    hover(): void {
        
    }
    interact(): void {
        this.interaction();
    }
}
