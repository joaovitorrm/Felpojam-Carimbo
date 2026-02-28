import entrada_daniel_fechado from "./entrada_daniel_fechado.png";
import entrada_daniel_aberto from "./entrada_daniel_aberto.png";
import quadro_pistas from "./quadro_pistas.png";
import quarto_daniel from "./quarto_daniel.png";
import reportagem from "./reportagem.png";
import sala_daniel from "./sala_daniel.png";
import main_menu from "./main_menu.png";

export const scenarios = {    
    quadro_pistas,    
    quarto_daniel,
    sala_daniel,
    reportagem,
    entrada_daniel_fechado,
    entrada_daniel_aberto,
    main_menu
} as const;

export type ScenarioAssetsKey = keyof typeof scenarios; 