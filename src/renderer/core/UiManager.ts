import type { DialogCommand } from "../types/DialogTypes";
import type { ObjectData } from "../types/LevelData";
import type { SceneType } from "../types/SceneType";
import { DialogBox } from "../ui/DialogBox";
import DialogOptionButton from "../ui/DialogOptionButton";
import GameHud from "../ui/HUD/GameHud";
import Panel from "../ui/Panel";
import type { UiElement } from "../ui/UiElement";
import { Rect } from "../util/utils";
import type GameContext from "./GameContext";

export default class UiManager {

    private elements: UiElement[] = [];
    private choiceButtons: DialogOptionButton[] = [];
    private dialogBox: DialogBox;
    private interactingObject: Panel;
    private gameHud: GameHud;

    constructor(private context: GameContext) {

        this.dialogBox = new DialogBox(
            new Rect(40, 500, 1200, 200),
            () => context.eventBus.emit("dialog:continue")
        );

        this.gameHud = new GameHud(context);

        this.interactingObject = new Panel(
            new Rect(50, 50, this.context.settingsManager.data.resolution.width - 100, 
            this.context.settingsManager.data.resolution.height - 100)
        );

        this.registerEvents();
    }

    private registerEvents() {
        this.context.eventBus.on("dialog:started", () => {
            this.dialogBox.show();
        });
        this.context.eventBus.on("dialog:ended", () => {
            this.dialogBox.hide();
        });
        this.context.eventBus.on("dialog:say", (cmd: DialogCommand) => {
            this.handleDialog(cmd);
        });
        this.context.eventBus.on("dialog:choice", (cmd: DialogCommand) => {
            this.handleChoices(cmd);
        });

        this.context.eventBus.on("ui:object:interact", (obj: ObjectData) => {
            this.interactingObject.setSprite(this.context.assetManager.get(obj.sprite), obj.sprite_clip);
            this.interactingObject.setVisible(true);
            this.context.eventBus.emit("dialog:object:interact", obj.id);
            this.interactingObject.setInteraction(() => {
                this.context.eventBus.emit("ui:object:interacted");
                this.interactingObject.setVisible(false);
                this.dialogBox.hide();
            });
        })
    }

    private handleDialog(cmd: DialogCommand): void {
        if (cmd.type !== "say") return;
        this.dialogBox.write(cmd.text, cmd.speaker);
    }

    public handleChoices(cmd: DialogCommand): void {
        if (cmd.type !== "choice") return;
        this.dialogBox.pause();
        this.createChoice(cmd);
    }

    private createChoice(cmd: DialogCommand): void {
        if (cmd.type !== "choice") return;
        cmd.options.forEach((opt, i) => {
            const btn = new DialogOptionButton(
                new Rect(50, 50 + (i * 60), 180, 50),
                opt.text,
                24,
                "black",
                "white",
                "middle",
                "center",
                () => {
                    this.context.eventBus.emit("dialog:jump", opt.jump);
                    this.choiceButtons = [];
                    this.dialogBox.unpause();
                }
            )
            this.choiceButtons.push(btn);
        })
    }

    add(element: UiElement) {
        this.elements.push(element);
    }

    remove(element: UiElement) {
        this.elements = this.elements.filter(e => e !== element);
    }

    update(dt: number, scene: SceneType | null) {
        for (const e of this.elements) {
            if (!e.update) return;
            e.update(dt);
        }

        this.dialogBox.update(dt);

        if (scene && scene.showHud()) {
            this.gameHud.update();
        }

        const input = this.context.inputManager;

        if (input.isMouseDown() && !input.isMouseConsumed()) {
            if (input.getMouseRect().collide(this.dialogBox.getRect())) {
                console.log("a");
                if (this.dialogBox.getIsVisible()) {
                    input.consumeMouse();
                    this.dialogBox.interact();
                }
            }
            else if (this.choiceButtons.length > 0) {
                for (const b of this.choiceButtons) {
                    if (input.getMouseRect().collide(b.getRect())) {
                        input.consumeMouse();
                        b.interact();
                    }
                }
            }
            else {
                this.dialogBox.hide();
            }

            if (this.interactingObject.getIsVisible()) {
                input.consumeMouse();
                if (input.getMouseRect().collide(this.interactingObject.getRect())) {
                    this.interactingObject.interact();
                }
            }
        }
    }

    render(ctx: CanvasRenderingContext2D, scene: SceneType | null) {

        if (scene && scene.showHud()) {
            this.gameHud.render(ctx);
        }

        this.elements.forEach(e => e.render(ctx));

        if (this.interactingObject.getIsVisible()) this.interactingObject.render(ctx);

        this.dialogBox.render(ctx);
        
        this.choiceButtons.forEach(b => b.render(ctx));

        const input = this.context.inputManager.getMouseRect();
        ctx.fillRect(input.x, input.y, 5, 5)
    }
}
