import {QAProps} from "../../types.ts";
import React from "react";

export interface EventObserverData<T = unknown> extends QAProps{
    componentId: string;
    eventId: string;
    meta?: T;
    DOMEvent?: React.SyntheticEvent;
}

export type EventObserverListener = (data: EventObserverData) => void
