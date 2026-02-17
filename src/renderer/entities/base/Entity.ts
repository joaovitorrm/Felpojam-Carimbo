export abstract class Entity {
    constructor(
        public x: number,
        public y: number
    ) {}

    abstract render(ctx: CanvasRenderingContext2D): void
    abstract update(deltaTime: number): void
}