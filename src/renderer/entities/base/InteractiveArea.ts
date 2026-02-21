import type { Rect } from "../../util/utils";
import { Entity } from "./Entity";

export default class InteractiveArea extends Entity{

    constructor(        
        rect: Rect,
        private handleInteraction: Function,
        private handleHover: Function,
    ) {
        super(rect);
    }

    interact(): void {
        this.handleInteraction();
    }
    hover(): void {
        this.handleHover();
    }    
    render(ctx: CanvasRenderingContext2D): void {
        ctx.strokeRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);
    }
}