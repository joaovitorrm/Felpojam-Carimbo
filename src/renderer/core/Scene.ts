// DEFINIÇÃO DO QUE DEVE SER UMA SCENE

import type InputManager from "./InputManager";

export abstract class Scene {
    abstract update(deltaTime: number, input: InputManager): void;
    abstract render(ctx: CanvasRenderingContext2D): void;
    abstract onEnter(): void;
    abstract onExit(): void;
}