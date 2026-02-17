import DialogSystem from "../systems/DialogueSystem";
import { Rect } from "../util/utils";
import { UiElement } from "./UiElement";

export class DialogBox extends UiElement {
    private rect: Rect;

    constructor(x: number, y: number, width: number, height: number, private fontSize: number = 24, private color: string = "white", private background: string = "black") {
        super();
        this.rect = new Rect(x, y, width, height);
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.background;
        ctx.fillRect(this.rect.left, this.rect.top, this.rect.width, this.rect.height);

        ctx.font = `${this.fontSize}px Arial`;
        ctx.fillStyle = this.color;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(DialogSystem.instance.currentDialog, this.rect.centerX, this.rect.centerY);
    }

    update(deltaTime: number): void {}

    interact(): void {}

    hover(): void {}
}