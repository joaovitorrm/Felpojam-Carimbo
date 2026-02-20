import type { LevelsKey } from "../assets/data/levels/levels";
import GameScene from "../scenes/GameScene";
import type { SceneType } from "../types/SceneType";
import type GameContext from "./GameContext";

// CLASSE QUE LIDA COM AS TELAS DO JOGO, LIDANDO COM TROCA DE TELAS E GERENCIAMENTO



export default class SceneManager {

    private currentScene: SceneType | null = null;

    private loadedScenes: Map<string, SceneType> = new Map();

    constructor(private context: GameContext) {}

    public setCurrentScene(scene: LevelsKey) {
        if (this.currentScene) {
            this.currentScene.onExit();
        }

        if (this.loadedScenes.has(scene)) {
            this.currentScene = this.loadedScenes.get(scene)!;
        } else {
            this.currentScene = new GameScene(this.context, scene);
            this.loadedScenes.set(scene, this.currentScene);
        }

        if (this.currentScene) {
            this.currentScene.onEnter();
        }
    }

    public getCurrentScene(): SceneType | null {
        return this.currentScene;
    }

    public update(deltaTime: number) {
        if (this.currentScene) {
            this.currentScene.update(deltaTime, this.context.inputManager);
        }
    }

    public render(ctx: CanvasRenderingContext2D) {
        if (this.currentScene) {
            this.currentScene.render(ctx);
        }
    }
}