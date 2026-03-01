import { bad_endings } from "./bad_endings";
import { Daniel } from "./daniel";
import { Marcos } from "./marcos";
import { Protagonista } from "./protagonista";

export const dialogues = {
    Marcos,
    Protagonista,
    Daniel,
    bad_endings
} as const;

export type NPCId = keyof typeof dialogues;