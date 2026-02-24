import type { DialogScript } from "../../../types/DialogTypes"

export const Daniel: DialogScript = {
  entry: "start",

  nodes: {
    start: [
      {
        type: "if",
        condition: "gateOpen",
        then: "alreadyOpen",
        else: "blocked"
      }
    ],

    blocked: [
      { type: "say", speaker: "Daniel", text: "Bom dia, quem és tu?" },

      {
        type: "choice",
        options: [
          { text: "Insistir", jump: "insistir" },
          {
            text: "Mostrar passe",
            jump: "showPass"
          }
        ]
      }
    ],

    insistir: [
      { type: "say", speaker: "Daniel", text: "Eu disse que não!" },
    ],

    showPass: [
      { type: "say", speaker: "Daniel", text: "Hm... tudo certo. Pode passar." },
      { type: "setFlag", key: "gateOpen" }
    ],

    alreadyOpen: [
      { type: "say", speaker: "Daniel", text: "Já está aberto. Pode ir." }
    ]
  }
}