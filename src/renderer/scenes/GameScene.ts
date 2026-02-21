import { levels, type LevelsKey } from "../assets/data/levels";
import type GameContext from "../core/GameContext";
import InteractiveArea from "../entities/base/InteractiveArea";
import type NPC from "../entities/base/NPC";
import Prop from "../entities/base/Prop";
import type { LevelData } from "../types/LevelData";
import { SceneType } from "../types/SceneType";
import { Rect } from "../util/utils";

export default class GameScene extends SceneType {

    private background: HTMLImageElement | null = null;
    private npcs: NPC[] = [];
    private objects: Prop[] = [];
    private interactiveAreas: InteractiveArea[] = [];

    constructor(private context: GameContext, sceneId: LevelsKey) {
        super();
        const level = levels[sceneId];

        this.createBackground(level);
        this.createNPCs(level);
        this.createObjects(level);
        this.createInteractiveAreas(level);
    }

    private createBackground(data: LevelData): void {
        this.background =
            this.context.assetManager.get(data.background);
    }

    private createNPCs(data: LevelData): void {
        for (const npcData of data.npcs) {
            const npc = this.context.npcFactory.createNPC(npcData);
            this.npcs.push(npc);
        }
    }

    private createObjects(data: LevelData): void {
        for (const obj of data.objects) {
            const interaction = () => {
                switch (obj.interactType) {
                    case "dialog":
                        prop.toggleFocus();
                        break;
                    case "sceneChange":
                        this.context.eventBus.emit("scene:change", obj.next!);
                        break;
                }
            };

            const prop = new Prop(
                new Rect(obj.x, obj.y, obj.width, obj.height),
                this.context.assetManager.get(obj.sprite),
                obj.sprite_clip,
                interaction,
                () => { }
            );

            this.objects.push(prop);
        }
    }

    private createInteractiveAreas(data: LevelData): void {
        for (const area of data.interactiveAreas) {
            const interaction = () => {
                switch (area.interactType) {
                    case "sceneChange":
                        console.log(area.next);
                        this.context.eventBus.emit("scene:change", area.next!);
                        break;
                }
            };

            const ia = new InteractiveArea(
                new Rect(area.x, area.y, area.width, area.height),
                interaction,
                () => { }
            );

            this.interactiveAreas.push(ia);
        }
    }

    render(ctx: CanvasRenderingContext2D): void {
        if (!this.background) return;
        ctx.drawImage(this.background, 0, 0, ctx.canvas.width, ctx.canvas.height);
        [this.npcs, this.objects].forEach(elements => elements.forEach((e) => e.render(ctx)));
    }

    update(deltaTime: number): void {
        const input = this.context.inputManager;
        const inputRect = input.getMouseRect();

        [this.npcs, this.objects, this.interactiveAreas].forEach(entities => {
            entities.forEach((e) => {
                if (e.rect.collide(inputRect)) {
                    e.hover();
                    if (input.isMouseDown() && !input.isMouseConsumed()) {
                        input.consumeMouse();
                        e.interact();
                    }
                }
            })
        });
    }

    onEnter(): void {

    }

    onExit(): void {

    }
}