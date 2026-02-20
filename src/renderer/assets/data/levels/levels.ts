import { bedroom } from "./bedroom";
import { quadro_de_pistas } from "./quadro_pistas";

export const levels = {
    bedroom,
    quadro_de_pistas
} as const;

export type LevelsKey = keyof typeof levels;