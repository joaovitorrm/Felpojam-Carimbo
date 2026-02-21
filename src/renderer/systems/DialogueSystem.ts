import type GameContext from "../core/GameContext";

export default class DialogSystem {

    private activeNpcId: string | null = null;

    constructor(private ctx: GameContext) {
        this.ctx.eventBus.on("dialog:npc:interact", (npcId : string) => this.handleNpcInteract({ npcId }));
        this.ctx.eventBus.on("dialog:npc:clear", () => this.clearActiveNpcId());
    }

    private handleNpcInteract = ({ npcId }: { npcId: string }) => {

        this.activeNpcId = npcId;

        const state = this.ctx.worldState.getNpcState(npcId);

        const dialogId = this.resolveDialog(npcId, state.dialogStage);

        this.ctx.eventBus.emit("ui:dialog:show", {
            ...dialogId
        });
    };

    private resolveDialog(npcId: string, stage: number) {
        // lógica para escolher diálogo correto
        return {npcId, stage};
    }

    public getActiveNpcId() { return this.activeNpcId; }

    public clearActiveNpcId() { this.activeNpcId = null; }
}