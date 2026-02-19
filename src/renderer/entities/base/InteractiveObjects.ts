import { Rect } from "../../util/utils";
import { Entity } from "./Entity";

// DEFINE O QUE É UM OBJETO INTERATIVO
// (OBJETO COM INTERAÇÃO PELO JOGADOR)

export abstract class InteractiveObject extends Entity {

    constructor(
        rect: Rect
    ) {
        super(rect);
    }

    abstract interact() : void;
    abstract hover() : void;
}