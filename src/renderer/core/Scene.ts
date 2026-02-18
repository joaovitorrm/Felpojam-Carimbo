// DEFINIÇÃO DO QUE DEVE SER UMA SCENE

export abstract class Scene {
    abstract update(deltaTime: number): void;
    abstract render(ctx: CanvasRenderingContext2D): void;
    abstract onEnter(): void;
    abstract onExit(): void;
}