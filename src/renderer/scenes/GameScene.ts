import { levels, type LevelsKey } from "../assets/data/levels";
import type GameContext from "../core/GameContext";
import InteractiveArea from "../entities/base/InteractiveArea";
import type NPC from "../entities/base/NPC";
import Prop from "../entities/base/Prop";
import type { LevelData, ObjectDataType } from "../types/LevelData";
import { SceneType } from "../types/SceneType";
import LevelFactory from "../world/factories/LevelFactory";

export default class GameScene extends SceneType {

    override showHud(): boolean { return true; }

    private background: HTMLImageElement | null = null;
    private npcs: NPC[] = [];
    private objects: Prop[] = [];
    private interactiveAreas: InteractiveArea[] = [];
    private onEnterFunctions: {func: Function, once: boolean}[] = [];
    private onExitFunctions: {func: Function, once: boolean}[] = [];

    constructor(private context: GameContext, sceneId: LevelsKey) {
        super();

        const level = levels[sceneId];

        this.createInteractiveAreas(level);
        this.createBackground(level);
        this.createObjects(level);
        this.handleOnExit(level);
        this.handleOnEnter(level);
        this.createNPCs(level);

        context.eventBus.on("scene:object:collect", (object: string) => this.handleObjectCollected(object));
        context.eventBus.on("ui&scene:object:interact", (data: { obj: ObjectDataType }) => this.setObjectIsVisible(false, data.obj.id));
        context.eventBus.on("scene:object:interacted", () => this.setObjectIsVisible(true));
    }

    private setObjectIsVisible(visible: boolean, obj?: string): void {
        if (obj === undefined) this.objects.forEach((o) => o.setVisible(visible));
        else this.objects.forEach((o) => { if (o.id === obj) o.setVisible(visible) });
    }

    private handleObjectCollected(obj: string): void {
        this.objects = this.objects.filter((o) => o.id !== obj);
    }

    private createBackground(data: LevelData): void {
        this.background =
            this.context.assetManager.get(data.background);
    }

    private createNPCs(data: LevelData): void {
        for (const npcData of data.npcs) {
            const npc = LevelFactory.createNPC(this.context, npcData);
            this.npcs.push(npc);
        }
    }

    private createObjects(data: LevelData): void {
        for (const obj of data.objects) {
            const prop = LevelFactory.createObject(this.context, obj);
            this.objects.push(prop);
        }
    }

    private createInteractiveAreas(data: LevelData): void {
        for (const area of data.interactiveAreas) {
            const ia = LevelFactory.createInteractiveArea(this.context, area);
            this.interactiveAreas.push(ia);
        }
    }

    private handleOnEnter(data: LevelData): void {
        if (data.onEnter) {
            data.onEnter.forEach((command) => {
                const func = LevelFactory.createOnEnter(this.context, command)!;
                if (command.type === "fadeIn" || command.type === "fadeOut" || command.type === "hold") this.onEnterFunctions.push({func, once: command.firstTimeOnly ?? false});
                else this.onEnterFunctions.push({func, once: false});
            })
        }
    }

    private handleOnExit(data: LevelData) {
        if (data.onExit) {
            data.onExit.forEach((command) => {
                const func = LevelFactory.createOnEnter(this.context, command)!;
                if (command.type === "fadeIn" || command.type === "fadeOut" || command.type === "hold") this.onExitFunctions.push({func, once: command.firstTimeOnly ?? false});
                else this.onExitFunctions.push({func, once: false});
            })
        }
    }

    render(ctx: CanvasRenderingContext2D): void {
        if (!this.background) return;
        ctx.drawImage(this.background, 0, 0, this.context.settingsManager.data.resolution.width, this.context.settingsManager.data.resolution.height);        
        this.objects.forEach(e => e.render(ctx));
        this.npcs.forEach(e => e.render(ctx));
        
        //this.interactiveAreas.forEach(e => e.renderHitBox(ctx));
        //this.objects.forEach(e => e.renderHitBox(ctx));
        //this.npcs.forEach(e => e.renderHitBox(ctx));
    }

    update(): void {
        const input = this.context.inputManager;
        this.npcs.forEach((e) => e.update(input));
        this.objects.forEach((e) => e.update(input));
        this.interactiveAreas.forEach((e) => e.update(input));
    }

    async onEnter(): Promise<void> {
        for (const f of this.onEnterFunctions) {            
            await f.func();
            if (f.once) this.onEnterFunctions = this.onEnterFunctions.filter((e) => e !== f);
        };
    }

    async onExit(): Promise<void> {
        for (const f of this.onExitFunctions) {
            await f.func();
            if (f.once) this.onExitFunctions = this.onExitFunctions.filter((e) => e !== f);
        };
    }
}