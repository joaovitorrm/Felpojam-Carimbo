import { sala_de_estar } from "./sala_de_estar";
import { outside_house } from "./outside_house";
import { quadro_de_pistas } from "./quadro_pistas";
import { sala_daniel } from "./sala_daniel";
import { quarto_daniel } from "./quarto_daniel";

export const levels = {
    sala_de_estar,
    quadro_de_pistas,
    outside_house,
    sala_daniel,
    quarto_daniel
} as const;

export type LevelsKey = keyof typeof levels;