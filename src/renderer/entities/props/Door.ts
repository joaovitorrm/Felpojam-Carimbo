import { Rect } from "../../util/utils";
import { InteractiveObject } from "../base/InteractiveObjects";

export default class Door extends InteractiveObject {

    constructor(
        x: number, 
        y: number, 
        width: number, 
        height: number, 
        sprite: HTMLImageElement,
        sprite_clip: [number, number, number, number],
        private handleInteraction: () => void
    ) {
        super(new Rect(x, y, width, height), sprite, sprite_clip);        
    }

    interact() : void {
        this.handleInteraction();
    }
    hover(): void {
        
    }
    render(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.sprite, this.rect.x, this.rect.y, this.rect.width, this.rect.height, ...this.sprite_clip);
    }
    update(deltaTime: number): void {
    }
}