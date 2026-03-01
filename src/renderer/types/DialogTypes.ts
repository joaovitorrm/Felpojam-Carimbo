/* export type DialogOption = {
    text: string;
    next: number;
    condition?: (state: DialogState) => boolean;
    action?: (state: DialogState) => void;
};

export type DialogNode = {
    speaker?: string;
    text: string;
    next?: number;
    options?: DialogOption[];
    condition?: (state: DialogState) => boolean;
    action?: (state: DialogState) => void;
};

export type DialogTree = Record<number, DialogNode>; */

import type { LevelsKey } from "../assets/data/levels";
import type { MenusKey } from "../assets/data/menus";
import type { SoundsKey } from "../assets/sounds";
import type { AudioCategory, PlayOptions } from "../core/AudioManager";

export type DialogCommand =
  | { type: "say"; speaker: string; text: string }
  | { type: "choice"; options: DialogChoice[] }
  | { type: "jump"; target: string }
  | { type: "setFlag"; key: string }
  | { type: "if"; condition: string; then: string; else?: string }
  | { type: "sceneChange"; next: LevelsKey | MenusKey }
  | { type: "collect"; key: string }
  | { type: "sound"; sound: SoundsKey; category: AudioCategory; options?: PlayOptions }
  | { type: "stopSound"; sound: SoundsKey }

export type DialogChoice = {
  text: string;
  jump: string;
  condition?: string;
}

export type DialogScript = {
  entry: string;
  nodes: Record<string, DialogCommand[]>;
}