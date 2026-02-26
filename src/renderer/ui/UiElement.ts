import type InputManager from "../core/InputManager";
import type { Rect } from "../util/utils";

// ELEMENTO GENERICO A SER IMPLEMENTADO
export abstract class UiElement {

    constructor(protected rect: Rect) {}

    protected hovered : boolean = false;

    abstract render(ctx: CanvasRenderingContext2D): void;

    update(input: InputManager, ...args: any) : void {
        this.hovered = this.rect.collide(input.getMouseRect());
    };
}