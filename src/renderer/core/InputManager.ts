import { Rect } from "../util/utils";

// CLASSE QUE LIDA COM AS INFORMAÇÕES DE INPUT DO USUÁRIO

export default class InputManager {

    private keys: Map<string, boolean> = new Map();

    private mouse: { 
        x: number, 
        y: number, 
        consumed: boolean, 
        isDown: boolean} = 
        { x: 0, y: 0, consumed: false, isDown: false };
    

    constructor() {}

    public onKeyDown(key: string) {
        this.keys.set(key, true);
    }

    public onKeyUp(key: string) {
        this.keys.set(key, false);
    }

    public isKeyDown(key: string): boolean {
        return this.keys.get(key) || false;
    }

    public isKeyUp(key: string): boolean {
        return !this.keys.get(key) || false;
    }

    public onMouseMove(e: PointerEvent, canvas: HTMLCanvasElement) {
        const canvasRect = canvas.getBoundingClientRect();
        this.mouse.x = e.clientX - canvasRect.left;
        this.mouse.y = e.clientY - canvasRect.top;
    }

    public getMousePosition() {
        return { x: this.mouse.x, y: this.mouse.y };
    }

    public getMouseRect() {
        return new Rect(this.mouse.x, this.mouse.y, 1, 1);
    }

    public isMouseDown() {
        return this.mouse.isDown;
    }

    public isMouseConsumed() {
        return this.mouse.consumed;
    }

    public isMouseUp() {
        return !this.mouse.isDown;
    }

    public onMouseDown() {
        this.mouse.isDown = true;
    }

    public onMouseUp() {
        this.mouse.isDown = false;
        this.mouse.consumed = false;
    }

    public consumeMouse() {
        if (this.mouse.isDown && !this.mouse.consumed)
            this.mouse.consumed = true;
    }

    public clear() {
        this.keys.clear();
    }


}