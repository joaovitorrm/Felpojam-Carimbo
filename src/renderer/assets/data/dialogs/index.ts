import { bad_endings } from "./bad_endings";
import { Daniel } from "./daniel";
import { Protagonista } from "./protagonista";

export const dialogues = {
    Protagonista,
    Daniel,
    bad_endings
} as const;

export type NPCId = keyof typeof dialogues;