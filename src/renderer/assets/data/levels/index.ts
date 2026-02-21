import { bedroom } from "./bedroom";
import { outside_house } from "./outside_house";
import { quadro_de_pistas } from "./quadro_pistas";

export const levels = {
    bedroom,
    quadro_de_pistas,
    outside_house,
} as const;

export type LevelsKey = keyof typeof levels;