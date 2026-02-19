import type GameContext from "../core/GameContext";
import type InputManager from "../core/InputManager";
import type { MenuData } from "../types/MenuData";
import { SceneType } from "../types/SceneType";
import { Button } from "../ui/Button";
import type { UiElement } from "../ui/UiElement";

export default class MainMenuScene extends SceneType {

    private elements : UiElement[] = [];

    constructor(private context: GameContext) {
        super();


    }

    private createObjects(data: MenuData) : void {
        data.buttons.forEach(b => {
            const btn = new Button(
                b.x, b.y, b.width, b.height,
                b.label, 20, "hsla(0, 0%, 10%, 0.8)",
                "black", () => this.context.eventBus.emit("scene:change", )
            )
        })
    }

    onEnter(): void {
        
    }
    onExit(): void {
        
    }
    render(ctx: CanvasRenderingContext2D): void {
        
    }
    update(deltaTime: number, input: InputManager): void {
        
    }
}