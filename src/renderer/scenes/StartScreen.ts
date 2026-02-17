import { AssetManager } from "../core/AssetManager";
import { Scene } from "../core/Scene";

export default class StartScreen extends Scene {

    backgroundImage: HTMLImageElement;

    constructor() {
        super();

        const assetManager = AssetManager.instance;

        this.backgroundImage = assetManager.get("startScreen") as HTMLImageElement;
    }

    render(ctx: CanvasRenderingContext2D) : void {
        ctx.drawImage(this.backgroundImage, 0, 0, ctx.canvas.width, ctx.canvas.height);
    }

    update(deltaTime: number): void {
        
    }

    onEnter(): void {
        
    }

    onExit(): void {
        
    }
}