//import { danielDialog } from "./npc_daniel";
//import { guardDialog } from "./npc_guard";
import { Daniel } from "./daniel";
import { Marcos } from "./marcos";
import { Protagonista } from "./protagonista";
//import { merchantDialog } from "./npc_merchant";

export const dialogues = {
    Marcos,
    Protagonista,
    Daniel
} as const;

export type NPCId = keyof typeof dialogues;