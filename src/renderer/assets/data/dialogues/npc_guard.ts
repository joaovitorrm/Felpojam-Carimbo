import type { DialogTree } from "../../../types/DialogTypes";

export const guardDialog: DialogTree = {
    0: {
        speaker: "Gustavo",
        text: "Quer uma verdinha?",
        options: [
            {
                text: "Insistir",
                next: 1
            },
            {
                text: "Mostrar passe",
                next: 2,
                condition: (state) => state.hasFlag("hasPass")
            }
        ]
    },

    1: {
        speaker: "Gustavo",
        text: "Eu disse que não!",
        next: 0
    },

    2: {
        speaker: "Gustavo",
        text: "Hm... tudo certo. Pode passar.",
        action: (state) => state.setFlag("gateOpen")
    }
};
