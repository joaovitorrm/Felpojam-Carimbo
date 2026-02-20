import type { DialogTree } from "../../../types/DialogTypes";

export const danielDialog: DialogTree = {
    start: {
        speaker: "Daniel",
        text: "Você sabe quanto é 2 + 2?",
        options: [
            {
                text: "Insistir",
                next: "insist"
            },
            {
                text: "Mostrar passe",
                next: "checkPass",
                condition: (state) => state.hasFlag("hasPass")
            }
        ]
    },

    insist: {
        speaker: "Guarda",
        text: "Eu disse que não!",
        next: "start"
    },

    checkPass: {
        speaker: "Guarda",
        text: "Hm... tudo certo. Pode passar.",
        action: (state) => state.setFlag("gateOpen")
    }
};
