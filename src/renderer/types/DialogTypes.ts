import type DialogState from "../core/DialogState";


export type DialogOption = {
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

export type DialogTree = Record<number, DialogNode>;
