import type InputManager from "../core/InputManager";
import type { ObjectDataType } from "../types/LevelData";

import { Rect } from "../util/utils";
import { UiElement } from "./UiElement";

export default class InteractionPanel extends UiElement {

    private object: ObjectDataType | Rect | null = null;
    private sprite: HTMLImageElement | null = null;
    private objectRect: Rect = new Rect(0, 0, 0, 0);
    private visible: boolean = false;

    constructor(
        rect: Rect,
        private padding: number,
        public interact: Function = () => { },
        public hover: Function = () => { }
    ) {
        super(rect);
    }

    setObject(sprite: HTMLImageElement, obj: ObjectDataType | Rect): void {

        this.object = obj;
        this.sprite = sprite;

        const maxObjectSide = Math.max(this.object.width, this.object.height);
        const maxPanelSide = Math.min(this.rect.width, this.rect.height);

        const scale = maxPanelSide / maxObjectSide;

        this.objectRect.width = this.object.width * scale;
        this.objectRect.height = this.object.height * scale;

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
        this.interact = func;
    }

    setHover(func: Function): void {
        this.hover = func;
    }

    render(ctx: CanvasRenderingContext2D): void {
        if (!this.visible) return;

        let clip : [number, number, number, number] | null = null;

        if (this.object instanceof Rect) {
            clip = [0, 0, this.object.width, this.object.height];
        } else {
            clip = this.object!.sprite_clip;
        }

        ctx.drawImage(
            this.sprite!,
            ...clip!,
            this.rect.x + ((this.rect.width - this.objectRect.width) / 2) + this.padding,
            this.rect.y + ((this.rect.height - this.objectRect.height) / 2) + this.padding,
            this.objectRect.width - this.padding * 2,
            this.objectRect.height - this.padding * 2);
    }

    update(input: InputManager) : void {
        if (!this.visible) return;
        
        super.update(input);

        if (this.hovered) {
            this.hover();
            if (input.isMouseDown() && !input.isMouseConsumed()) {
                input.consumeMouse();
                this.interact();
            }
        } 
    }
}