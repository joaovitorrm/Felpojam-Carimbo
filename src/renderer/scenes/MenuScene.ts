import { SceneType } from "../types/SceneType";
import { menus, type MenusKey } from "../assets/data/menus";
import type GameContext from "../core/GameContext";
import type { MenuData } from "../types/MenuData";
import type { UiElement } from "../ui/UiElement";
import type InteractiveArea from "../entities/base/InteractiveArea";
import MenuElementsFactory from "../world/factories/MenuElementsFactory";

export default class MenuScene extends SceneType {

    private elements : UiElement[] = [];
    private background : HTMLImageElement | null = null;
    private interactiveAreas: InteractiveArea[] = [];

    constructor(private context: GameContext, menuKey: MenusKey) {
        super();

        const data = menus[menuKey];

        this.createBackground(data);
        this.createObjects(data);
        this.createInteractiveAreas(data);
    }

    private createBackground(data: MenuData) : void {
        this.background = this.context.assetManager.get(data.background);
    }

    private createInteractiveAreas(data: MenuData) : void {
        data.interactiveAreas.forEach(i => {
            this.interactiveAreas.push(MenuElementsFactory.createInteractiveArea(this.context, i));
        })
    }

    private createObjects(data: MenuData) : void {
        data.buttons.forEach(b => {
            this.elements.push(MenuElementsFactory.createButton(this.context, b));
        })
        data.labels.forEach(l => {
            this.elements.push(MenuElementsFactory.createLabel(l));
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
        //this.interactiveAreas.forEach(e => e.render(ctx));
    }
    update(): void {
        const input = this.context.inputManager;
        this.elements.forEach(e => e.update(input));
        this.interactiveAreas.forEach(e => e.update(input));
    }
}