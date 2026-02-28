import type DialogState from "../core/DialogState"
import type EventBus from "../core/EventBus"
import type { DialogCommand, DialogScript } from "../types/DialogTypes"

export class DialogInterpreter {

    private currentNode!: string;
    private commandIndex = 0;
    private script!: DialogScript;
    private running = false;

    constructor(private state: DialogState, private events: EventBus) { }

    load(node: string, script: DialogScript) {
        this.script = script;
        this.currentNode = node;
        this.commandIndex = 0;
        this.running = true;
    }

    run() {
        if (!this.running) return;

        const commands = this.script.nodes[this.currentNode];
        const command = commands?.[this.commandIndex];

        if (!command) {
            this.running = false;
            this.events.emit("dialog:ended");
            return;
        }

        this.execute(command);
    }

    private execute(cmd: DialogCommand) {

        switch (cmd.type) {

            case "say":
                this.events.emit("dialog:say", cmd);
                break;

            case "choice":
                const cmdCopy = structuredClone(cmd);
                const validOptions = cmdCopy.options.filter(o => !o.condition || this.state.hasFlag(o.condition));
                cmdCopy.options = validOptions;
                this.events.emit("dialog:choice", cmdCopy);
                break;

            case "jump":
                this.currentNode = cmd.target;
                this.commandIndex = 0;
                this.run();
                break;

            case "setFlag":
                this.state.setFlag(cmd.key);
                this.next();
                break;

            case "if":
                if (this.state.hasFlag(cmd.condition)) {
                    this.currentNode = cmd.then;
                    this.commandIndex = 0;
                    this.run();
                } else {
                    if (!cmd.else) break;
                    this.currentNode = cmd.else;
                    this.commandIndex = 0;                    
                    this.run();
                }
                break;
            
            case "sceneChange":
                this.events.emit("dialog:ended");
                this.events.emit("scene:change", cmd.next);
                break;
            
            case "collect": {
                this.events.emit("scene:object:collect", cmd.key);
                this.next();
                break;
            }

        }
    }
    next() {
        this.commandIndex++;
        this.run();
    }

    goTo(target: string) {
        this.currentNode = target;
        this.commandIndex = 0;
        this.run();
    }
}
