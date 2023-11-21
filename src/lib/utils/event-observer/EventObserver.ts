import {NAMESPACE} from "../cln.ts";
import {EventObserverData, EventObserverListener} from "./types.ts";

export class EventObserver {
    listeners: EventObserverListener[] = [];
    componentPrefix?: string;

    constructor(pref?: string) {
        this.componentPrefix = pref;
    }

    startListening(listen: EventObserverListener){
        this.listeners.push(listen);
    }

    endOfListening(listen: EventObserverListener){
        const id = this.listeners.indexOf(listen);

        if(id > -1){
            this.listeners.splice(id, 1)
        }
    }

    publish({componentId, ...data}: EventObserverData){
        this.listeners.forEach((f) => f({
            ...data,
            componentId: this.componentPrefix ? `${this.componentPrefix}${componentId}` : componentId
        }), );
    }

    withEventPublisher(componentId: string, qa?: string){
        return (eventObserverData: Omit<EventObserverData, 'componentId' | 'qa'>) => {
            this.publish({
                ...eventObserverData,
                componentId,
                qa,
            });
        };
    }
}

export const eventObserver = new EventObserver(NAMESPACE);


