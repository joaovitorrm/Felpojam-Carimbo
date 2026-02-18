import { dialogs } from "../assets/data/dialogues/dialogs";

// SISTEMA DE DIALOGO

interface DialogType {
    [key: string]: {
        [key: string]: {
            player?: string;
            npc?: string;
            next?: string;
            options?: { text: string; next: string }[];
        }
    }
}

export default class DialogSystem {

    private isActive: boolean = false;

    public currentDialog: string = "";
    private currentStage: string = "";

    private static _instance: DialogSystem | null = null;

    private constructor() {}

    public static get instance(): DialogSystem {
        if (!this._instance) {
            this._instance = new DialogSystem();
        }
        return this._instance;
    }

    public startDialog(dialogName: string, dialogStage: string) {
        this.currentDialog = dialogName;
        this.currentStage = dialogStage;
        this.isActive = true;
    }

    public getIsActive(): boolean {
        return this.isActive;
    }
}