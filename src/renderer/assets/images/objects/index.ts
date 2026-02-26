import fotografia from "./fotografia.png";
import calendario from "./calendario.png";
import envelope from "./envelope.png";
import olivia from "./olivia.png";
import clarissa from "./clarissa.png";
import bernardo from "./bernardo.png";

export const objects = {
    fotografia,
    calendario,
    envelope,
    olivia,
    clarissa,
    bernardo
} as const

export type ObjectAssetsKey = keyof typeof objects;