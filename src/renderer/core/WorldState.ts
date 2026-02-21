export default class WorldState {

    private npcStates: Record<string, {
        dialogStage: number;
        flags: Record<string, boolean>;
    }> = {};

    getNpcState(id: string) {
        if (!this.npcStates[id]) {
            this.npcStates[id] = {
                dialogStage: 0,
                flags: {}
            };
        }
        return this.npcStates[id];
    }

    advanceNpcDialog(id: string) {
        this.getNpcState(id).dialogStage++;
    }
}