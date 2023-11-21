import React from 'react';
import {block} from "../utils/cln.ts";
import {DOMBaseProps, QAProps} from "../types.ts";

const blck = block('button');

export type ButtonView =
    | 'normal'
    | 'action' // brand background, no border
    | 'outlined' // no background, grey border

export type ButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl';

export type ButtonPin =
    | 'round-round'
    | 'brick-brick'
    | 'clear-clear'

export type ButtonWidth = 'auto' | 'max-fill';

export interface ButtonProps extends DOMBaseProps, QAProps{
    id?:        string;
    selected?:  boolean;
    disabled?:  boolean;
    loading?:   boolean;
    width?:     ButtonWidth;
    title?:     string;

    view?:      ButtonView;
    pin?:       ButtonPin;
    size?:      ButtonSize;
}

const Button = () => {
    return (
        <div>

        </div>
    );
};

export default Button;
