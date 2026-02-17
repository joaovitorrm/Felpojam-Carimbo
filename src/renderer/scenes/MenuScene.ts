import { AssetManager } from "../core/AssetManager";
import { Scene } from "../core/Scene";
import SceneManager from "../core/SceneManager";
import type { Entity } from "../entities/base/Entity";
import Door from "../entities/props/Door";

export default class StartScreen extends Scene {

    backgroundImage: HTMLImageElement = AssetManager.instance.get("start") as HTMLImageElement;

    interactables: Entity[] = [];

    constructor() {
        super();

        const door = new Door(100, 50, 100, 150, AssetManager.instance.get("door"), () => {
            console.log("D");
            SceneManager.instance.setCurrentScene("bedroom");
        })

        this.interactables.push(door);
    }

    render(ctx: CanvasRenderingContext2D) : void {
        ctx.drawImage(this.backgroundImage, 0, 0, ctx.canvas.width, ctx.canvas.height);
        this.interactables.forEach(interactable => interactable.render(ctx));
    }

    update(deltaTime: number): void {
        this.interactables.forEach(interactable => interactable.update(deltaTime));
    }    

    onEnter(): void {
        
    }

    onExit(): void {
        
    }
}