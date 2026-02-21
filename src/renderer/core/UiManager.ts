import { dialogues, type DialoguesKey } from "../assets/data/dialogues";
import type { DialogNode } from "../types/DialogTypes";
import type { SceneType } from "../types/SceneType";
import { DialogBox } from "../ui/DialogBox";
import GameHud from "../ui/HUD/GameHud";
import type { UiElement } from "../ui/UiElement";
import { Rect } from "../util/utils";
import type GameContext from "./GameContext";

export default class UiManager {
    private elements: UiElement[] = [];
    private dialogBox: DialogBox;
    private gameHud: GameHud;

    constructor(private context: GameContext) {
        this.dialogBox = new DialogBox(
            new Rect(40, 400, 1200, 300),
            () => context.eventBus.emit("world:dialog:next")
        );

        this.gameHud = new GameHud(context.settingsManager.data.resolution.width, context.settingsManager.data.resolution.height);

        context.eventBus.on("ui:dialog:show", ({npcId, stage} : {npcId: DialoguesKey, stage: number}) => {
            this.handleDialog(dialogues[npcId][stage]);
        });

        context.eventBus.on("ui:dialog:close", () => {
            this.dialogBox.hide();
            context.eventBus.emit("dialog:npc:clear");
        })
    }

    private handleDialog = (dialogData: DialogNode) => {
        this.dialogBox.show(dialogData.text, dialogData.speaker ?? "");
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

        const input = this.context.inputManager;

        if (input.isMouseDown() && !input.isMouseConsumed() && this.dialogBox.getIsVisible()) {
            if (input.getMouseRect().collide(this.dialogBox.getRect())) {
                input.consumeMouse();
                this.dialogBox.interact();
            } else {
                this.dialogBox.hide();
                this.context.eventBus.emit("npc:clear");
            }
        }
    }

    render(ctx: CanvasRenderingContext2D, scene: SceneType | null) {

        if (scene && scene.showHud()) {

        }

        for (const e of this.elements) {
            e.render(ctx);
        }
        this.dialogBox.render(ctx);
        const input = this.context.inputManager.getMouseRect();
        ctx.fillRect(input.x, input.y, 5, 5)
    }
}
