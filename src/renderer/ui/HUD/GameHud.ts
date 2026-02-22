import type GameContext from "../../core/GameContext";
import { Rect } from "../../util/utils";
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
            () => {
                context.eventBus.emit("scene:push", "OptionsMenu");
            }
        )

        this.elements.push(configButton);
    }

    hover(): void {
        
    }
    update(): void {
        const input = this.context.inputManager;

        for (const e of this.elements) {
            if (e.getRect().collide(input.getMouseRect())) {
                e.hover();
                if (input.isMouseDown() && !input.isMouseConsumed()) {
                    input.consumeMouse();
                    e.interact();
                }
            }
        }
    }
    interact(): void {
        
    }
    render(ctx: CanvasRenderingContext2D): void {
        this.elements.forEach(e => e.render(ctx));
    }
}