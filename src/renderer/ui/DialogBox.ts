import type InputManager from "../core/InputManager";
import DialogSystem from "../systems/DialogueSystem";
import { Rect } from "../util/utils";
import { UiElement } from "./UiElement";

// ELEMENTO DO TIPO CAIXA DE DIALOGO

export class DialogBox extends UiElement {

    constructor(x: number, y: number, width: number, height: number, private fontSize: number = 24, private color: string = "white", private background: string = "black") {
        super(new Rect(x, y, width, height));        
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

    update(input: InputManager): void {
        if (input.getMouseRect().collide(this.rect)) {
            if (input.isMouseDown() && !input.isMouseConsumed()) {
                input.consumeMouse();
            }
        }
    }    
}