/* import type { DialogTree } from "../../../types/DialogTypes";

export const Daniel: DialogTree = {
    0: {
        speaker: "Daniel",
        text: "Você sabe quanto é 2 + 2?",
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
        speaker: "Daniel",
        text: "Eu disse que não!",
        next: 0
    },

    2: {
        speaker: "Daniel",
        text: "Hm... tudo certo. Pode passar.",
        action: (state) => state.setFlag("gateOpen")
    }
};
 */