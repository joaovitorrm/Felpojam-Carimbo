import computador from "./computador.png";
import entrada_daniel from "./entrada_daniel.png";
import quadro_pistas from "./quadro_pistas.png";
import quarto_daniel from "./quarto_daniel.png";
import reportagem from "./reportagem.png";
import sala_daniel from "./sala_daniel.png";

export const scenarios = {    
    quadro_pistas,    
    quarto_daniel,
    sala_daniel,
    computador,
    reportagem,
    entrada_daniel
} as const;

export type ScenarioAssetsKey = keyof typeof scenarios; 