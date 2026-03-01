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
import portaQuartoDanielSala from "./porta_quarto_daniel_sala.png";
import portaQuartoPais from "./porta_quarto_pais.png";
import pcPais from "./pc_pais.png";
import pcDaniel from "./pc_daniel.png";
import retrato from "./retrato.png";
import portaQuartoDaniel from "./porta_quarto_daniel.png";
import mesaDaniel from "./mesa_daniel.png";
import usuarioSeita from "./usuario_seita.png";
import senhaComputadorSeita from "./senha.png";
import dicaComputadorSeita from "./dica.png";
import portaCasaBrancaSeita from "./casa_branca_seita_entrada.png";
import escadaria from "./escadaria.png";
import ferretes from "./ferretes_salao.png";
import livroSeita from "./livro_salao.png";

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
    portaQuartoDanielSala,
    pcDaniel,
    retrato,
    portaQuartoPais,
    pcPais,
    mesaDaniel,
    usuarioSeita,
    senhaComputadorSeita,
    dicaComputadorSeita,
    portaCasaBrancaSeita,
    escadaria,
    ferretes,
    livroSeita,
} as const

export type ObjectAssetsKey = keyof typeof objects;