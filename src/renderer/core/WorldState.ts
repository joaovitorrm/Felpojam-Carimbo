import { dialogues } from "../assets/data/npcs";
import type { DialogScript } from "../types/DialogTypes";

export default class WorldState {

    private npcStates: Record<string, { node: string, script: DialogScript}> = {};

    getNpcState(id: string, target?: string) : { node: string, script: DialogScript } {
        if (!this.npcStates[id]) {
            const dialog = dialogues[id as keyof typeof dialogues];
            this.npcStates[id] = { node : dialog.entry, script: dialog };
        }
        return { node: target ?? this.npcStates[id].node, script: this.npcStates[id].script};
    }

    getPropState(id: string, target?: string) : { node: string, script: DialogScript } {
        const dialog = dialogues[id as keyof typeof dialogues];
        return { node: target ?? dialog.entry, script: dialog };
    }

    advanceNpcDialog(id: string, target: string) : void {
        this.npcStates[id].node = target;
    }
}