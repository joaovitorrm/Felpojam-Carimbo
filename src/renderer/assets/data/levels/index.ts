import { escadaria } from "./escadaria";
import { bad_endings } from "./bad_endings";
import { cafeteria } from "./cafeteria";
import { cafeteria_daniel } from "./cafeteria_daniel";
import { casa_branca } from "./casa_branca";
import { casa_branca_interior_aberto } from "./casa_branca_interior_aberto";
import { casa_branca_interior_fechada } from "./casa_branca_interior_fechada";
import { computador_pais } from "./computador_pais";
import { computador_pais_seita } from "./computador_seita";
import { computador_pais_seita_dica } from "./computador_seita_dica";
import { salao } from "./salao";
import { emails } from "./emails";
import { entrada_daniel_aberto } from "./entrada_daniel_aberto";
import { entrada_daniel_fechado } from "./entrada_daniel_fechado";
import { quadro_pistas } from "./quadro_pistas";
import { quarto_daniel } from "./quarto_daniel";
import { quarto_pais_daniel } from "./quarto_pais_daniel";
import { reportagem } from "./reportagem";
import { sala_daniel } from "./sala_daniel";
import { ataque_surpresa } from "./ataque_surpresa";
import { daniel_canivete } from "./daniel_canivete";
import { marcos_ferretes } from "./marcos_ferretes";
import { good_ending } from "./good_ending";

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
    computador_pais_seita_dica,
    bad_endings,
    emails,
    cafeteria,
    cafeteria_daniel,
    casa_branca,
    casa_branca_interior_fechada,
    casa_branca_interior_aberto,
    escadaria,
    salao,
    ataque_surpresa,
    daniel_canivete,
    marcos_ferretes,
    good_ending,
} as const;

export type LevelsKey = keyof typeof levels;