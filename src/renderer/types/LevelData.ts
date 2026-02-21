import type { dialogues, DialoguesKey } from "../assets/data/dialogues";
import type { LevelsKey } from "../assets/data/levels";
import type { CharacterAssetsKey } from "../assets/images/characters";
import type { ObjectAssetsKey } from "../assets/images/objects";
import type { ScenarioAssetsKey } from "../assets/images/scenarios";

export type LevelData = {
    id: string;
    background: ScenarioAssetsKey;
    npcs: NPCData[];
    objects: ObjectData[];
    interactiveAreas: InteractiveArea[];
}

export type NPCData = {
    id: string;
    sprite: CharacterAssetsKey;
    sprite_clip: [number, number, number, number];
    x: number;
    y: number;
    width: number;
    height: number;
    dialogId: DialoguesKey;
}

export type ObjectData = {
    id: string;
    sprite: ObjectAssetsKey;
    sprite_clip: [number, number, number, number];
    x: number;
    y: number;
    width: number;
    height: number;
    interactType: "dialog" | "sceneChange";
    next?: LevelsKey
}

export type InteractiveArea = {
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
    interactType: "sceneChange";
    next?: LevelsKey
}