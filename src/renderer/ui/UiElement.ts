import type { Rect } from "../util/utils";

// ELEMENTO GENERICO A SER IMPLEMENTADO
export abstract class UiElement {

    constructor(protected rect: Rect) {}

    abstract render(ctx: CanvasRenderingContext2D): void;
    update?(args: any): void;

    getRect() : Rect {
        return this.rect;
    }

    abstract interact(): void;
    abstract hover(): void;
}