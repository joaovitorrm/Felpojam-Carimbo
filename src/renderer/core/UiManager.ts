import { DialogBox } from "../ui/DialogBox";
import type { UiElement } from "../ui/UiElement";
import InputManager from "./InputManager";

// CLASSE QUE LIDA COM AS INFORMAÇÕES QUE APARECEM POR CIMA DA CENA
// SENDO CAIXAS DE TEXTO, MENSAGENS DE HOVER, ETC

export class UiManager {

    private uiElements: UiElement[] = [];

    private static _instance: UiManager;

    private constructor() {
        this.uiElements.push(new DialogBox(90, 500, 1100, 200, 30, "white", "hsla(0, 0%, 6%, 0.9)"));
    }

    public static get instance(): UiManager {
        if (!this._instance) {
            this._instance = new UiManager();
        }
        return this._instance;
    }

    public render(ctx: CanvasRenderingContext2D): void {
        for (const uiElement of this.uiElements) {
            uiElement.render(ctx);
        }
    }

    public update(input: InputManager): void {
        for (const uiElement of this.uiElements) {
            uiElement.update(input);
        }
    }
}