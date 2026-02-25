import { Rect } from "../../util/utils";
import { InteractiveObject } from "./InteractiveObjects";

export default class Prop extends InteractiveObject {

    private inFocus: boolean = false;
    private isHovering: boolean = false;
    private whiteSprite: HTMLCanvasElement | null = null;

    constructor(
        rect: Rect,
        sprite: HTMLImageElement,
        sprite_clip: [number, number, number, number],
        private handleInteraction: Function,
        private handleHover: Function
    ) {
        super(rect, sprite, sprite_clip);
    }

    private getWhiteSprite(): HTMLCanvasElement {

        if (this.whiteSprite) return this.whiteSprite;

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d")!;

        const [sx, sy, sw, sh] = this.sprite_clip;

        canvas.width = sw;
        canvas.height = sh;

        // desenha sprite original
        ctx.drawImage(this.sprite, sx, sy, sw, sh, 0, 0, sw, sh);

        // transforma em branco
        ctx.globalCompositeOperation = "source-in";
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, sw, sh);

        this.whiteSprite = canvas;

        return canvas;
    }

    hover(): void {
        this.isHovering = true;
        this.handleHover();
    }

    toggleFocus(): void {
        this.inFocus = !this.inFocus;
    }

    getIsInFocus(): boolean {
        return this.inFocus;
    }

    setInFocus(val: boolean): void {
        this.inFocus = val;
    }

    setHover(func: Function): void {
        this.handleHover = func;
    }

    setInteraction(func: Function): void {
        this.handleInteraction = func;
    }

    interact(): void {
        this.handleInteraction();
    }
    render(ctx: CanvasRenderingContext2D): void {
        if (this.isHovering) this.renderOutline(ctx);
        ctx.drawImage(this.sprite, ...this.sprite_clip!, this.rect.x, this.rect.y, this.rect.width, this.rect.height);
        this.isHovering = false;
    }

    renderOutline(ctx: CanvasRenderingContext2D): void {
        const white = this.getWhiteSprite();
        ctx.drawImage(white, this.rect.x - 3, this.rect.y - 3, this.rect.width + 6, this.rect.height + 6);
    }

    renderHitBox(ctx: CanvasRenderingContext2D): void {
        ctx.strokeRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);
    }
}