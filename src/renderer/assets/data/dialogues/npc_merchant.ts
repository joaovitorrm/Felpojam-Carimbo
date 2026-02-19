import type { DialogTree } from "../../../types/DialogTypes";

export const merchantDialog: DialogTree = {
    start: {
        speaker: "Mercador",
        text: "Quer comprar algo?",
        options: [
            {
                text: "Poção - 10G",
                next: "buyPotion",
                action: (state) => {
                    const gold = state.getVar("gold");
                    state.setVar("gold", gold - 10);
                },
                condition: (state) => state.getVar("gold") >= 10
            }
        ]
    },

    buyPotion: {
        speaker: "Mercador",
        text: "Aqui está sua poção!"
    }
};
