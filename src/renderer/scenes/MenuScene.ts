import { SceneType } from "../types/SceneType";
import { menus, type MenusKey } from "../assets/data/menus";
import type GameContext from "../core/GameContext";
import type { MenuData } from "../types/MenuData";
import type { UiElement } from "../ui/UiElement";
import type InteractiveArea from "../entities/base/InteractiveArea";
import MenuElementsFactory from "../world/factories/MenuElementsFactory";
import Slider from "../ui/Slider";

export default class MenuScene extends SceneType {

    private elements : {id: string, element: UiElement}[] = [];
    private background : HTMLImageElement | null = null;
    private interactiveAreas: InteractiveArea[] = [];

    constructor(private context: GameContext, menuKey: MenusKey) {
        super();

        const data = menus[menuKey];

        this.createBackground(data);
        this.createObjects(data);
        this.createInteractiveAreas(data);
        this.registerEvents();
    }

    private registerEvents() : void {
        this.context.eventBus.on("slider:change", (id: string) => {
            switch (id) {
                case "textSpeed": {
                    const btn = this.elements.find(e => e.id === id);
                    if (!btn) return;
                    if (btn.element instanceof Slider) {
                        this.context.settingsManager.update({ textSpeed: btn.element.getValue() });
                    }
                    break;
                }
            }
        })
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
            this.elements.push({id: b.id, element: MenuElementsFactory.createButton(this.context, b)});
        })
        data.labels.forEach(l => {
            this.elements.push({id: l.id, element: MenuElementsFactory.createLabel(l)});
        })
    }

    onEnter(): void {
        this.elements.forEach(e => {
            if (e.id === "textSpeed") {
                const btn = e.element as Slider;
                btn.setValue(this.context.settingsManager.data.textSpeed);
            }
        })
    }
    onExit(): void {
        
    }
    
    render(ctx: CanvasRenderingContext2D): void {
        if (!this.background) return;
        ctx.drawImage(this.background, 0, 0, this.context.settingsManager.data.resolution.width, this.context.settingsManager.data.resolution.height);
        this.elements.forEach(e => e.element.render(ctx));
        //this.interactiveAreas.forEach(e => e.render(ctx));
    }
    update(): void {
        const input = this.context.inputManager;
        this.elements.forEach(e => e.element.update(input));
        this.interactiveAreas.forEach(e => e.update(input));
    }
}