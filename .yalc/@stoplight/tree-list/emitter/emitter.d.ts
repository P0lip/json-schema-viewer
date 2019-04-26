import { IEventEmitterInstance } from '@stoplight/lifecycle';
import StrictEventEmitter from 'strict-event-emitter-types';
export declare function createEmitter<T extends object>(): new () => StrictEventEmitter<IEventEmitterInstance, T, T, "addListener" | "addEventListener" | "removeListener" | "removeEventListener" | "once", "on" | "emit">;
