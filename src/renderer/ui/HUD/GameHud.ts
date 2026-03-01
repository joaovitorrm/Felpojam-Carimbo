import type GameContext from "../../core/GameContext";
import { Rect } from "../../util/utils";
import { InteractionFactory } from "../../world/factories/InteractionFactory";
import { Button } from "../Button";
import { UiElement } from "../UiElement";

export default class GameHud extends UiElement{

    private elements : UiElement[] = [];

    constructor(private context: GameContext) {
        super(new Rect(0, 0, context.settingsManager.data.resolution.width, context.settingsManager.data.resolution.height));

        const configButton = new Button(
            new Rect(0, 0, 50, 50),
            "⚙",
            40,
            "white",
            "transparent",
            "middle",
            "center",
            0,
            InteractionFactory.create(context, { type: "pushScene", next: "OptionsMenu" })
        )

        this.elements.push(configButton);
    }

    hover(): void {
        
    }
    update(): void {
        const input = this.context.inputManager;
        this.elements.forEach(e => e.update(input));
    }
    interact(): void {
        
    }
    render(ctx: CanvasRenderingContext2D): void {
        this.elements.forEach(e => e.render(ctx));
    }
}