import { View, NavigationTransition, Frame } from "@nativescript/core";
import FrameElement from "./native/FrameElement";
import PageElement from "./native/PageElement";
import NativeViewElementNode from "./native/NativeViewElementNode";
export declare type ViewSpec = View | NativeViewElementNode<View>;
export declare type FrameSpec = Frame | FrameElement | string;
export declare type PageSpec = typeof SvelteComponent;
export interface NavigationOptions {
    page: PageSpec;
    props?: any;
    frame?: FrameSpec;
    animated?: boolean;
    backstackVisible?: boolean;
    clearHistory?: boolean;
    transition?: NavigationTransition;
    transitionAndroid?: NavigationTransition;
    transitioniOS?: NavigationTransition;
}
export declare function navigate(options: NavigationOptions): SvelteComponent;
export interface BackNavigationOptions {
    frame?: FrameSpec;
    to?: PageElement;
}
export declare function goBack(options?: BackNavigationOptions): any;
export interface ShowModalOptions {
    page: PageSpec;
    target?: ViewSpec;
    props?: any;
    android?: {
        cancelable: boolean;
    };
    ios?: {
        presentationStyle: any;
    };
    animated?: boolean;
    fullscreen?: boolean;
    stretched?: boolean;
}
export declare function showModal<T>(modalOptions: ShowModalOptions): Promise<T>;
export declare function closeModal(result: any): void;
export declare function isModalOpened(): boolean;
