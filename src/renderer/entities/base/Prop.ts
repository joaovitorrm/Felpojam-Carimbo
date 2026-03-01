import type InputManager from "../../core/InputManager";
import { Rect } from "../../util/utils";
import { InteractiveObject } from "./InteractiveObjects";

export default class Prop extends InteractiveObject {

    private isVisible: boolean = true;
    private whiteSprite: HTMLCanvasElement | null = null;

    constructor(
        public id: string,
        rect: Rect,
        sprite: HTMLImageElement,
        sprite_clip: [number, number, number, number],
        private interact: Function,
        private hover: Function
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

    setVisible(visible: boolean): void {
        this.isVisible = visible;
    }

    update(input: InputManager): void {
        if (!this.isVisible) return;
        super.update(input);
        if (this.hovered) {
            this.hover();
            if (input.isMouseDown() && !input.isMouseConsumed()) {
                input.consumeMouse();
                this.interact();
            }
        };
    }

    render(ctx: CanvasRenderingContext2D): void {
        if (!this.isVisible) return;
        if (this.hovered) this.renderOutline(ctx);
        ctx.drawImage(this.sprite, ...this.sprite_clip!, this.rect.x, this.rect.y, this.rect.width, this.rect.height);
    }

    renderOutline(ctx: CanvasRenderingContext2D): void {
        const white = this.getWhiteSprite();
        ctx.drawImage(white, this.rect.x - 3, this.rect.y - 3, this.rect.width + 6, this.rect.height + 6);
    }

    renderHitBox(ctx: CanvasRenderingContext2D): void {
        ctx.strokeRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);
    }
}