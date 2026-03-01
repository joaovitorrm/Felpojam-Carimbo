import type InputManager from "../../core/InputManager";
import { Rect } from "../../util/utils";
import { Entity } from "./Entity";

// DEFINE O QUE É UM OBJETO INTERATIVO
// (OBJETO COM INTERAÇÃO PELO JOGADOR)

export abstract class InteractiveObject extends Entity {

    protected hovered : boolean = false;
    constructor(
        rect: Rect,
        protected sprite: HTMLImageElement,
        protected sprite_clip: [number, number, number, number]
    ) {
        super(rect);
    }

    update(input: InputManager) : void {
        this.hovered = input.getMouseRect().collide(this.rect);
    }

    abstract render(ctx: CanvasRenderingContext2D): void
}