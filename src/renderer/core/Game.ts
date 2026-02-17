import SceneManager from "./SceneManager";
import { UiManager } from "./UiManager";

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
        this.sceneManager.update(deltaTime);
        this.uiManager.update(deltaTime);
    }
}