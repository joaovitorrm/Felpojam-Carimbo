import musica_triste from "./bgm/musica_triste.wav";
import musica_macabra from "./bgm/musica_macabra.wav";
import musica_final_bom from "./bgm/musica_final_bom.wav";

export const sounds = { 
    musica_triste,
    musica_macabra,
    musica_final_bom
};

export type SoundsKey = keyof typeof sounds