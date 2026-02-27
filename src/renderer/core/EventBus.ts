export default class EventBus {

    private events: Map<string, Function[]> = new Map();

    constructor() { }

    on(eventName: string, callback: Function) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }
        this.events.get(eventName)!.push(callback);
    }

    once(eventName: string, callback: Function) {
        const wrapper = (payload?: any) => {
            callback(payload);
            this.off(eventName, wrapper);
        };
        this.on(eventName, wrapper);
    }

    async emit(eventName: string, payload?: any): Promise<any[]> {
        const listeners = this.events.get(eventName);
        if (!listeners) return [];

        const results = listeners.map(listener => listener(payload));

        return Promise.all(results);
    }

    off(eventName: string, callback: Function) {
        const arr = this.events.get(eventName);
        if (!arr) return;
        this.events.set(eventName, arr.filter(cb => cb !== callback));
    }
}