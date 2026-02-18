import type InputManager from "../core/InputManager";
import type { Rect } from "../util/utils";

// ELEMENTO GENERICO A SER IMPLEMENTADO
export abstract class UiElement {

    constructor(protected rect: Rect) {}

    abstract render(ctx: CanvasRenderingContext2D): void;
    abstract update(input: InputManager): void;

    interact?(): void;
    hover?(): void;
}