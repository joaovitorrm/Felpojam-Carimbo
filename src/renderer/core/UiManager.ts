import type { DialogCommand } from "../types/DialogTypes";
import type { ObjectData } from "../types/LevelData";
import type { SceneType } from "../types/SceneType";
import { DialogBox } from "../ui/DialogBox";
import DialogOptionButton from "../ui/DialogOptionButton";
import FadeOverlay from "../ui/FadeOverlay";
import GameHud from "../ui/HUD/GameHud";
import InteractionPanel from "../ui/InteractionPanel";
import { Label } from "../ui/Label";
import type { UiElement } from "../ui/UiElement";
import { Rect } from "../util/utils";
import type GameContext from "./GameContext";

export default class UiManager {

    private elements: UiElement[] = [];
    private choiceButtons: DialogOptionButton[] = [];
    private dialogBox: DialogBox;
    private interactingObject: InteractionPanel;
    private gameHud: GameHud;
    private fadeOverlay: FadeOverlay;
    private posLabel: Label;

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

        this.fadeOverlay = new FadeOverlay(this.context.settingsManager.data.resolution.width, this.context.settingsManager.data.resolution.height);

        this.posLabel = new Label(new Rect(0, 0, 0, 0), "", "white", 20, "left", "top");

        this.registerEvents();
    }

    private registerEvents() {
        this.context.eventBus.on("dialog:started", () => {
            this.context.eventBus.emit("scene:setPause", true);
            this.dialogBox.show();
        });

        this.context.eventBus.on("dialog:stopped", () => {
            this.context.eventBus.emit("scene:setPause", false);
            this.dialogBox.hide();
        });

        this.context.eventBus.on("dialog:unstop", () => {            
            if (this.dialogBox.hasText()) {
                this.context.eventBus.emit("scene:setPause", true);
                this.dialogBox.show();
            }
        });

        this.context.eventBus.on("dialog:ended", () => {
            this.context.eventBus.emit("scene:setPause", false);
            this.dialogBox.hide();
            this.dialogBox.clearText();
            if (this.interactingObject.getIsVisible()) {
                this.context.eventBus.emit("ui:object:interacted");
                this.interactingObject.setVisible(false);
            }            
        });
        this.context.eventBus.on("dialog:say", (cmd: DialogCommand) => {
            this.handleDialog(cmd);
        });
        this.context.eventBus.on("dialog:choice", (cmd: DialogCommand) => {
            this.handleChoices(cmd);
        });

        this.context.eventBus.on("fade:in", (duration: number) => {
            return this.fadeOverlay.fadeIn(duration);
        });
        this.context.eventBus.on("fade:out", (duration: number) => {
            return this.fadeOverlay.fadeOut(duration);
        });
        this.context.eventBus.on("fade:hold", (seconds: number) => {
            return this.fadeOverlay.hold(seconds);
        });

        this.context.eventBus.on("ui:object:interact", (data: {obj: ObjectData, npcId?: string, target?: string}) => {
            this.interactingObject.setObject(data.obj, this.context.assetManager.get(data.obj.sprite))
            this.context.eventBus.emit("dialog:object:interact", {npcId: data.npcId, target: data.target});
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
                    this.context.settingsManager.data.resolution.width / 2 - textWidth / 2,
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

        const input = this.context.inputManager;

        this.elements.forEach(e => e.update(input));

        if (scene && scene.showHud()) {
            this.gameHud.update();
        }

        this.choiceButtons.forEach(b => b.update(input));

        this.dialogBox.update(input, dt);
        
        this.interactingObject.update(input);

        this.fadeOverlay.update(dt);

        this.posLabel.setText(`(${input.getMousePosition().x.toFixed(1)}, ${input.getMousePosition().y.toFixed(1)})`);

        this.posLabel.setRect(new Rect(input.getMousePosition().x - 40, input.getMousePosition().y - 20, 80, 0));
    }

    render(ctx: CanvasRenderingContext2D, scene: SceneType | null) {

        if (scene && scene.showHud()) {
            this.gameHud.render(ctx);
        }

        this.elements.forEach(e => e.render(ctx));

        this.interactingObject.render(ctx);

        this.dialogBox.render(ctx);

        this.choiceButtons.forEach(b => b.render(ctx));

        this.fadeOverlay.render(ctx);

        const input = this.context.inputManager.getMouseRect();
        ctx.fillRect(input.x, input.y, 5, 5);

        this.posLabel.render(ctx);
    }
}
