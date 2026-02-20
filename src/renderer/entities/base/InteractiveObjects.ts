import { Rect } from "../../util/utils";
import { Entity } from "./Entity";

// DEFINE O QUE É UM OBJETO INTERATIVO
// (OBJETO COM INTERAÇÃO PELO JOGADOR)

export abstract class InteractiveObject extends Entity {

    constructor(
        rect: Rect,
        protected sprite: HTMLImageElement,
        protected sprite_clip: [number, number, number, number]
    ) {
        super(rect);
    }

    abstract render(ctx: CanvasRenderingContext2D): void
    abstract update(deltaTime: number): void
    abstract interact() : void;
    abstract hover() : void;
}