import DocumentNode from './DocumentNode';
export declare function normalizeElementName(elementName: string): string;
export declare function elementIterator(el: ViewNode): Iterable<ViewNode>;
export default class ViewNode {
    nodeType: number;
    _tagName: string;
    parentNode: ViewNode;
    childNodes: ViewNode[];
    prevSibling: ViewNode;
    nextSibling: ViewNode;
    _ownerDocument: DocumentNode;
    _attributes: {
        [index: string]: any;
    };
    constructor();
    hasAttribute(name: string): boolean;
    removeAttribute(name: string): void;
    toString(): string;
    set tagName(name: string);
    get tagName(): string;
    get firstChild(): ViewNode;
    get lastChild(): ViewNode;
    get ownerDocument(): DocumentNode;
    getAttribute(key: string): any;
    setAttribute(key: string, value: any): void;
    setText(text: string): void;
    updateText(): void;
    onInsertedChild(childNode: ViewNode, index: number): void;
    onRemovedChild(childNode: ViewNode): void;
    insertBefore(childNode: ViewNode, referenceNode: ViewNode): void;
    appendChild(childNode: ViewNode): void;
    removeChild(childNode: ViewNode): void;
    firstElement(): ViewNode;
}
