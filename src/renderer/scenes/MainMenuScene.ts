import { menus, type MenusKey } from "../assets/data/menus";
import type GameContext from "../core/GameContext";
import type { MenuData } from "../types/MenuData";
import { SceneType } from "../types/SceneType";
import { Button } from "../ui/Button";
import type { UiElement } from "../ui/UiElement";

export default class MainMenuScene extends SceneType {

    private elements : UiElement[] = [];
    private background : HTMLImageElement | null = null;

    constructor(private context: GameContext, menuKey: MenusKey) {
        super();

        const data = menus[menuKey];

        this.createBackground(data);
        this.createObjects(data);
    }

    private createBackground(data: MenuData) : void {
        this.background = this.context.assetManager.get(data.background);
    }

    private createObjects(data: MenuData) : void {
        data.buttons.forEach(b => {
            const btn = new Button(
                b.x, b.y, b.width, b.height,
                b.label, 20, "hsla(0, 0%, 10%, 0.8)",
                "white", () => this.context.eventBus.emit("scene:change", b.action),
                this.context.inputManager
            )
            this.elements.push(btn);
        })
    }

    onEnter(): void {
        
    }
    onExit(): void {
        
    }
    render(ctx: CanvasRenderingContext2D): void {
        if (!this.background) return;
        ctx.drawImage(this.background, 0, 0, ctx.canvas.width, ctx.canvas.height);
        this.elements.forEach(e => e.render(ctx));
    }
    update(deltaTime: number): void {
        this.elements.forEach(e => e.update!(deltaTime));
    }
}