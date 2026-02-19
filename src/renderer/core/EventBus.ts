export default class EventBus {

    private events : Map<string, Function[]> = new Map();

    constructor() {}

    on(eventName: string, callback: Function) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);            
        } 
        this.events.get(eventName)!.push(callback);
    }

    emit(eventName: string, payload?: any) {
        this.events.get(eventName)?.forEach(e => e(payload));        
    }

    off(eventName: string, callback: Function) {
        const arr = this.events.get(eventName);
        if (!arr) return;
        this.events.set(eventName, arr.filter(cb => cb !== callback));
    }
}