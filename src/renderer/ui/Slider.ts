import type InputManager from "../core/InputManager";
import { Rect } from "../util/utils";
import { UiElement } from "./UiElement";

export default class Slider extends UiElement {

    private sliderDotRect: Rect;

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
        private interact: Function,
        private hover: Function
    ) {
        console.log(min, max)
        super(rect);

        this.setValue(this.value);
        this.sliderDotRect = new Rect(rect.x, rect.y, sliderSize, sliderSize);
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.fillStyle = this.backgroundColor;
        ctx.roundRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height, this.borderRadius);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = this.sliderBackgroundColor;
        ctx.roundRect(this.sliderDotRect.x + (this.value * this.rect.width) - (this.sliderSize / 2), this.sliderDotRect.y - (this.sliderSize / 2 - this.rect.height / 2), this.sliderSize, this.sliderSize, this.sliderBorderRadius);
        ctx.fill();
        ctx.closePath();
    }

    update(input: InputManager): void {
        super.update(input);

        if (this.hovered) {
            this.hover();
            if (input.isMouseDown()) {
                this.value = Math.round((input.getMouseRect().x - this.rect.x) / this.rect.width * (this.max - this.min)) / (this.max - this.min);
            }
            console.log(this.getValue());
        }

    }

    setValue(realValue: number) {
        const clamped = Math.max(this.min, Math.min(this.max, realValue));
        this.value = (clamped - this.min) / (this.max - this.min);
    }

    getValue(): number {
        return this.min + this.value * (this.max - this.min);
    }
}