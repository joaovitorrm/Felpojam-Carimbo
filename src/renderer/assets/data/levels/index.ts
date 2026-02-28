import { entrada_daniel_aberto } from "./entrada_daniel_aberto";
import { entrada_daniel_fechado } from "./entrada_daniel_fechado";
import { quadro_pistas } from "./quadro_pistas";
import { quarto_daniel } from "./quarto_daniel";
import { reportagem } from "./reportagem";
import { sala_daniel } from "./sala_daniel";

export const levels = {
    quadro_pistas,    
    quarto_daniel,    
    reportagem,
    entrada_daniel_aberto,
    entrada_daniel_fechado,
    sala_daniel
} as const;

export type LevelsKey = keyof typeof levels;