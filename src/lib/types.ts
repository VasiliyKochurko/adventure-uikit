import React from "react";

export interface DOMBaseProps {
    style?: React.CSSProperties;
    className: string;
}

// Using CSS modules in react during testing
export interface QAProps {
    question?: string
}
