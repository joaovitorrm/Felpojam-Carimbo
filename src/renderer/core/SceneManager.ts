import type { SceneType } from "../types/SceneType";
import { SceneFactory, type Scenes } from "../world/factories/SceneFactory";
import type GameContext from "./GameContext";

// CLASSE QUE LIDA COM AS TELAS DO JOGO, LIDANDO COM TROCA DE TELAS E GERENCIAMENTO

export default class SceneManager {

    private currentScene: SceneType | null = null;

    private loadedScenes: Map<string, SceneType> = new Map();

    constructor(private context: GameContext) {
        context.eventBus.on("scene:change", (scene: Scenes) => {
            this.setCurrentScene(scene)
        })
    }

    public setCurrentScene(scene: Scenes) {
        if (this.currentScene) {
            this.currentScene.onExit();
        }

        if (!this.loadedScenes.has(scene)) {
            this.loadedScenes.set(scene, SceneFactory[scene](this.context));            
        }
        
        this.currentScene = this.loadedScenes.get(scene)!;

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