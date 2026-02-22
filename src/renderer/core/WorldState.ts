import { dialogues } from "../assets/data/npcs";
import type { DialogScript } from "../types/DialogTypes";

export default class WorldState {

    private npcStates: Record<string, { node: string, script: DialogScript}> = {};

    getNpcState(id: string) : { node: string, script: DialogScript } {
        if (!this.npcStates[id]) {
            const dialog = dialogues[id as keyof typeof dialogues];
            this.npcStates[id] = { node : dialog.entry, script: dialog };
        }
        return this.npcStates[id];
    }

    advanceNpcDialog(id: string, target: string) : void {
        this.npcStates[id].node = target;
    }
}