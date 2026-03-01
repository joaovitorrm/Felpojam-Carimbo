import { levels } from "../assets/data/levels";
import { menus } from "../assets/data/menus";
import GameScene from "../scenes/GameScene";
import MenuScene from "../scenes/MenuScene";
import type { SceneType } from "../types/SceneType";
import type GameContext from "./GameContext";

// CLASSE QUE LIDA COM AS TELAS DO JOGO, LIDANDO COM TROCA DE TELAS E GERENCIAMENTO

type Scenes = keyof typeof levels | keyof typeof menus;

export default class SceneManager {

    private currentScene: SceneType[] = [];
    private loadedScenes: Map<string, SceneType> = new Map();
    private isPaused: boolean = false;
    private isPlayerPaused: boolean = false;
    private isChangingScene: boolean = false;

    constructor(private context: GameContext) {
        context.eventBus.on("scene:change", async (scene: Scenes) => {
            this.isChangingScene = true;
            await this.changeScene(scene);
            this.isChangingScene = false;
        });

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

        context.eventBus.on("scene:playerPause", (val: boolean) => {
            this.isPlayerPaused = val;
        })
    }

    public async changeScene(scene: Scenes) {

        const current = this.currentScene.at(-1);

        if (current) {            
            await current.onExit();
        }

        if (!this.loadedScenes.has(scene)) {
            this.createScene(scene);
        }

        const newScene = this.loadedScenes.get(scene)!;

        this.currentScene = [newScene];

        await newScene.onEnter();
    }

    private createScene(scene: Scenes): SceneType {
        let sceneType = levels[scene as keyof typeof levels] ?? menus[scene as keyof typeof menus];
        let newScene: SceneType;
        if (sceneType.type === "level") {
            newScene = new GameScene(this.context, scene as keyof typeof levels);
            this.loadedScenes.set(scene, newScene);
        } else {
            newScene = new MenuScene(this.context, scene as keyof typeof menus);
            this.loadedScenes.set(scene, newScene);
        }
        return newScene;
    }

    public async pushScene(scene: Scenes) {
        if (!this.loadedScenes.has(scene)) {
            this.createScene(scene);
        }

        const newScene = this.loadedScenes.get(scene)!;
        this.currentScene.push(newScene);
        await newScene.onEnter();
    }

    public async popScene(): Promise<void> {
        const top = this.currentScene.pop();

        if (top) {
            await top.onExit();
        }
    }

    public clear() {
        this.loadedScenes.clear();
    }

    public getCurrentScene(): SceneType | null {
        return this.currentScene.at(-1) ?? null;
    }

    public update(deltaTime: number) {
        if (this.currentScene && !this.isPaused && !this.isChangingScene && !this.isPlayerPaused) {
            this.currentScene.at(-1)?.update(deltaTime, this.context.inputManager);
        }
    }

    public render(ctx: CanvasRenderingContext2D) {
        if (this.currentScene) {
            this.currentScene.at(-1)?.render(ctx);
        }
    }
}