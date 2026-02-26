import type { SceneType } from "../types/SceneType";
import { SceneFactory, type Scenes } from "../world/factories/SceneFactory";
import type GameContext from "./GameContext";

// CLASSE QUE LIDA COM AS TELAS DO JOGO, LIDANDO COM TROCA DE TELAS E GERENCIAMENTO

export default class SceneManager {

    private currentScene: SceneType[] = [];
    private loadedScenes: Map<string, SceneType> = new Map();
    private isPaused : boolean = false;

    constructor(private context: GameContext) {
        context.eventBus.on("scene:change", (scene: Scenes) => {
            this.changeScene(scene);
        })

        context.eventBus.on("scene:push", (scene: Scenes) => {
            context.eventBus.emit("dialog:stopped");
            context.eventBus.emit("audio:pauseAll");
            this.pushScene(scene);
        })

        context.eventBus.on("scene:pop", () => {
            this.popScene();
            if (this.currentScene.length === 1) {
                context.eventBus.emit("dialog:unstop");
                context.eventBus.emit("audio:unpauseAll");
            };
        })

        context.eventBus.on("scene:setPause", (val: boolean) => {
            this.isPaused = val;
        })
    }

    public setCurrentScene(scene: Scenes) {
        if (this.currentScene.at(-1) !== undefined) {
            this.currentScene.at(-1)!.onExit();
        }
        if (!this.loadedScenes.has(scene)) {
            this.loadedScenes.set(scene, SceneFactory[scene](this.context));            
        }
        this.loadedScenes.get(scene)!.onEnter();
    }

    public changeScene(scene: Scenes) {
        if (!this.loadedScenes.has(scene)) {
            this.setCurrentScene(scene);
        }
        this.currentScene = [this.loadedScenes.get(scene)!];
    }

    public pushScene(scene: Scenes) {
        if (!this.loadedScenes.has(scene)) {
            this.setCurrentScene(scene);
        }
        this.currentScene.push(this.loadedScenes.get(scene)!);
    }

    public popScene(): void {
        this.currentScene.pop();
    }

    public getCurrentScene(): SceneType | null {
        return this.currentScene.at(-1) ?? null;
    }

    public update(deltaTime: number) {
        if (this.currentScene && !this.isPaused) {
            this.currentScene.at(-1)?.update(deltaTime, this.context.inputManager);
        }
    }

    public render(ctx: CanvasRenderingContext2D) {
        if (this.currentScene) {
            this.currentScene.at(-1)?.render(ctx);
        }
    }
}