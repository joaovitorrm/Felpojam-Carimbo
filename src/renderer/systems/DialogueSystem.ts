import type DialogState from "../core/DialogState"
import type EventBus from "../core/EventBus"
import type WorldState from "../core/WorldState";
import type { DialogScript } from "../types/DialogTypes"
import { DialogInterpreter } from "./DialogInterpreter"

export default class DialogSystem {

  private interpreter: DialogInterpreter;

  constructor(
    state: DialogState,
    private world: WorldState,
    private events: EventBus
  ) {
    this.interpreter = new DialogInterpreter(state, events);
    this.registerEvents();
  }

  async start(node: string, script: DialogScript) {
    this.interpreter.load(node, script);
    await this.interpreter.run();
  }

  private registerEvents() {
    this.events.on("dialog:start", (data : { npcId: string, target: string}) => {
      const { node, script } = this.world.getNpcState(data.npcId, data.target);
      this.start(node, script);
    })

    this.events.on("dialog:continue", () => {
      this.interpreter.next();
    });

    this.events.on("dialog:jump", (target: string) => {
      this.interpreter.goTo(target);
    });
  }
}