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

  start(node: string, script: DialogScript) {
    this.events.emit("dialog:started");

    this.interpreter.load(node, script);
    this.interpreter.run();
  }

  private registerEvents() {

    this.events.on("dialog:npc:interact", (npcId: string) => {
      const { node, script } = this.world.getNpcState(npcId);
      this.start(node, script);
    });

    this.events.on("dialog:object:interact", (objId: string) => {
      const { node, script } = this.world.getPropState(objId);
      this.start(node, script);
    })

    this.events.on("dialog:start", (data : { npcId: string, target: string}) => {
      const { script } = this.world.getNpcState(data.npcId);
      this.start(data.target, script);
    })

    this.events.on("dialog:continue", () => {
      this.interpreter.next();
    });

    this.events.on("dialog:jump", (target: string) => {
      this.interpreter.goTo(target);
    });
  }
}