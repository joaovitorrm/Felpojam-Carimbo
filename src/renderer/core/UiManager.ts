import type { DialogNode } from "../types/DialogTypes";
import { DialogBox } from "../ui/DialogBox";
import type { UiElement } from "../ui/UiElement";
import { Rect } from "../util/utils";
import type GameContext from "./GameContext";

export default class UiManager {
    private elements: UiElement[] = [];
    private dialogBox: DialogBox;

    constructor(private context: GameContext) {
        this.dialogBox = new DialogBox(new Rect(50, 800, 1000, 300));

        this.init();
    }

    init() {
        this.context.eventBus.on("dialog:start", this.handleDialog);
    }

    private handleDialog = (dialogData: DialogNode) => {
        console.log("A");
        this.dialogBox.show(dialogData.text);
    }

    add(element: UiElement) {
        this.elements.push(element);
    }

    remove(element: UiElement) {
        this.elements = this.elements.filter(e => e !== element);
    }

    update(dt: number) {
        for (const e of this.elements) {
            if (!e.update) return;
            e.update(dt);
        }
    }

    render(ctx: CanvasRenderingContext2D) {
        this.dialogBox.render(ctx);
        for (const e of this.elements) {
            e.render(ctx);
        }
    }
}
