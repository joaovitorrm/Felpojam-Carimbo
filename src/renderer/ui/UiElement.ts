import type { Rect } from "../util/utils";

// ELEMENTO GENERICO A SER IMPLEMENTADO
export abstract class UiElement {

    constructor(protected rect: Rect) {}

    protected isHovering : boolean = false;

    abstract render(ctx: CanvasRenderingContext2D): void;
    update?(args: any): void;

    getRect() : Rect {
        return this.rect;
    }

    getIsHovering() : boolean {
        return this.isHovering;
    }
    
    setIsHovering(val: boolean) : void {
        this.isHovering = val;
    }

    abstract interact(): void;
    abstract hover(): void;
}