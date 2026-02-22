import type { Rect } from "../util/utils";
import { UiElement } from "./UiElement";

export default class Panel extends UiElement {

    private sprite: HTMLImageElement | null = null;
    private spriteClip: [number, number, number, number] | [] = [];
    private visible: boolean = false;

    constructor(
        rect: Rect,
        private interaction: Function = () => {},
        private handleHover: Function = () => {}
    ) {
        super(rect);
    }

    setSprite(sprite: HTMLImageElement, sprite_clip: [number, number, number, number]): void {
        this.sprite = sprite;
        this.spriteClip = sprite_clip;
    }

    setVisible(visible: boolean): void {
        this.visible = visible;
    }

    toggleVisible(): void {
        this.visible = !this.visible;
    }

    getIsVisible(): boolean {
        return this.visible;
    }

    setInteraction(func: Function): void {
        this.interaction = func;
    }

    setHover(func: Function): void {
        this.handleHover = func;
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.sprite!, ...this.spriteClip! as [number, number, number, number], this.rect.x, this.rect.y, this.rect.width, this.rect.height);
    }
    interact(): void {
        this.interaction();
    }
    hover(): void {
        this.handleHover()
    }
}