import type { NPCId } from "../assets/data/npcs";
import type { LevelsKey } from "../assets/data/levels";
import type { CharacterAssetsKey } from "../assets/images/characters";
import type { ObjectAssetsKey } from "../assets/images/objects";
import type { ScenarioAssetsKey } from "../assets/images/scenarios";
import type { InteractionType } from "./InteractionData";
import type { PropsKey } from "../assets/data/props";

export type LevelData = {
    id: string;
    background: ScenarioAssetsKey;
    npcs: NPCData[];
    objects: ObjectData[];
    interactiveAreas: InteractiveArea[];
    onEnter?: LevelCommand;
}

export type NPCData = {
    id: NPCId;
    sprite: CharacterAssetsKey;
    sprite_clip: [number, number, number, number];
    x: number;
    y: number;
    width: number;
    height: number;
}

export type ObjectData = {
    id: PropsKey;
    sprite: ObjectAssetsKey;
    sprite_clip: [number, number, number, number];
    x: number;
    y: number;
    width: number;
    height: number;
    interactType: InteractionType;
    next?: LevelsKey
}

export type InteractiveArea = {
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
    interactType: InteractionType;
    next?: LevelsKey;
}

export type LevelCommand = 
{ type: "say", target: PropsKey, speaker: string } |
{ type: "dialog"; target: string; npcId: NPCId } |
{ type: "jump"; target: string } |
{ type: "sceneChange"; next: LevelsKey } |
{ type: "setFlag"; key: string; value: boolean } | 
{ type: "if"; condition: string; then: string; else?: string }