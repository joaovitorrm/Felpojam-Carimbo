/* import DialogSystem from "../systems/DialogueSystem";
import type { Interaction } from "./Interaction";

// TIPO DE INTERAÇÃO QUE INICIA UM DIALOGO

export default class DialogInteraction implements Interaction {

    constructor(public dialog: string, public stage: string) {}
    interact(): void {
        DialogSystem.instance.startDialog(this.dialog, this.stage);
    }
    hover(): void {
        throw new Error("Method not implemented.");
    }
} */