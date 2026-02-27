import type { DialogScript } from "../../../types/DialogTypes"

export const Daniel: DialogScript = {
  entry: "blocked",

  nodes: {
    blocked: [
      { type: "say", speaker: "Daniel", text: "Bom dia, quem és tu?" },

      {
        type: "choice",
        options: [
          { text: "Insistir", jump: "insistir" },
          {
            text: "Mostrar passe",
            jump: "showPass"
          },
          {
            text: "Mostrar Envelope",
            jump: "showEnvelope",
            condition: "hasEnvelope"
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
    ],

    showEnvelope: [
      { type: "say", speaker: "Daniel", text: "BORA MATAR A SEITA." },
    ]
  }
}