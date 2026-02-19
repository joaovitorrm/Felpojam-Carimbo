// DEFINIÇÃO DO QUE DEVE SER UMA SCENE

import type InputManager from "../core/InputManager";

export abstract class SceneType {
    abstract update(deltaTime: number, input: InputManager): void;
    abstract render(ctx: CanvasRenderingContext2D): void;
    abstract onEnter(): void;
    abstract onExit(): void;
}