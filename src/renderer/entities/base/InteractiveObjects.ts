import { Rect } from "../../util/utils";
import { Entity } from "./Entity";

// DEFINE O QUE É UM OBJETO INTERATIVO
// (OBJETO COM INTERAÇÃO PELO JOGADOR)

export abstract class InteractiveObject extends Entity {

    public rect: Rect;
    constructor(
        x: number,
        y: number,
        public width: number,
        public height: number
    ) {
        super(x, y);
        this.rect = new Rect(x, y, width, height);
    }

    abstract interact() : void;
    abstract hover() : void;
}