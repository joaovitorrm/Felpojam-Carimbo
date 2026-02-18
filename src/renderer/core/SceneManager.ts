import type { Scene } from "./Scene";
import { scenes } from "../scenes/Scenes";
import type InputManager from "./InputManager";

// CLASSE QUE LIDA COM AS TELAS DO JOGO, LIDANDO COM TROCA DE TELAS E GERENCIAMENTO

export default class SceneManager {

    private static _instance: SceneManager;

    private currentScene: Scene | null = null;

    private loadedScenes: Map<keyof typeof scenes, Scene> = new Map();

    private constructor() { }

    public static get instance(): SceneManager {
        if (!this._instance) {
            this._instance = new SceneManager();
        }
        return this._instance;
    }

    public setCurrentScene(scene: keyof typeof scenes) {
        if (this.currentScene) {
            this.currentScene.onExit();
        }

        if (this.loadedScenes.has(scene)) {
            this.currentScene = this.loadedScenes.get(scene)!;
        } else {
            this.currentScene = new scenes[scene]();
            this.loadedScenes.set(scene, this.currentScene);
        }

        if (this.currentScene) {
            this.currentScene.onEnter();
        }
    }

    public getCurrentScene(): Scene | null {
        return this.currentScene;
    }

    public update(deltaTime: number, input: InputManager) {
        if (this.currentScene) {
            this.currentScene.update(deltaTime, input);
        }
    }

    public render(ctx: CanvasRenderingContext2D) {
        if (this.currentScene) {
            this.currentScene.render(ctx);
        }
    }
}