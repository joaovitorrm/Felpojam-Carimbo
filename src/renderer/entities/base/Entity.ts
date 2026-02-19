// DEFINE O QUE É UMA ENTIDADE

import type { Rect } from "../../util/utils";

export abstract class Entity {
    constructor(
        public rect: Rect
    ) {}

    abstract render(ctx: CanvasRenderingContext2D): void
    abstract update(deltaTime: number): void
}