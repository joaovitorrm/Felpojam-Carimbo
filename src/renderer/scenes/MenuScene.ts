import { MenuButtonsFactory, MenuLabelsFactory } from "../world/factories/MenuElementsFactory";
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
        data.buttons.forEach(b => {
            this.elements.push(MenuButtonsFactory(this.context, b));
        })
        data.labels.forEach(l => {
            this.elements.push(MenuLabelsFactory(l));
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
    update(): void {
        const input = this.context.inputManager;
        this.elements.forEach(e => e.update(input));
    }
}