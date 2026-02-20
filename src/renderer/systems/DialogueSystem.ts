import { DialogState } from "../core/DialogState";
import type GameContext from "../core/GameContext";
import type { DialogNode, DialogTree } from "../types/DialogTypes";


export class DialogSystem {
    private state = new DialogState();

    private currentTree!: DialogTree;
    private currentNode!: DialogNode;
    private currentKey!: string;

    constructor(private context: GameContext) {
        this.context.eventBus.on("dialog:start", (e: {dialogTree: DialogTree, dialogStage: string}) => {
            this.start(e.dialogTree, e.dialogStage)
        });
    }

    start(tree: DialogTree, startKey: string) {
        this.currentTree = tree;
        this.goTo(startKey);
    }

    private goTo(key: string) {
        const node = this.currentTree[key];

        console.log(node);

        if (!node) return;

        // verifica condição
        if (node.condition && !node.condition(this.state)) {
            if (node.next) {
                this.goTo(node.next);
            }
            return;
        }

        this.currentKey = key;
        this.currentNode = node;

        // executa ação ao entrar
        node.action?.(this.state);
    }

    next() {
        if (this.currentNode.options) return;

        if (this.currentNode.next) {
            this.goTo(this.currentNode.next);
        }
    }

    choose(index: number) {
        const option = this.currentNode.options?.[index];
        if (!option) return;

        if (option.condition && !option.condition(this.state)) return;

        option.action?.(this.state);

        this.goTo(option.next);
    }

    getNode() {
        return this.currentNode;
    }

    getState() {
        return this.state;
    }
}
