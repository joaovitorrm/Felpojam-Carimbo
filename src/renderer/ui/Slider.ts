import type InputManager from "../core/InputManager";
import type { Rect } from "../util/utils";
import { UiElement } from "./UiElement";

export default class Slider extends UiElement {

    constructor(
        rect: Rect,
        private backgroundColor: string,        
        private sliderBackgroundColor: string,

        private borderRadius: number,
        private sliderBorderRadius: number,
        private sliderSize: number,

        private value: number,
        private min: number,
        private max: number,
        private interaction: Function,
        private handleHover: Function
    ) {
        super(rect);
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.backgroundColor;
        ctx.roundRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height, this.borderRadius);        
        ctx.fill();

        ctx.fillStyle = this.sliderBackgroundColor;
        ctx.roundRect(this.rect.x + (this.value - this.value/this.rect.width) - this.sliderSize/2, this.rect.y, this.sliderSize, this.sliderSize, this.sliderBorderRadius);
        ctx.fill();
    }

    update(input: InputManager) : void {
        const inputRect = input.getMouseRect();
        if (inputRect.collide(this.rect) && input.isMouseDown() && !input.isMouseConsumed()) {
            this.value = (inputRect.x - this.rect.x) / this.rect.width;
        }
    }

    interact(): void {
        this.interaction();
    }

    hover(): void {
        this.handleHover();
    }

    getValue() : number {
        return this.value;
    }
}