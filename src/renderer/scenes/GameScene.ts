import { levels, type LevelsKey } from "../assets/data/levels/levels";
import type GameContext from "../core/GameContext";
import type NPC from "../entities/base/NPC";
import Prop from "../entities/base/Prop";
import type { LevelData } from "../types/LevelData";
import { SceneType } from "../types/SceneType";
import { Rect } from "../util/utils";

export default class GameScene extends SceneType {

    private background: HTMLImageElement | null = null;
    private npcs: NPC[] = [];
    private objects: Prop[] = [];

    constructor(private context: GameContext, sceneId: LevelsKey) {
        super();
        const level = levels[sceneId];

        this.createBackground(level);
        this.createNPCs(level);
        this.createObjects(level);
    }

    private createBackground(data: LevelData) {
        this.background =
            this.context.assetManager.get(data.background);
    }

    private createNPCs(data: LevelData) {
        for (const npcData of data.npcs) {
            const npc = this.context.npcFactory.createNPC(npcData);
            this.npcs.push(npc);
        }
    }

    private createObjects(data: LevelData) {
        for (const obj of data.objects) {

            const prop = new Prop(
                new Rect(obj.x, obj.y, obj.width, obj.height),
                obj.sprite ? this.context.assetManager.get(obj.sprite) : null,
                obj.sprite_clip ? obj.sprite_clip : null,
            )

            switch (obj.interactType) {
                case "dialog":
                    prop.setInteraction(() => prop.toggleFocus());
                    break;
                case "sceneChange":
                    prop.setInteraction(() => this.context.eventBus.emit("scene:change", obj.next!));
                    break;
            }

            this.objects.push(prop);
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

        [this.npcs, this.objects].forEach(entities => {
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