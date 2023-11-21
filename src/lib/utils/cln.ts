import {withNaming} from '@bem-react/classname'

export type ClnMod = Record<string, string | boolean | undefined>;

export const NAMESPACE = 'adv-';
export const NAMESPACE_NEW = 'a';

export const cln = withNaming({e: '__', m: '_'});
export const block = withNaming({n: NAMESPACE, e: '__', m: '_'});
export const blockNew = withNaming({n: NAMESPACE_NEW, e: '__', m: '_'});

export type ClnBlock = ReturnType<typeof cln>;

export function modClassName(className: string){
    return className.split(/\s(.*)/)[1];
}
