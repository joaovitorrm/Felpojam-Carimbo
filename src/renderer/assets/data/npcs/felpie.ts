/* import type { DialogTree } from "../../../types/DialogTypes";

export const Felpie: DialogTree = {
    0: {
        speaker: "Felpie",
        text: "Talvez?",
        options: [
            {
                text: "Poção - 10G",
                next: 1,
                action: (state) => {
                    const gold = state.getVar("gold");
                    state.setVar("gold", gold - 10);
                },
                condition: (state) => state.getVar("gold") >= 10
            }
        ]
    },

    1: {
        speaker: "Felpie",
        text: "Aqui está sua poção!"
    }
};
 */