// TODO
export abstract class UiElement {
    abstract render(ctx: CanvasRenderingContext2D): void;
    abstract update(deltaTime: number): void;
    abstract interact?(): void;
    abstract hover?(): void;
}