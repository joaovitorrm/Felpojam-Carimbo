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

    constructor(rect: Rect, private interaction: Function) {
        super(rect);
    }

    update(deltaTime: number): void {
        if (this.visible && this.writing) {
            this.timer += deltaTime;
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

    show() {
        this.visible = true;
    }

    write(text: string, speaker: string = "") {
        this.fullText = this.fitText(text);
        this.speaker = speaker;
        this.text = [""];
        this.textLine = 0;
        this.timer = 0;
        this.writing = true;
    }

    fitText(text: string): string {

        const ctx = document.createElement("canvas").getContext("2d")!;
        ctx.font = "30px Arial";

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

    hide() {
        this.visible = false;
    }

    getIsWriting() : boolean {
        return this.writing;
    }

    getIsTextFinished() : boolean {
        return this.fullText.length === 0;
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

        ctx.textAlign = "left";
        ctx.textBaseline = "top";

        ctx.fillStyle = "white";
        ctx.font = "30px Arial";

        this.text.forEach((line, index) => {
            ctx.fillText(line, this.rect.x + 30, this.rect.y + 30 + index * 40);
        });
    }
    hover(): void {

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
                })
                this.fullText = "";
                return;
            }
        };

        this.interaction();
    }
}
