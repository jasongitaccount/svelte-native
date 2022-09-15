import { Application } from '@nativescript/core';
import { createElement, navigate, initializeDom } from './dom';
export { DomTraceCategory, closeModal, goBack, initializeDom, isModalOpened, navigate, showModal } from './dom';

function svelteNativeNoFrame(rootElement, data) {
    return new Promise((resolve, reject) => {
        let elementInstance;
        const buildElement = () => {
            let frag = createElement('fragment', window.document);
            elementInstance = new rootElement({
                target: frag,
                props: data || {}
            });
            return frag.firstChild.nativeElement;
        };
        //wait for launch before returning
        Application.on(Application.launchEvent, () => {
            resolve(elementInstance);
        });
        try {
            Application.run({ create: buildElement });
        }
        catch (e) {
            reject(e);
        }
    });
}
function svelteNative(startPage, data) {
    let rootFrame;
    let pageInstance;
    return new Promise((resolve, reject) => {
        //wait for launch
        Application.on(Application.launchEvent, () => {
            resolve(pageInstance);
        });
        try {
            Application.run({ create: () => {
                    rootFrame = createElement('frame', window.document);
                    rootFrame.setAttribute("id", "app-root-frame");
                    pageInstance = navigate({
                        page: startPage,
                        props: data || {},
                        frame: rootFrame
                    });
                    return rootFrame.nativeView;
                } });
        }
        catch (e) {
            reject(e);
        }
    });
}
// Svelte looks to see if window is undefined in order to determine if it is running on the client or in SSR.
// any imports of svelte/internals global also bind to the current value of window (during module import) so we need to 
// configure our dom now.
initializeDom();

export { svelteNative, svelteNativeNoFrame };
