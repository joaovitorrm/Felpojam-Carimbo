import { Rect } from "../../util/utils";
import { InteractiveObject } from "./InteractiveObjects";

export default class Prop extends InteractiveObject {

    private inFocus : boolean = false;
    constructor(
        rect: Rect, 
        sprite: HTMLImageElement, 
        sprite_clip: [number, number, number, number],
        private handleInteraction: Function,
        private handleHover: Function
    ) {
        super(rect, sprite, sprite_clip);
    }
    hover(): void {
        this.handleHover();
    }

    toggleFocus() : void {
        this.inFocus = !this.inFocus;
    }

    getIsInFocus() : boolean {
        return this.inFocus;
    }

    setInFocus(val: boolean) : void {
        this.inFocus = val;
    }

    setHover(func : Function) : void {
        this.handleHover = func;
    }

    setInteraction(func : Function) : void {
        this.handleInteraction = func;
    }

    interact(): void {
        this.handleInteraction();
    }
    render(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.sprite, ...this.sprite_clip!, this.rect.x, this.rect.y, this.rect.width, this.rect.height);   
    }

    renderHitBox(ctx: CanvasRenderingContext2D): void {
        ctx.strokeRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);
    }
}