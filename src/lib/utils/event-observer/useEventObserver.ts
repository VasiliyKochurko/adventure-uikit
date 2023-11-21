import {eventObserver} from "./EventObserver.ts";
import React from "react";
import {EventObserverListener} from "./types.ts";

export function useEventObserver(listener: EventObserverListener, observer = eventObserver){
    React.useEffect(()=>{
        observer.startListening(listener)
        return () => observer.endOfListening(listener)
    }, [observer, listener]);
}
