import type GameContext from "../../core/GameContext";
import { Rect } from "../../util/utils";
import { InteractiveObject } from "./InteractiveObjects";

export default class Prop extends InteractiveObject {

    private inFocus : boolean = false;
    constructor(
        rect: Rect, 
        sprite: HTMLImageElement | null, 
        sprite_clip: [number, number, number, number] | null,
        private context: GameContext,
        private handleInteraction: Function = () => {},
        private handleHover: Function = () => {}
    ) {
        super(rect, sprite, sprite_clip);
    }
    hover(): void {
        this.handleHover();
    }

    toggleFocus() {
        this.inFocus = !this.inFocus;
    }

    setInteraction(func : Function) {
        this.handleInteraction = func;
    }

    interact(): void {
        this.handleInteraction();
    }
    render(ctx: CanvasRenderingContext2D): void {
        if (this.sprite === null) return;

        if (this.inFocus) {
            ctx.drawImage(this.sprite, ...this.sprite_clip!, 140, 60, 1000, 600);
            return;
        }

        ctx.drawImage(this.sprite, ...this.sprite_clip!, this.rect.x, this.rect.y, this.rect.width, this.rect.height);   
    }

    renderHitBox(ctx: CanvasRenderingContext2D): void {
        ctx.strokeRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);
    }
    update(deltaTime: number): void {
        if (this.context.inputManager.getMouseRect().collide(
            new Rect(this.rect.x, this.rect.y, this.rect.width, this.rect.height))) {
            this.hover();
            if (this.context.inputManager.isMouseDown() && !this.context.inputManager.isMouseConsumed()) {
                this.context.inputManager.consumeMouse();
                this.interact();
            }
        }
    }
}