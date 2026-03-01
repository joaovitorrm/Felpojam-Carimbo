import entrada_daniel_fechado from "./entrada_daniel_fechado.png";
import entrada_daniel_aberto from "./entrada_daniel_aberto.png";
import quadro_pistas from "./quadro_pistas.png";
import quarto_daniel from "./quarto_daniel.png";
import reportagem from "./reportagem.png";
import sala_daniel from "./sala_daniel.png";
import main_menu from "./main_menu.png";
import cafeteria from "./cafeteria2.png";
import casa_seita_aberta from "./casa_seita_aberta.png";
import casa_seita_fechada from "./casa_seita_fechada.png";
import dogtag from "./doggtag.png";
import email from "./e-mail.png";
import homem from "./homem.png";
import passagem_escadaria from "./passagem_escadaria.png";
import pc_pais_pai from "./pc_pais_pai.png";
import pc_pais_seita from "./pc_pais_seita_sem_dica.png";
import pc_pais_seita_dica from "./pc_pais_seita.png";
import quarto_pais_daniel from "./quarto_pais_daniel.png";
import salao_seita from "./salao_seita.png";
import opcoes from "./opcoes.png";
import cafeteria_daniel from "./cafeteria.png";
import canivete from "./canivete.png";
import marcos_ferretes from "./marcos_ferrolho.png";
import good_ending from "./good_ending.png";

export const scenarios = {    
    quadro_pistas,    
    quarto_daniel,
    sala_daniel,
    reportagem,
    entrada_daniel_fechado,
    entrada_daniel_aberto,
    main_menu,
    cafeteria,
    cafeteria_daniel,
    casa_seita_aberta,
    casa_seita_fechada,
    dogtag,
    email,
    homem,
    passagem_escadaria,
    pc_pais_pai,
    pc_pais_seita,
    quarto_pais_daniel,
    salao_seita,
    pc_pais_seita_dica,
    opcoes,
    canivete,
    marcos_ferretes,
    good_ending,
} as const;

export type ScenarioAssetsKey = keyof typeof scenarios; 