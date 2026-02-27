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
    simboloVinicius
} as const

export type ObjectAssetsKey = keyof typeof objects;