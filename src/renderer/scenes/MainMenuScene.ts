import { MenuElementsFactory } from "../world/factories/MenuElementsFactory";
import { SceneType } from "../types/SceneType";
import { menus, type MenusKey } from "../assets/data/menus";
import type GameContext from "../core/GameContext";
import type { MenuData } from "../types/MenuData";
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
        data.elements.forEach(b => {
            this.elements.push(MenuElementsFactory(this.context, b));
        })
    }

    onEnter(): void {
        
    }
    onExit(): void {
        
    }
    render(ctx: CanvasRenderingContext2D): void {
        if (!this.background) return;
        ctx.drawImage(this.background, 0, 0, this.context.settingsManager.data.resolution.width, this.context.settingsManager.data.resolution.height);
        this.elements.forEach(e => e.render(ctx));
    }
    update(deltaTime: number): void {
        const input = this.context.inputManager;
        this.elements.forEach(e => {
            if (e.getRect().collide(input.getMouseRect())) {
                e.hover();
                if (input.isMouseDown() && !input.isMouseConsumed()) {
                    input.consumeMouse();
                    e.interact();
                }
            };
        });
    }
}