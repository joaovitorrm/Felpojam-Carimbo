import { dialogues } from "../assets/data/dialogues";
import DialogState from "./DialogState";
import type GameContext from "./GameContext";

export default class WorldState {

    private npcStates: Record<string, { dialogStage: number, state: DialogState}> = {};

    constructor(private context: GameContext) {
        context.eventBus.on("world:dialog:next", () => this.advanceNpcDialog(context.dialogSystem.getActiveNpcId()!));
    }

    getNpcState(id: string) {
        if (!this.npcStates[id]) {
            this.npcStates[id] = {dialogStage: 0, state: new DialogState()};
        }
        return this.npcStates[id];
    }

    advanceNpcDialog(id: string) {
        this.getNpcState(id).dialogStage++;

        if (dialogues[id as keyof typeof dialogues][this.getNpcState(id).dialogStage] === undefined) {
            this.getNpcState(id).dialogStage--;
            this.context.eventBus.emit("ui:dialog:close");
        } else {
            this.context.eventBus.emit("ui:dialog:show", {npcId: id, stage: this.getNpcState(id).dialogStage});
        }        
    }
}