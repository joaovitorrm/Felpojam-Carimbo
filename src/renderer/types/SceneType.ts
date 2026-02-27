// DEFINIÇÃO DO QUE DEVE SER UMA SCENE

import type InputManager from "../core/InputManager";

export abstract class SceneType {
    showHud(): boolean { return false; }
    abstract update(deltaTime: number, input: InputManager): void;
    abstract render(ctx: CanvasRenderingContext2D): void;
    abstract onEnter(): void | Promise<void>;
    abstract onExit(): void | Promise<void>;
}