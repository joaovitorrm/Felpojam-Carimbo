import type { LevelsKey } from "../assets/data/levels/levels";
import { MainMenu } from "../assets/data/menus/MainMenu";
import type { MenusKey } from "../assets/data/menus/menus";
import GameScene from "../scenes/GameScene";
import MainMenuScene from "../scenes/MainMenuScene";
import type { SceneType } from "../types/SceneType";
import type GameContext from "./GameContext";

// CLASSE QUE LIDA COM AS TELAS DO JOGO, LIDANDO COM TROCA DE TELAS E GERENCIAMENTO

const SceneFactory: Record<
    LevelsKey | MenusKey,
    (context: GameContext) => SceneType
> = {
    bedroom: (context: GameContext) => new GameScene(context, "bedroom"),
    MainMenu: (context: GameContext) => new MainMenuScene(context, "MainMenu"),
    quadro_de_pistas: (context: GameContext) => new GameScene(context, "quadro_de_pistas")
}

export default class SceneManager {

    private currentScene: SceneType | null = null;

    private loadedScenes: Map<string, SceneType> = new Map();

    constructor(private context: GameContext) {
        context.eventBus.on("scene:change", (scene: "startGame" | "options" | "exits") => {
            switch (scene) {
                case "startGame":
                    this.setCurrentScene("bedroom");
                    break;
                case "options":
                    break;
                case "exits":
                    break;
            }
        })
    }

    public setCurrentScene(scene: LevelsKey | MenusKey) {
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