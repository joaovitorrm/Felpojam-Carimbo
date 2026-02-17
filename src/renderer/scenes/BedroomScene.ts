import { AssetManager } from "../core/AssetManager";
import { Scene } from "../core/Scene";

export default class BedroomScene extends Scene {

    private background: HTMLImageElement = AssetManager.instance.get('bedroom');

    render(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.background, 0, 0, ctx.canvas.width, ctx.canvas.height);
    }

    update(deltaTime: number): void {
        
    }

    onEnter(): void {
        
    }

    onExit(): void {
        
    }
}