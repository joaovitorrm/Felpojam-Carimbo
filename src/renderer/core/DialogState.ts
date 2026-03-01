export default class DialogState {
    flags = new Set<string>();
    variables = new Map<string, number>();

    setFlag(flag: string) {
        this.flags.add(flag);
    }

    hasFlag(flag: string) {
        const flags = flag.split("&&").map((f) => f.trim());
        return flags.every((f) => this.flags.has(f));
    }

    setVar(key: string, value: number) {
        this.variables.set(key, value);
    }

    getVar(key: string) {
        return this.variables.get(key) ?? 0;
    }

    clear() {
        this.flags.clear();
        this.variables.clear();
    }
}