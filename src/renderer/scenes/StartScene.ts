import { AssetManager } from "../core/AssetManager";
import InputManager from "../core/InputManager";
import { Scene } from "../core/Scene";
import SceneManager from "../core/SceneManager";
import type { InteractiveObject } from "../entities/base/InteractiveObjects";
import Door from "../entities/objects/Door";

export default class StartScreen extends Scene {

    backgroundImage: HTMLImageElement = AssetManager.instance.get("start") as HTMLImageElement;

    interactables: InteractiveObject[] = [];

    constructor() {
        super();

        const door = new Door(100, 50, 100, 150, AssetManager.instance.get("door"), () => {
            SceneManager.instance.setCurrentScene("bedroom");
        })

        this.interactables.push(door);
    }

    render(ctx: CanvasRenderingContext2D) : void {
        ctx.drawImage(this.backgroundImage, 0, 0, ctx.canvas.width, ctx.canvas.height);

        this.interactables.forEach(interactable => interactable.render(ctx));
    }

    update(deltaTime: number): void {
        this.interactables.forEach(interactable => {
            interactable.update(deltaTime);

            const input = InputManager.instance;

            if (input.getMouseRect().collide(interactable.rect)) {
                interactable.hover();
                if (input.isMouseDown()) {
                    input.consumeMouse();
                    interactable.interact();
                }
            }
        });
    }    

    onEnter(): void {
        
    }

    onExit(): void {
        
    }
}