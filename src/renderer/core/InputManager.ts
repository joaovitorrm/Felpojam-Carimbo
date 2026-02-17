import { Rect } from "../util/utils";

export default class InputManager {

    private keys: Map<string, boolean> = new Map();

    private mouse: { 
        x: number, 
        y: number, 
        consumed: boolean, 
        isDown: boolean} = 
        { x: 0, y: 0, consumed: false, isDown: false };

    private static _instance: InputManager;
    public static get instance(): InputManager {
        if (!this._instance) {
            this._instance = new InputManager();
        }
        return this._instance;
    }

    private constructor() { }

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

    public onMouseMove(x: number, y: number) {
        this.mouse.x = x;
        this.mouse.y = y;
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