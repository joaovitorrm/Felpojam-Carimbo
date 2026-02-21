import { Rect } from "../../util/utils";
import { UiElement } from "../UiElement";

export default class GameHud extends UiElement{

    constructor(screenWidth: number, screenHeight: number) {
        super(new Rect(0, 0, screenWidth, screenHeight));
    }

    hover(): void {
        
    }
    interact(): void {
        
    }
    render(ctx: CanvasRenderingContext2D): void {
        
    }
}