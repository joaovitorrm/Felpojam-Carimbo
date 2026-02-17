import { InteractiveObject } from "../base/InteractiveObjects";

export default class Door extends InteractiveObject {

    private sprite: HTMLImageElement;

    constructor(
        x: number, 
        y: number, 
        width: number, 
        height: number, 
        sprite: HTMLImageElement, 
        private handleInteraction: () => void
    ) {
        super(x, y, width, height);
        this.sprite = sprite;        
    }

    interact() : void {
        this.handleInteraction();
    }
    hover(): void {
        
    }
    render(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    }
    update(deltaTime: number): void {
        
    }
}