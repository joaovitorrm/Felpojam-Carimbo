import type { ObjectData } from "../types/LevelData";
import { Rect } from "../util/utils";
import { UiElement } from "./UiElement";

export default class InteractionPanel extends UiElement {

    private object: ObjectData | null = null;
    private sprite: HTMLImageElement | null = null;
    private objectRect: Rect = new Rect(0, 0, 0, 0);
    private visible: boolean = false;

    constructor(
        rect: Rect,
        private padding: number,
        private interaction: Function = () => { },
        private handleHover: Function = () => { }
    ) {
        super(rect);
    }

    setObject(obj: ObjectData, sprite: HTMLImageElement): void {
        this.object = obj;
        this.sprite = sprite;

        const maxObjectSide = Math.max(obj.width, obj.height);
        const maxPanelSide = Math.min(this.rect.width, this.rect.height);

        const scale = maxPanelSide / maxObjectSide;

        this.objectRect.width = obj.width * scale;
        this.objectRect.height = obj.height * scale;

        this.setVisible(true);
    }

    setVisible(visible: boolean): void {
        this.visible = visible;
    }

    toggleVisible(): void {
        this.visible = !this.visible;
    }

    getIsVisible(): boolean {
        return this.visible;
    }

    setInteraction(func: Function): void {
        this.interaction = func;
    }

    setHover(func: Function): void {
        this.handleHover = func;
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(
            this.sprite!,
            ...this.object!.sprite_clip as [number, number, number, number],
            this.rect.x + ((this.rect.width - this.objectRect.width) / 2) + this.padding,
            this.rect.y + ((this.rect.height - this.objectRect.height) / 2) + this.padding,
            this.objectRect.width - this.padding * 2,
            this.objectRect.height - this.padding * 2);
    }
    interact(): void {
        this.interaction();
    }
    hover(): void {
        this.handleHover()
    }
}