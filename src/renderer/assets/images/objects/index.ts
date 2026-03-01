import fotografia from "./fotografia.png";
import calendario from "./calendario.png";
import envelope from "./envelope.png";
import olivia from "./olivia.png";
import clarissa from "./clarissa.png";
import bernardo from "./bernardo.png";
import vinicius from "./vinicius.png";
import simboloBernardo from "./simbolo_bernardo.png";
import simboloClarissa from "./simbolo_clarissa.png";
import simboloOlivia from "./simbolo_olivia.png";
import simboloVinicius from "./simbolo_vinicius.png";
import simboloDaniel from "./simbolo_daniel.png";
import chave from "./chave.png";
import calendarioParede from "./calendario_parede.png";
import portaEntradaSala from "./porta_entrada_sala.png";
import portaQuartoDaniel from "./porta_quarto_daniel.png";
import portaQuartoPais from "./porta_quarto_pais.png";
import pcPais from "./pc_pais.png";

export const objects = {
    fotografia,
    calendario,
    envelope,
    olivia,
    clarissa,
    bernardo,
    vinicius,
    simboloBernardo,
    simboloClarissa,
    simboloOlivia,
    simboloVinicius,
    simboloDaniel,
    chave,
    calendarioParede,
    portaEntradaSala,
    portaQuartoDaniel,
    portaQuartoPais,
    pcPais
} as const

export type ObjectAssetsKey = keyof typeof objects;