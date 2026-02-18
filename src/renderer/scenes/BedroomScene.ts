import { Scene } from "../core/Scene";
import type Level from "../world/Level";
import { LevelLoader } from "../world/LevelLoader";
import bedroom from "../assets/data/levels/bedroom.json";
import type { LevelData } from "../types/LevelData";

const level = bedroom as LevelData;

// CENA DO QUARTO

export default class BedroomScene extends Scene {

    private level: Level;

    constructor() {
        super();
        this.level = LevelLoader.load(level);
    }

    render(ctx: CanvasRenderingContext2D): void {
        this.level.render(ctx);
    }

    update(deltaTime: number): void {
        this.level.update(deltaTime);
    }

    onEnter(): void {
        
    }

    onExit(): void {
        
    }
}