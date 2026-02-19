import { guardDialog } from "./npc_guard";
import { merchantDialog } from "./npc_merchant";

export const dialogues = {
    guardDialog,
    merchantDialog
} as const;

export type DialoguesKey = keyof typeof dialogues;