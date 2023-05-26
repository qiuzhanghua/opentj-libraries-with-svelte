import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MyCounterProps = typeof __propDef.props;
export type MyCounterEvents = typeof __propDef.events;
export type MyCounterSlots = typeof __propDef.slots;
export default class MyCounter extends SvelteComponentTyped<MyCounterProps, MyCounterEvents, MyCounterSlots> {
}
export {};
