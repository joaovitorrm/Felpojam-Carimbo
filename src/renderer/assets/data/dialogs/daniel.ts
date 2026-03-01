import type { DialogScript } from "../../../types/DialogTypes"

export const Daniel: DialogScript = {
  entry: "start",

  nodes: {
    start: [
      {
        type: "say",
        speaker: "Você",
        text: "Você é Daniel, certo?"
      },
      {
        type: "say",
        speaker: "Daniel",
        text: "E você é…?"
      },
      {
        type: "say",
        speaker: "Você",
        text: "Marcos Carvalho. Eu estive… investigando as mortes que vêm sendo noticiadas."
      },
      {
        type: "say",
        speaker: "Daniel",
        text: "E o que isso tem a ver comigo? Acha que eu sou o responsável?"
      },
      {
        type: "say",
        speaker: "Você",
        text: "Pelo contrário. Acho que você pode ser a próxima vítima."
      },
      {
        type: "say",
        speaker: "Daniel",
        text: "E o que o leva a dizer isso?"
      },
      {
        type: "choice",
        options: [
          {
            text: "Mostrar provas",
            condition: "hasEnvelope",
            jump: "mostrarEnvelope"
          },
          {
            text: "Não tenho como provar",
            jump: "semEnvelope"
          }
        ]
      }
    ],
    semEnvelope: [
      {
        type: "setFlag",
        key: "danielSemEnvelope"
      },
      {
        type: "say",
        speaker: "Você",
        text: "Eu não estou com elas agora, mas tenho as evidências todas em casa. Eu posso trazê-las aqui para você ver."
      },
      {
        type: "say",
        speaker: "Daniel",
        text: "Certo, aham. E como você sabe onde eu moro, sendo que eu nunca te vi antes?"
      },
      {
        type: "say",
        speaker: "Você",
        text: "..."
      },
      {
        type: "say",
        speaker: "Daniel",
        text: "Se eu deixar você entrar, aí sim que vou aparecer nos noticiários."
      },
      {
        type: "say",
        speaker: "Você",
        text: "Espera! Daniel, você está em perigo!"
      },
      {
        type: "sceneChange",
        next: "entrada_daniel_fechado"
      }
    ],
    mostrarEnvelope: [
      {
        type: "say",
        speaker: "Você",
        text: "Eu sei que vai parecer loucura, mas… você tem uma marca no pescoço, não tem?"
      },
      {
        type: "say",
        speaker: "Daniel",
        text: "Sim, minha marca de nascença, por quê? Espera, esse sou eu na foto!"
      },
      {
        type: "say",
        speaker: "Você",
        text: "Sinto muito ter invadido sua privacidade, mas é justamente por causa dessa sua marca que tive que vir falar com você. Ela tem o mesmo estilo das marcas que as outras vítimas tinham. Tudo leva a crer que você também possa estar em perigo."
      },
      {
        type: "say",
        speaker: "Daniel",
        text: "..."
      },
      {
        type: "say",
        speaker: "Daniel",
        text: "Entre. Mas saiba que tem câmeras na entrada. Se fizer algo, vai ficar tudo registrado para a polícia ver."
      },
      {
        type: "sceneChange",
        next: "sala_daniel"
      }
    ],
    sala: [
      {
        type: "say",
        speaker: "Você",
        text: "Essa marca que você tem no pescoço…"
      },
      {
        type: "say",
        speaker: "Daniel",
        text: "Ela? Tenho desde que me lembro como gente."
      },
      {
        type: "say",
        speaker: "Você",
        text: "Posso olhar ela melhor?"
      },
      {
        type: "say",
        speaker: "Daniel",
        text: "Acho… que não tem problema, se for ajudar no caso."
      },
      {
        type: "say",
        speaker: "Você",
        text: "(Parece… marcas de queimadura já cicatrizadas.)"
      },
      {
        type: "say",
        speaker: "Você",
        text: "Você sofreu algum tipo de acidente quando criança?"
      },
      {
        type: "say",
        speaker: "Daniel",
        text: "Tirando uma perna andando de bicicleta, nada grave."
      },
    ],
    quarto_daniel: [
      {
        type: "say",
        speaker: "Daniel",
        text: "Estou de olho em ti."
      },
    ]
  }
}