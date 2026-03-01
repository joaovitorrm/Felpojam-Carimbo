import { bad_endings } from "./bad_endings";
import { computador_pais } from "./computador_pais";
import { computador_pais_seita } from "./computador_seita";
import { emails } from "./emails";
import { entrada_daniel_aberto } from "./entrada_daniel_aberto";
import { entrada_daniel_fechado } from "./entrada_daniel_fechado";
import { quadro_pistas } from "./quadro_pistas";
import { quarto_daniel } from "./quarto_daniel";
import { quarto_pais_daniel } from "./quarto_pais_daniel";
import { reportagem } from "./reportagem";
import { sala_daniel } from "./sala_daniel";

export const levels = {
    quadro_pistas,    
    quarto_daniel,    
    reportagem,
    entrada_daniel_aberto,
    entrada_daniel_fechado,
    sala_daniel,
    quarto_pais_daniel,
    computador_pais,
    computador_pais_seita,
    bad_endings,
    emails
} as const;

export type LevelsKey = keyof typeof levels;