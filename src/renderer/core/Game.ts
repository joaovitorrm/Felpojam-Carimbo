import SceneManager from "./SceneManager";

export default class Game {

    private sceneManager: SceneManager = SceneManager.instance;

    public constructor() {
        this.sceneManager.setCurrentScene('startScreen');
    }

    render(ctx: CanvasRenderingContext2D) {
        this.sceneManager.render(ctx);
    }

    update(deltaTime: number) {
        this.sceneManager.update(deltaTime);
    }
}