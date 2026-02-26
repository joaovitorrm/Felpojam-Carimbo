import type { DialogScript } from "../../../types/DialogTypes";

export const clarissa: DialogScript = {
    entry: "start",
    nodes: {
        start: [
            {
                type: "say",
                speaker: "",
                text: "Clarissa Nascimento, 25 anos."
            },
            {
                type: "say",
                speaker: "",
                text: "Não era muito ativa nas redes sociais, mas soube por postagens de amigos que costumava ser muito próxima da mãe, que morreu 2 anos atrás ao dirigir embriagada."
            }
        ]
    }
    
}