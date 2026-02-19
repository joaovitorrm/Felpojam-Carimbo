import type { DialogState } from "../core/DialogState";

export type DialogOption = {
    text: string;
    next: string;
    condition?: (state: DialogState) => boolean;
    action?: (state: DialogState) => void;
};

export type DialogNode = {
    speaker?: string;
    text: string;
    next?: string;
    options?: DialogOption[];
    condition?: (state: DialogState) => boolean;
    action?: (state: DialogState) => void;
};

export type DialogTree = Record<string, DialogNode>;
