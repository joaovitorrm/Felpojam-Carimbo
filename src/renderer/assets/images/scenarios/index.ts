import frente_casa_daniel from "./frente_casa_daniel.png";
import quadro_de_pistas from "./quadro_de_pistas.png";
import quarto_dos_pais from "./quarto_dos_pais.png";
import sala_casa_daniel from "./sala_casa_daniel.png";
import computador from "./computador.png";
import quarto_daniel from "./quarto_daniel.png";
import sala_daniel from "./sala_daniel.png";

export const scenarios = {
    frente_casa_daniel,
    quadro_de_pistas,
    quarto_dos_pais,
    sala_casa_daniel,
    quarto_daniel,
    sala_daniel,
    computador
} as const;

export type ScenarioAssetsKey = keyof typeof scenarios;