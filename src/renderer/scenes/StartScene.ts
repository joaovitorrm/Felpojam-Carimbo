import { Scene } from "../core/Scene";

import StartSceneData from "../assets/data/ui/start_screen.json"
import type { UiElement } from "../ui/UiElement";
import { Button } from "../ui/Button";
import SceneManager from "../core/SceneManager";
import type InputManager from "../core/InputManager";
import { AssetManager } from "../core/AssetManager";
import type { AssetKey } from "../assets/assets";

interface ButtonsData {
    id: string;
    text: string;
    x: number;
    y: number;
    action: string;
}

export default class StartScreen extends Scene {

    private elements: UiElement[] = [];
    private background: HTMLImageElement;

    constructor() {
        super();

        this.background = AssetManager.instance.get(StartSceneData["background"] as AssetKey);
        this.createButtons(StartSceneData["buttons"] as ButtonsData[]);
    }

    createButtons(data: ButtonsData[]): void {
        for (const b of data) {

            switch (b.action) {
                case "startGame": {
                    this.elements.push(
                        new Button(b.x, b.y, 160, 80, b.text, 24, "hsl(0, 0%, 6%)", "hsl(0, 0%, 90%)", () => {
                            SceneManager.instance.setCurrentScene("bedroom");
                        }, "middle", "center")
                    )
                    break;
                }
                default: {
                    this.elements.push(
                        new Button(b.x, b.y, 120, 80, b.text, 24, "hsl(0, 0%, 6%)", "hsl(0, 0%, 90%)", () => {})
                    )
                    break;
                }
            }
        }
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.background, 0, 0, ctx.canvas.width, ctx.canvas.height);
        this.elements.forEach(el => el.render(ctx));
    }

    update(deltaTime: number, input: InputManager): void {
        this.elements.forEach(el => el.update(input));
    }

    onEnter(): void {

    }

    onExit(): void {

    }
}