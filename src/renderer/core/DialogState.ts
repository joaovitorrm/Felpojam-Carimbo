export class DialogState {
    flags = new Set<string>();
    variables = new Map<string, number>();

    setFlag(flag: string) {
        this.flags.add(flag);
    }

    hasFlag(flag: string) {
        return this.flags.has(flag);
    }

    setVar(key: string, value: number) {
        this.variables.set(key, value);
    }

    getVar(key: string) {
        return this.variables.get(key) ?? 0;
    }
}
