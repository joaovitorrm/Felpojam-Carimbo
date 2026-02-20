import { danielDialog } from "./npc_daniel";
import { guardDialog } from "./npc_guard";
import { merchantDialog } from "./npc_merchant";

export const dialogues = {
    guardDialog,
    merchantDialog,
    danielDialog
} as const;

export type DialoguesKey = keyof typeof dialogues;