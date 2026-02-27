import { levels, type LevelsKey } from "../assets/data/levels";
import type GameContext from "../core/GameContext";
import InteractiveArea from "../entities/base/InteractiveArea";
import type NPC from "../entities/base/NPC";
import Prop from "../entities/base/Prop";
import type { LevelData } from "../types/LevelData";
import { SceneType } from "../types/SceneType";
import { Rect } from "../util/utils";
import { createInteractiveArea, createNPC, createObject, createOnEnter, createOnExit } from "../world/factories/LevelFactory";

export default class GameScene extends SceneType {

    override showHud(): boolean { return true; }

    private background: HTMLImageElement | null = null;
    private npcs: NPC[] = [];
    private objects: Prop[] = [];
    private interactiveAreas: InteractiveArea[] = [];
    private onEnterFunctions: Function[] = [];
    private onExitFunctions: Function[] = [];

    constructor(private context: GameContext, sceneId: LevelsKey) {
        super();

        const level = levels[sceneId];

        this.createInteractiveAreas(level);
        this.createBackground(level);
        this.createObjects(level);
        this.handleOnEnter(level);
        this.handleOnExit(level);
        this.createNPCs(level);

        context.eventBus.on("scene:object:collect", (obj: string) => this.handleObjectCollected(obj));
    }

    private handleObjectCollected(obj: string) : void {
        this.objects = this.objects.filter((o) => o.id !== obj);
    }

    private createBackground(data: LevelData): void {
        this.background =
            this.context.assetManager.get(data.background);
    }

    private createNPCs(data: LevelData): void {
        for (const npcData of data.npcs) {
            const npc = createNPC(this.context, npcData);
            this.npcs.push(npc);
        }
    }

    private createObjects(data: LevelData): void {
        for (const obj of data.objects) {
            const prop = createObject(this.context, obj);
            this.objects.push(prop);
        }
    }

    private createInteractiveAreas(data: LevelData): void {
        for (const area of data.interactiveAreas) {
            const ia = createInteractiveArea(this.context, area);
            this.interactiveAreas.push(ia);
        }
    }

    private handleOnEnter(data: LevelData): void {
        if (data.onEnter) {
            data.onEnter.forEach((command) => {
                const func = createOnEnter(this.context, command);
                if (func) this.onEnterFunctions.push(func);
            })

        }
    }

    private handleOnExit(data: LevelData) {
        if (data.onExit) {
            data.onExit.forEach((command) => {
                const func = createOnExit(this.context, command);
                if (func) this.onExitFunctions.push(func);
            })
        }
    }

    render(ctx: CanvasRenderingContext2D): void {
        if (!this.background) return;
        ctx.drawImage(this.background, 0, 0, this.context.settingsManager.data.resolution.width, this.context.settingsManager.data.resolution.height);
        this.npcs.forEach((e) => { e.render(ctx); /* e.renderHitBox(ctx) */});
        this.objects.forEach((e) => { if (!e.getIsInFocus()) e.render(ctx); /* e.renderHitBox(ctx) */ });
        //this.interactiveAreas.forEach((e) => e.render(ctx));
    }

    update(): void {
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

    async onEnter(): Promise<void> {
        for (const f of this.onEnterFunctions) await f();
    }

    async onExit(): Promise<void> {
        for (const f of this.onExitFunctions) await f();
    }
}