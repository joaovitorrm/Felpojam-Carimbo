import type { NPCId } from "../assets/data/npcs";
import type { LevelsKey } from "../assets/data/levels";
import type { CharacterAssetsKey } from "../assets/images/characters";
import type { ObjectAssetsKey } from "../assets/images/objects";
import type { ScenarioAssetsKey } from "../assets/images/scenarios";
import type { PropsKey } from "../assets/data/props";
import type { SoundsKey } from "../assets/sounds";
import type { AudioCategory, PlayOptions } from "../core/AudioManager";
import type { MenusKey } from "../assets/data/menus";

export type LevelData = {
    id: string;
    type: "level";
    background: ScenarioAssetsKey;
    npcs: NPCDataType[];
    objects: ObjectDataType[];
    interactiveAreas: InteractiveAreaType[];
    onEnter?: LevelCommandType[];
    onExit?: LevelCommandType[]
}

export type NPCDataType = {
    id: NPCId;
    sprite: CharacterAssetsKey;
    sprite_clip: [number, number, number, number];
    x: number;
    y: number;
    width: number;
    height: number;
}

export type ObjectDataType = {
    id: string;
    sprite: ObjectAssetsKey;
    sprite_clip: [number, number, number, number];
    x: number;
    y: number;
    width: number;
    height: number;
    interactType: LevelCommandType;
}

export type InteractiveAreaType = {
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
    interactType: LevelCommandType;
}

export type LevelCommandType = 
{ type: "say", text: string, speaker: string } |
{ type: "dialog"; target: string; npcId: NPCId } |
{ type: "jump"; target: string } |
{ type: "sceneChange"; next: LevelsKey | MenusKey } |
{ type: "setFlag"; key: string; value: boolean } |
{ type: "if"; condition: string; then: string; else?: string } |
{ type: "sound"; sound: SoundsKey; category: AudioCategory; options?: PlayOptions } |
{ type: "stopSound"; sound: SoundsKey } |
{ type: "fadeOut"; seconds: number } |
{ type: "fadeIn"; seconds: number } |
{ type: "hold"; seconds: number, alpha?: number } |
{ type: "collect"; target: PropsKey } | 
{ type: "pushScene"; next: MenusKey } |
{ type: "popScene" } |
{ type: "quitGame" }