import type { DialogCommand } from "../types/DialogTypes";
import type { ObjectData } from "../types/LevelData";
import type { SceneType } from "../types/SceneType";
import { DialogBox } from "../ui/DialogBox";
import DialogOptionButton from "../ui/DialogOptionButton";
import GameHud from "../ui/HUD/GameHud";
import InteractionPanel from "../ui/InteractionPanel";
import type { UiElement } from "../ui/UiElement";
import { Rect } from "../util/utils";
import type GameContext from "./GameContext";

export default class UiManager {

    private elements: UiElement[] = [];
    private choiceButtons: DialogOptionButton[] = [];
    private dialogBox: DialogBox;
    private interactingObject: InteractionPanel;
    private gameHud: GameHud;

    constructor(private context: GameContext) {

        this.dialogBox = new DialogBox(
            new Rect(20, 500, this.context.settingsManager.data.resolution.width - 40, this.context.settingsManager.data.resolution.height - 520),
            () => context.eventBus.emit("dialog:continue")
        );

        this.gameHud = new GameHud(context);

        this.interactingObject = new InteractionPanel(
            new Rect(0, 0, this.context.settingsManager.data.resolution.width,
                this.context.settingsManager.data.resolution.height), 40
        );

        this.registerEvents();
    }

    private registerEvents() {
        this.context.eventBus.on("dialog:started", () => {
            this.context.eventBus.emit("scene:setPause", true);
            this.dialogBox.show();
        });
        this.context.eventBus.on("dialog:ended", () => {
            this.context.eventBus.emit("scene:setPause", false);
            this.dialogBox.hide();
            this.interactingObject.interact();
        });
        this.context.eventBus.on("dialog:say", (cmd: DialogCommand) => {
            this.handleDialog(cmd);
        });
        this.context.eventBus.on("dialog:choice", (cmd: DialogCommand) => {
            this.handleChoices(cmd);
        });

        this.context.eventBus.on("ui:object:interact", (obj: ObjectData) => {
            this.interactingObject.setObject(obj, this.context.assetManager.get(obj.sprite))
            this.context.eventBus.emit("dialog:object:interact", obj.propId);
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

        const fontSize = 24;
        const ctx = document.createElement("canvas").getContext("2d")!;
        ctx.font = `${fontSize}px Arial`;

        cmd.options.forEach((opt, i) => {

            const textWidth = ctx.measureText(opt.text).width + 25;

            const btn = new DialogOptionButton(
                new Rect(
                    this.context.settingsManager.data.resolution.width/2 - textWidth/2, 
                    this.dialogBox.getRect().y - 60 - (i * 60), 
                    textWidth, 
                    50),
                opt.text,
                fontSize,
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
        
        if (this.dialogBox.getIsVisible() || this.interactingObject.getIsVisible()) {
            if (this.choiceButtons.length > 0) {
                for (const b of this.choiceButtons) {
                    b.setIsHovering(false);
                    if (input.getMouseRect().collide(b.getRect())) {
                        b.setIsHovering(true);
                        if (input.isMouseDown() && !input.isMouseConsumed()) {
                            input.consumeMouse();
                            b.interact();
                        }
                    }
                }
            } else if (this.dialogBox.getIsVisible() && input.isMouseDown() && !input.isMouseConsumed()) {
                input.consumeMouse();
                this.dialogBox.interact();
                if (!this.dialogBox.getIsVisible()) {
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
