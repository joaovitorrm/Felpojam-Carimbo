import type InputManager from "../core/InputManager";
import type { Rect } from "../util/utils";
import { UiElement } from "./UiElement";

export class DialogBox extends UiElement {

    private visible: boolean = false;
    private text: string[] = [];
    private fullText: string = "";
    private textLine: number = 0;
    private speaker: string = "";
    private writeSpeed: number = 0.05;
    private timer: number = 0;
    private writing: boolean = false;
    private paused: boolean = false;
    private fontSize = 30;
    private fontFamily = "Arial";
    private isBold = true;

    constructor(rect: Rect, private interaction: Function) {
        super(rect);
    }

    update(input: InputManager, dt: number): void {
        super.update(input);

        if (!this.visible) return;

        this.updateWriting(dt);

        if (input.isMouseDown() && !input.isMouseConsumed()) {
            input.consumeMouse();
            this.interact();
        }
    }

    private updateWriting(dt: number) {
        if (this.visible && this.writing) {
            this.timer += dt;
            if (this.timer > this.writeSpeed) {
                if (this.fullText.length > 0) {
                    const firstChar = this.fullText.slice(0, 1);
                    if (firstChar == "&") {
                        this.textLine++;
                        this.text.push("");
                    } else {
                        this.text[this.textLine] += this.fullText.slice(0, 1);
                    }
                    this.fullText = this.fullText.slice(1);
                    this.timer = 0;
                } else {
                    this.writing = false;
                }
            }
        }
    }

    write(text: string, speaker: string = "") {        
        this.speaker = speaker;
        this.isBold = speaker === "";
        this.fullText = this.fitText(text);
        this.text = [""];
        this.textLine = 0;
        this.timer = 0;
        this.writing = true;
    }

    fitText(text: string): string {

        const ctx = document.createElement("canvas").getContext("2d")!;
        ctx.font = `${this.isBold ? "bold " : ""} ${this.fontSize}px ${this.fontFamily}`;

        let wordSize = 0;
        const textWords = text.split(" ").map((word) => {
            wordSize += ctx.measureText(word).width + ctx.measureText(" ").width + 3;
            if (wordSize > this.rect.width) {
                wordSize = ctx.measureText(word).width;
                return "&" + word + " ";
            } else {
                return word + " ";
            }
        });

        return textWords.join("");
    }

    render(ctx: CanvasRenderingContext2D) {
        if (!this.visible) return;

        if (this.speaker !== "") {

            // DialogBox
            ctx.fillStyle = "hsla(0, 0%, 10%, 0.8)";
            ctx.fillRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);

            ctx.font = "normal 26px Arial";

            // SpeakerBox
            ctx.fillStyle = "hsla(0, 0%, 10%, 0.5)";
            ctx.fillRect(this.rect.x, this.rect.y - 50, ctx.measureText(this.speaker).width + 50, 50);

            // Speaker
            ctx.fillStyle = "white";
            ctx.textAlign = "left";
            ctx.textBaseline = "top";            
            ctx.fillText(this.speaker, this.rect.x + 25, this.rect.y - 50 + 15);
        }

        ctx.textAlign = "left";
        ctx.textBaseline = "top";

        ctx.font = `${this.isBold ? "bold " : ""} ${this.fontSize}px ${this.fontFamily}`;
        
        ctx.fillStyle = "white";

        ctx.strokeStyle = "hsl(0, 0%, 10%)";
        ctx.lineWidth = 2;

        this.text.forEach((line, index) => {
            if (this.speaker === "") ctx.strokeText(line, this.rect.x + 30, this.rect.y + 30 + index * 40);
            ctx.fillText(line, this.rect.x + 30, this.rect.y + 30 + index * 40);
        });
    }

    interact(): void {

        if (!this.visible || this.paused) return;

        if (this.writing) {
            this.timer = 0;
            this.writing = false;
            if (this.text.length < this.fullText.length) {
                const lines = this.fullText.split("&");
                lines.forEach((l, i) => {
                    this.text[i + this.textLine] ? this.text[i + this.textLine] += l : this.text[i + this.textLine] = l;
                });
                this.fullText = "";
                return;
            };
        };

        this.interaction();
    }

    clearText() {
        this.fullText = "";
        this.text = [];
    }

    hasText() {
        return this.fullText !== "" || this.text.length > 0;
    }

    show() {
        this.visible = true;
    }

    getIsTextFinished(): boolean {
        return this.fullText.length === 0;
    }

    getRect(): Rect {
        return this.rect;
    }

    pause() {
        this.paused = true;
    }

    unpause() {
        this.paused = false;
    }

    getIsVisible() {
        return this.visible;
    }

    hide() {
        this.visible = false;
    }

    getIsWriting(): boolean {
        return this.writing;
    }
}
