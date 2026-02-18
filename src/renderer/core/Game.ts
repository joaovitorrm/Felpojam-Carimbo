import InputManager from "./InputManager";
import SceneManager from "./SceneManager";
import { UiManager } from "./UiManager";

// CLASSE GAME QUE RODA AS CLASSES PRINCIPAIS

export default class Game {

    private sceneManager: SceneManager = SceneManager.instance;
    private uiManager: UiManager = UiManager.instance;

    public constructor() {
        this.sceneManager.setCurrentScene('startScreen');
    }

    render(ctx: CanvasRenderingContext2D) {
        this.sceneManager.render(ctx);
        this.uiManager.render(ctx);
    }

    update(deltaTime: number) {

        const input = InputManager.instance;

        this.sceneManager.update(deltaTime, input);
        this.uiManager.update(input);
    }
}