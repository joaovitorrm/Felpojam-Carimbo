import type GameContext from "../core/GameContext";

export default class DialogSystem {

    constructor(private ctx: GameContext) {
        this.ctx.eventBus.on("npc:interact", (npcId : string) => this.handleNpcInteract({ npcId }));
    }

    private handleNpcInteract = ({ npcId }: { npcId: string }) => {

        const state = this.ctx.worldState.getNpcState(npcId);

        const dialogId = this.resolveDialog(npcId, state.dialogStage);

        this.ctx.eventBus.emit("dialog:start", {
            ...dialogId
        });
    };

    private resolveDialog(npcId: string, stage: number) {
        // lógica para escolher diálogo correto
        return {npcId, stage};
    }
}