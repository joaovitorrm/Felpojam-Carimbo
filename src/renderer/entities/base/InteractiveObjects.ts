import { Rect } from "../../util/utils";
import { Entity } from "./Entity";

// DEFINE O QUE É UM OBJETO INTERATIVO
// (OBJETO COM INTERAÇÃO PELO JOGADOR)

export abstract class InteractiveObject extends Entity {

    constructor(
        rect: Rect,
        protected sprite: HTMLImageElement | null,
        protected sprite_clip: [number, number, number, number] | null
    ) {
        super(rect);
    }

    abstract render(ctx: CanvasRenderingContext2D): void
    abstract interact() : void;
    abstract hover() : void;
}