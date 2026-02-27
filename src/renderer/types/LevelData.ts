import type { NPCId } from "../assets/data/npcs";
import type { LevelsKey } from "../assets/data/levels";
import type { CharacterAssetsKey } from "../assets/images/characters";
import type { ObjectAssetsKey } from "../assets/images/objects";
import type { ScenarioAssetsKey } from "../assets/images/scenarios";
import type { InteractionType } from "./InteractionData";
import type { PropsKey } from "../assets/data/props";
import type { SoundsKey } from "../assets/sounds";
import type { AudioCategory, PlayOptions } from "../core/AudioManager";

export type LevelData = {
    id: string;
    background: ScenarioAssetsKey;
    npcs: NPCData[];
    objects: ObjectData[];
    interactiveAreas: InteractiveArea[];
    onEnter?: LevelCommand[];
    onExit?: LevelCommand[]
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
    id: string;
    sprite: ObjectAssetsKey;
    sprite_clip: [number, number, number, number];
    x: number;
    y: number;
    width: number;
    height: number;
    interactType: LevelCommand;
    next?: LevelsKey
}

export type InteractiveArea = {
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
    interactType: LevelCommand;
}

export type LevelCommand = 
{ type: "say", text: string, speaker: string } |
{ type: "dialog"; target: string; npcId: NPCId } |
{ type: "jump"; target: string } |
{ type: "sceneChange"; next: LevelsKey } |
{ type: "setFlag"; key: string; value: boolean } |
{ type: "if"; condition: string; then: string; else?: string } |
{ type: "sound"; sound: SoundsKey; category: AudioCategory; options?: PlayOptions } |
{ type: "stopSound"; sound: SoundsKey } |
{ type: "fadeOut"; seconds: number } |
{ type: "fadeIn"; seconds: number } |
{ type: "hold"; seconds: number } |
{ type: "collect"; target: PropsKey }