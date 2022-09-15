import { ViewNode } from './dom';
declare global {
    export class SvelteComponent {
        $destroy(): void;
        constructor(options: {
            target?: ViewNode | Element;
            props?: any;
            anchor?: ViewNode | Element;
            intro?: boolean;
        });
        $set(props: any): void;
    }
    interface Svelte2TsxComponentConstructorParameters<T> {
        target?: ViewNode | Element;
        props?: T;
        anchor?: ViewNode | Element;
        intro?: boolean;
    }
}
export declare function svelteNativeNoFrame(rootElement: typeof SvelteComponent, data: any): Promise<SvelteComponent>;
export declare function svelteNative(startPage: typeof SvelteComponent, data: any): Promise<SvelteComponent>;
export { navigate, goBack, showModal, closeModal, isModalOpened, initializeDom, DomTraceCategory } from "./dom";


import './jsx/svelte-native-jsx-nativescript-core'
import './jsx/shims.d.ts'
