import type { AssetKey } from "../assets/assets"
import type { DialoguesKey } from "../assets/data/dialogues/dialogues";
import type { LevelsKey } from "../assets/data/levels/levels";

export type LevelData = {
    id: string;
    background: AssetKey;
    npcs: NPCData[];
    objects: ObjectData[];
}

export type NPCData = {
    id: string;
    sprite: AssetKey;
    sprite_clip: [number, number, number, number];
    x: number;
    y: number;
    width: number;
    height: number;
    dialogId: DialoguesKey;
}

export type ObjectData = {
    id: string;
    sprite?: AssetKey;
    sprite_clip?: [number, number, number, number];
    x: number;
    y: number;
    width: number;
    height: number;
    interactType: "dialog" | "sceneChange";
    next?: LevelsKey
}