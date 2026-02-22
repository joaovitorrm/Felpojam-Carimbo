import type { DialogScript } from "../../../types/DialogTypes"

export const Marcos: DialogScript = {
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
      { type: "say", speaker: "Marcos", text: "Você sabe quanto é 2 + 2?" },
      { type: "say", speaker: "Marcos", text: "Você sabe quanto é 4 + 4?" },
      { type: "say", speaker: "Marcos", text: "Você sabe quanto é 6 + 6?" },

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
      { type: "say", speaker: "Marcos", text: "Eu disse que não!" },
    ],

    showPass: [
      { type: "say", speaker: "Marcos", text: "Hm... tudo certo. Pode passar." },
      { type: "setFlag", key: "gateOpen" }
    ],

    alreadyOpen: [
      { type: "say", speaker: "Marcos", text: "Já está aberto. Pode ir." }
    ]
  }
}