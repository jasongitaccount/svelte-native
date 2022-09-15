import { ViewNode } from '../basicdom';
import ElementNode from '../basicdom/ElementNode';
export declare enum NativeElementPropType {
    Value = 0,
    Array = 1,
    ObservableArray = 2
}
export interface NativeElementPropConfig {
    [key: string]: NativeElementPropType;
}
export default class NativeElementNode<T> extends ElementNode {
    _nativeElement: T;
    propAttribute: string;
    propConfig: NativeElementPropConfig;
    constructor(tagName: string, elementClass: new () => T, setsParentProp?: string, propConfig?: NativeElementPropConfig);
    get nativeElement(): T;
    set nativeElement(el: T);
    getAttribute(fullkey: string): any;
    onInsertedChild(childNode: ViewNode, index: number): void;
    onRemovedChild(childNode: ViewNode): void;
    setAttribute(fullkey: string, value: any): void;
}
export declare function registerNativeConfigElement<T>(elementName: string, resolver: () => new () => T, parentProp?: string, propConfig?: NativeElementPropConfig): void;
